import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const ToyRow = ({ toy, setLoadUpdateToys }) => {

    let [isOpen, setIsOpen] = useState(false)

    const handleDeleteToy=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://gaming-toy-server.vercel.app/deleteToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            setLoadUpdateToys(true)
                        }
                    })

            }
        })
    }
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.toyPrice = parseFloat(data.toyPrice);
        fetch(`https://gaming-toy-server.vercel.app/updateToy/${toy._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);

                if (response.modifiedCount > 0
                ) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    setLoadUpdateToys(true);
                }
            })
    }
    return (
        <>
            <tr key={toy._id}
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap md:px-6 px-4 py-4 font-medium text-base"><img className='w-16' src={toy?.toyPhoto} alt="" /></td>
                <td className="whitespace-nowrap md:px-6 px-4 py-4 text-black">{toy?.sellerName}</td>
                <td className="whitespace-nowrap md:px-6 px-4 py-4 text-black">{toy?.toyName}</td>
                <td className="whitespace-nowrap md:px-6 px-4 py-4 text-black">{toy?.category}</td>
                <td className="whitespace-nowrap md:px-6 px-4 py-4 text-black">${toy?.toyPrice}</td>
                <td className="whitespace-nowrap md:px-6 px-4  py-4 text-black">{toy?.quantity}</td>
                <td className="whitespace-nowrap md:px-6 px-4  py-4 text-black">{toy?.rating}</td>
                <td className="whitespace-nowrap md:pl-6 pl-4 text-right py-4 text-black"><Link to={`/toy-details/${toy?._id}`}><button className='flex items-center space-x-2 justify-items-center bg-[#26A8DF] text-white hover:bg-white border border-[#26A8DF] duration-500 hover:text-[#26A8DF] rounded-sm px-3 py-1'><span>View Details</span>
                    <FaEye></FaEye>
                </button></Link></td>

                <td className="whitespace-nowrap md:pl-6 pl-4 pr-4 py-4 text-black text-right">
                    <button onClick={openModal}>
                        <FaRegEdit className='text-lg'></FaRegEdit>
                    </button>

                    <Transition appear show={isOpen} as={Fragment
                    }>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-2xl pt-6 pb-3 text-center font-semibold leading-6 text-gray-900 "
                                            >
                                                Update Toy
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded md:px-8 px-2 pt-6 pb-6 " id='add-form'>
                                                    <div className="md:flex items-center md:space-x-4">
                                                        <div className='md:w-1/2 mb-3'>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                Toy Name
                                                            </label>
                                                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("toyName")} type="text"
                                                                defaultValue={toy?.toyName}
                                                                placeholder="Name of your toy" required />
                                                        </div>
                                                        <div className='md:w-1/2 mb-3'>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                Picture (url)
                                                            </label>
                                                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("toyPhoto")} type="url"
                                                                defaultValue={toy?.toyPhoto} placeholder="https://toypicture.png/" required />
                                                        </div>
                                                    </div>

                                                    <div className="md:flex items-center md:space-x-4">
                                                        <div className='md:w-1/2 mb-3'>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                Seller Name
                                                            </label>
                                                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("sellerName")} type="text" placeholder="type your name" defaultValue={toy.sellerName} required readOnly />
                                                        </div>
                                                        <div className='md:w-1/2 mb-3'>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                Seller Email
                                                            </label>
                                                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("sellerEmail")} type="email" defaultValue={toy?.sellerEmail} required readOnly />
                                                        </div>
                                                    </div>

                                                    <div className="md:flex items-center md:space-x-4">
                                                        <div className='md:w-1/2 mb-3'>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                Category
                                                            </label>
                                                            <select className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("category")}
                                                                defaultValue={toy?.category} >
                                                                <option value="rubiks">Rubiks</option>
                                                                <option value="puzzle">Puzzle</option>
                                                                <option value="board">Board</option>
                                                            </select>
                                                        </div>
                                                        <div className='md:w-1/2 mb-3'>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                Price (USD)
                                                            </label>
                                                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("toyPrice")} type="number"
                                                                defaultValue={toy?.toyPrice} placeholder="price of your toy" required />
                                                        </div>
                                                    </div>

                                                    <div className="md:flex items-center md:space-x-4">
                                                        <div className='md:w-1/2 mb-3'>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                Available Quantity
                                                            </label>
                                                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("quantity")} type="text"
                                                                defaultValue={toy?.quantity}
                                                                placeholder="toy quantity" required />
                                                        </div>
                                                        <div className='md:w-1/2 mb-3'>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                Rating
                                                            </label>
                                                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("rating")} type="text"
                                                                defaultValue={toy?.rating} placeholder="1 to 5" required />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                                            Details Description
                                                        </label>
                                                        <textarea className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " id="txtid" {...register("detailsDes")}
                                                            defaultValue={toy?.detailsDes} rows="5" cols="50" maxLength="500"></textarea>
                                                    </div>

                                                    {/* add Button */}
                                                    <div onClick={closeModal} className=" ">
                                                        <button className="bg-[#26A8DF] mt-2 hover:bg-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:text-[#26A8DF] border border-[#26A8DF] duration-500" type="submit">
                                                            Update Toy
                                                        </button>
                                                    </div>

                                                </form>
                                            </div>

                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </td>
                <td className="whitespace-nowrap md:pl-6 pl-4 pr-4 py-4 text-black text-right">
                    <button onClick={()=>handleDeleteToy(toy._id)}>
                        <FaRegTrashAlt className='text-lg'></FaRegTrashAlt>
                    </button>
                </td>
            </tr>



        </>
    )
};

export default ToyRow;