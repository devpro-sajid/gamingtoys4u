import React, { useContext } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider';
import { TabTitle } from '../../../Utils/Generatefunctions';

const Blog = () => {
    const { user } = useContext(AuthContext);
    TabTitle('Blog | Gaming Toys & Puzzles');
    return (
        <>
            <div className='herobg py-24'>
                <h2 className='text-center text-white text-3xl font-semibold'>Blog Page</h2>
                <p className='font-mont text-white text-center pt-3'>Read our blogs and gather knowledge about toys more.</p>
            </div>


            <div className='grid boxed-container md:grid-cols-2 gap-8 my-16'>
                <div className='text-left p-8 border border-gray-200 rounded-md shadow'>
                    <img className='w-full h-80 rounded-md' src="https://i.ibb.co/GP6R2Ny/rt-and-at.png" alt="" />

                    <h2 className='sm:text-2xl text-xl font-bold pt-5'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>


                    <p className='text-lg py-4'>Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.Token are stored:<br />
                        1.Store it in local browser storage.
                        <br />
                        2.Store it in a cookie in client side, it can be safer than local browser storage.
                        <br />
                        3.Don't store the token but store username and password in the browser or client-side cookie, and then retrieve a new token by sending credentials silently.
                    </p>
                    <div className='sm:flex sm:justify-between items-center sm:space-x-3 mt-2'>
                        <div className='flex space-x-2 items-center sm:mb-0 mb-3'>
                            <img
                                className="h-8 w-8 rounded-full"
                                src={user?.photoURL}
                                alt=""
                            />
                            <p>By <strong>{user?.displayName}</strong></p>
                        </div>
                        <Link to='/blog'><button className='bg-[#26A8DF] px-10 py-1 rounded-md text-white font-semibold mr-4 border border-[#26A8DF] hover:bg-white hover:text-[#26A8DF] duration-500  text-lg'>View Details</button></Link>
                    </div>
                </div>
                <div className='text-left p-8 border border-gray-200 rounded-md shadow'>
                    <img className='w-full h-80 rounded-md' src="https://i.ibb.co/khwcwL0/Aggregation.webp" alt="" />

                    <h2 className='sm:text-2xl text-xl font-bold pt-5'>What is MongoDB aggregate and how does it work?</h2>



                    <p className='text-lg py-4'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

                        One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on.

                        While there are other methods of obtaining aggregate data in MongoDB, the aggregation framework is the recommended approach for most work.F
                    </p>
                    <div className='sm:flex sm:justify-between items-center sm:space-x-3 mt-2'>
                        <div className='flex space-x-2 items-center sm:mb-0 mb-3'>
                            <img
                                className="h-8 w-8 rounded-full"
                                src={user?.photoURL}
                                alt=""
                            />
                            <p>By <strong>{user?.displayName}</strong></p>
                        </div>
                        <Link to='/blog'><button className='bg-[#26A8DF] px-10 py-1 rounded-md text-white font-semibold mr-4 border border-[#26A8DF] hover:bg-white hover:text-[#26A8DF] duration-500  text-lg'>View Details</button></Link>
                    </div>
                </div>
                <div className='text-left p-8 border border-gray-200 rounded-md shadow'>
                    <img className='w-full h-80 rounded-md' src="https://i.ibb.co/KmVtFnJ/hqdefault.jpg" alt="" />

                    <h2 className='sm:text-2xl text-xl font-bold pt-5'>Compare SQL and NoSQL databases?</h2>



                    <p className='text-lg py-4'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                    <div className='sm:flex sm:justify-between items-center sm:space-x-3 mt-2'>
                        <div className='flex space-x-2 items-center sm:mb-0 mb-3'>
                            <img
                                className="h-8 w-8 rounded-full"
                                src={user?.photoURL}
                                alt=""
                            />
                            <p>By <strong>{user?.displayName}</strong></p>
                        </div>
                        <Link to='/blog'><button className='bg-[#26A8DF] px-10 py-1 rounded-md text-white font-semibold mr-4 border border-[#26A8DF] hover:bg-white hover:text-[#26A8DF] duration-500  text-lg'>View Details</button></Link>
                    </div>
                </div>
                <div className='text-left p-8 border border-gray-200 rounded-md shadow'>
                    <img className='w-full h-80 rounded-md' src="https://i.ibb.co/ZdGRSTG/62448459577c97af6b9493a5dfd2008d262c4410-2240x1260.png" alt="" />

                    <h2 className='sm:text-2xl text-xl font-bold pt-5'>What is express js? What is Nest JS?</h2>



                    <p className='text-lg py-4'>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
                    </p>
                    <div className='sm:flex sm:justify-between items-center sm:space-x-3 mt-2'>
                        <div className='flex space-x-2 items-center sm:mb-0 mb-3' >
                            <img
                                className="h-8 w-8 rounded-full"
                                src={user?.photoURL}
                                alt=""
                            />
                            <p>By <strong>{user?.displayName}</strong></p>
                        </div>
                        <Link to='/blog'><button className='bg-[#26A8DF] px-10 py-1 rounded-md text-white font-semibold mr-4 border border-[#26A8DF] hover:bg-white hover:text-[#26A8DF] duration-500  text-lg'>View Details</button></Link>
                    </div>
                </div>
                



            </div>
        </>

    );
};

export default Blog;