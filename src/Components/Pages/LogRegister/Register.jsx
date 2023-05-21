import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SocialReg from './SocialReg';
import { AuthContext } from '../../../Contexts/Authprovider';
const Register = () => {
    const { user, createUser, updateUser, logOut } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
            setError('Password must be 6 characters,at least one uppercase letter, one lowercase letter, one number and one special character')
            form.reset()
            return;
        }
        else {
            createUser(email, password)
                .then(result => {
                    // toast.success('Registration Successful');
                    setError('');
                    updateUser(userName, photoUrl)
                        .then(() => {
                            logOut();
                        }).catch((error) => {
                            // toast.error(error.message);
                        });
                    navigate("/login")
                })
                .catch(error => {
                    setError(error.message);
                })
        }
        form.reset()
    }
    return (
        <div className='herobg'>
            <div className='boxed-container md:flex justify-between items-center py-24'>
                <div style={{ borderRadius: '20px' }} className='md:flex drop-shadow-lg mx-auto bg-white'>
                    <div className='py-12 px-5 bg-[#63A6FF] md:w-6/12 md:rounded-l-[20px] rounded-t-[20px] md:rounded-r-[0px] flex items-center'>
                        <img src="https://i.ibb.co/PMy18FS/app-development-concept-with-flat-deisng-23-2147852844.jpg" alt="" />
                    </div>
                    <div className='md:w-6/12 py-5 lg:py-12'>
                        <form onSubmit={handleRegister} className="bg-white rounded px-8 pt-6 pb-6 sm:w-96 mx-auto md:w-full lg:w-96">
                            <h2 className='text-2xl font-bold  text-center mb-8'>Register Here</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reg-name">
                                    Name
                                </label>
                                <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline" name="name" id="reg-name" type="text" placeholder="Your Name" required />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Photo-url">
                                    Photo URL
                                </label>
                                <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline" name="photo" id="photo-url" type="text" placeholder="photo url" required />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-address">
                                    Email Address
                                </label>
                                <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline" name="email" id="email-address" type="email" placeholder="Email Address" required />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline mb-2" id="password" type="password" placeholder="Password" required />
                            </div>
                            <div>
                                <p className={error ? 'text-red-500 text-sm my-2' : 'hidden'}>{error}</p>
                                <button className="bg-[#26A8DF] mt-2 hover:bg-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:text-[#26A8DF] border border-[#26A8DF] duration-500" type="submit">
                                    Sign Up
                                </button>

                            </div>
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                    Or
                                </p>
                            </div>
                            <SocialReg></SocialReg>
                        </form>
                        <p className="text-sm text-center pt-3"> Already Have An Account? <Link className='text-[#26A8DF]' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;