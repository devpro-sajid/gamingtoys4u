import React, { useEffect, useState, Fragment, useContext } from 'react';
import { useForm } from "react-hook-form";
import { Dialog, Transition, Menu } from '@headlessui/react'
import { FaAngleDown, FaRegEdit, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Contexts/Authprovider';
import ToyRow from './ToyRow';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [sortValue, setsortValue] = useState('Sort data by');
    const [loadUpdateToys,setLoadUpdateToys]=useState(false);


   
    
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/myToys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setToys(data);
                setLoadUpdateToys(false)
            })
    }, [user,loadUpdateToys])
    const handleSearchToys = () => {
        if (searchText === "") {
            return Swal.fire({
                icon: 'warning',
                title: 'Please type something and try again',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            setLoading(true);
            fetch(`http://localhost:5000/getMyToysByText?text=${searchText}&email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setToys(data);
                    setLoading(false);
                });
        }

    }
    const handleSortToys = (num, sorts) => {
        setLoading(true);
        fetch(`http://localhost:5000/sortMyToys?num=${num}&email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setToys(data)
            })
        setsortValue(sorts);
    }
    return (
        <>
            <div className='herobg py-28 text-white text-center'>
                <h2 className='text-3xl font-semibold font-fred'>My Toys</h2>
            </div>

            <div className='sm:flex justify-between boxed-container pt-12 pb-3 items-center'>
                <div className='md:flex md:space-x-3 items-center  md:w-7/12 sm:w-8/12'>
                    <p className='hidden md:block text-xl font-semibold '>Search Toys: </p>

                    <div className="relative  w-full flex-wrap items-stretch md:w-8/12 sm:my-0  my-4 sm:flex hidden">
                        <input onChange={(e) => setSearchText(e.target.value)}
                            type="search"
                            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#26A8DF] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            name='searchField'
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon1" />


                        <button onClick={handleSearchToys}
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

                <div className='md:w-5/12 sm:w-4/12 flex sm:justify-end justify-between'>
                    <p className='sm:hidden  text-xl font-semibold '>Search Toys: </p>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full  justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
                                {sortValue}
                                <FaAngleDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a onClick={() => handleSortToys(1, 'Ascending')}
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Ascending
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a onClick={() => handleSortToys(-1, 'Descending')}
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Descending
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                </div>

                <div className="relative  flex w-full flex-wrap items-stretch md:w-8/12 sm:my-0  my-4 sm:hidden">
                    <input onChange={(e) => setSearchText(e.target.value)}
                        type="search"
                        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#26A8DF] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        name='searchField'
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon1" />


                    <button onClick={handleSearchToys}
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

            <div className="flex flex-col boxed-container mb-14">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500 bg-[#ECF4FA]">
                                    <tr className='text-black'>
                                        <th scope="col" className="md:px-6 px-4 py-4">Photo</th>
                                        <th scope="col" className="md:px-6 px-4 py-4">Seller</th>
                                        <th scope="col" className="md:px-6 px-4 py-4">Toy Name</th>
                                        <th scope="col" className="md:px-6 px-4 py-4">Sub-category</th>
                                        <th scope="col" className="md:px-6 px-4 py-4">Price</th>
                                        <th scope="col" className="md:pl-6 px-4 py-4">Available Qty</th>
                                        <th scope="col" className="md:pl-6 px-4 py-4">Ratings</th>
                                        <th scope="col" className="md:pl-6 px-4 py-4">Details</th>
                                        <th scope="col" className="md:pl-6 px-4 py-4">Edit</th>
                                        <th scope="col" className="md:pl-6 pr-3 pl-4 py-4 flex justify-end">Del.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? <></> : <>{toys && toys.map((toy) => {
                                        return <ToyRow key={toy._id} toy={toy} setLoadUpdateToys={setLoadUpdateToys}></ToyRow>
                                    }
                                    )}
                                    </>}


                                </tbody>
                            </table>
                            {loading ? <div className="animate-pulse">
                                <div className="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
                                <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                                <div className="h-4 bg-gray-200 mb-6 rounded"></div>
                                <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                                <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                                <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                                <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                                <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                                <div className="h-4 bg-gray-200 mb-6 rounded"></div>
                            </div> : <></>}
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default MyToy;