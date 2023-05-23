import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Contexts/Authprovider';
import { TabTitle } from '../../../Utils/Generatefunctions';


const AddAToy = () => {
    TabTitle('Add A Toy | Gaming Toys & Puzzles');
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.toyPrice = parseFloat(data.toyPrice);
        fetch("https://gaming-toy-server.vercel.app/add-toy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                
                if (response.insertedId
                ) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                   reset();
                }
            })
    }
    return (
        <div className='herobg'>
            <div className='boxed-container py-16'>
                <div style={{ borderRadius: '20px' }} className='drop-shadow-lg mx-auto bg-white'>
                    <div className='py-5 lg:py-8 px-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded px-8 pt-6 pb-6 " id='add-form'>
                            <h2 className='text-2xl font-bold  text-center mb-8 font-fred'>Add A Toy</h2>

                            <div className="md:flex items-center md:space-x-4">
                                <div className='md:w-1/2 mb-3'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Toy Name
                                    </label>
                                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("toyName")} type="text" placeholder="Name of your toy" required />
                                </div>
                                <div className='md:w-1/2 mb-3'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Picture (url)
                                    </label>
                                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("toyPhoto")} type="url" placeholder="https://toypicture.png/" required />
                                </div>
                            </div>

                            <div className="md:flex items-center md:space-x-4">
                                <div className='md:w-1/2 mb-3'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Seller Name
                                    </label>
                                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("sellerName")} type="text" placeholder="type your name" defaultValue={user.displayName} required readOnly />
                                </div>
                                <div className='md:w-1/2 mb-3'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Seller Email
                                    </label>
                                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("sellerEmail")} type="email" defaultValue={user.email} required readOnly />
                                </div>
                            </div>

                            <div className="md:flex items-center md:space-x-4">
                                <div className='md:w-1/2 mb-3'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Category
                                    </label>
                                    <select className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("category")}>
                                        <option value="rubiks">Rubiks</option>
                                        <option value="puzzle">Puzzle</option>
                                        <option value="board">Board</option>
                                    </select>
                                </div>
                                <div className='md:w-1/2 mb-3'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Price (USD)
                                    </label>
                                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("toyPrice")} type="number" placeholder="price of your toy" required />
                                </div>
                            </div>

                            <div className="md:flex items-center md:space-x-4">
                                <div className='md:w-1/2 mb-3'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Available Quantity
                                    </label>
                                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("quantity")} type="text" placeholder="toy quantity" required />
                                </div>
                                <div className='md:w-1/2 mb-3'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Rating
                                    </label>
                                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("rating")} type="text" placeholder="1 to 5" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Details Description
                                </label>
                                <textarea className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " id="txtid" {...register("detailsDes")} rows="5" cols="50" maxLength="500"></textarea>
                            </div>

                            {/* add Button */}
                            <div className=" ">
                                <button className="bg-[#26A8DF] mt-2 hover:bg-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:text-[#26A8DF] border border-[#26A8DF] duration-500" type="submit">
                                    Add Toy
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;