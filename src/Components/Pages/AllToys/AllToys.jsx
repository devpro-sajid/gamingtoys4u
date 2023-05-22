import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';


const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <>
            <div className='herobg py-28 text-white text-center'>
                <h2 className='text-3xl font-semibold font-fred'>All Toys</h2>
            </div>

            <div className='sm:flex justify-between boxed-container pt-12 pb-3 items-center'>
                <div className='md:flex md:space-x-3 items-center  md:w-7/12 sm:w-8/12'>
                    <p className='sm:hidden md:block text-xl font-semibold '>Search Toys: </p>

                    <div className="relative  flex w-full flex-wrap items-stretch md:w-8/12 sm:my-0  my-4">
                        <input
                            type="search"
                            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#26A8DF] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            name='searchField'
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon1" />


                        <button
                            className="relative z-[2] flex items-center rounded-r bg-[#26A8DF] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                            type="button"
                            id="button-addon1"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                </div>

                <div className='md:w-5/12 sm:w-4/12 sm:flex justify-end'>
                    <p>Fahim</p>
                </div>


            </div>

            <div className="flex flex-col boxed-container mb-14">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500 bg-[#ECF4FA]">
                                    <tr className='text-black'>
                                        <th scope="col" className="md:px-6 px-4 py-4">#</th>
                                        <th scope="col" className="md:px-6 px-4 py-4">Seller</th>
                                        <th scope="col" className="md:px-6 px-4 py-4">Toy Name</th>
                                        <th scope="col" className="md:px-6 px-4 py-4">Sub-category</th>
                                        <th scope="col" className="md:px-6 px-4 py-4">Price</th>
                                        <th scope="col" className="md:pl-6 px-4 py-4">Available Qty</th>
                                        <th scope="col" className="md:pl-6 pr-3 pl-4 py-4 flex justify-end">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {toys && toys.map((toy,index) => {
                                        return (<tr key={toy._id}
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap md:px-6 px-4 py-4 font-medium text-base">{index+1}</td>
                                            <td className="whitespace-nowrap md:px-6 px-4 py-4 text-black">{toy?.sellerName}</td>
                                            <td className="whitespace-nowrap md:px-6 px-4 py-4 text-black">{toy?.toyName}</td>
                                            <td className="whitespace-nowrap md:px-6 px-4 py-4 text-black">{toy?.category}</td>
                                            <td className="whitespace-nowrap md:px-6 px-4 py-4 text-black">${toy?.toyPrice}</td>
                                            <td className="whitespace-nowrap md:px-6 px-4  py-4 text-black">{toy?.quantity}</td>
                                            <td className="whitespace-nowrap md:pl-6 pl-4 flex justify-end py-4 text-black"><button className='flex items-center space-x-2 justify-items-center bg-[#26A8DF] text-white hover:bg-white border border-[#26A8DF] duration-500 hover:text-[#26A8DF] rounded-sm px-3 py-1'><span>View Details</span>
                    <FaEye></FaEye>
                </button></td>
                                        </tr>)
                                    }
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AllToys;