import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider';
import SocialReg from './SocialReg';
import Swal from 'sweetalert2';
const Login = () => {
    const { loginUser } = useContext(AuthContext);
    // const [forget, forgetHandle] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    // const handlechecked=(event)=>{
    //     if (event.target.checked) {
    //         console.log('✅ Checkbox is checked');
    //       } else {
    //         console.log('⛔️ Checkbox is NOT checked');
    //       }
    // }
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        loginUser(email, password)
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'You have logged in Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate(from, { replace: true })
                // toast.success('Successfully Logged In'); 
               
            })
            .catch((error) => {

                if (error.message.includes('wrong-password')) {
                    // toast.error('Wrong Password! Please Try Again');
                    setError('Wrong Password! Please Try Again');
                }
                else {
                    // toast.error(error.message);
                    setError(error.message);
                }
                // ..
            });
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
                        <form onSubmit={handleLogin} className="bg-white rounded px-8 pt-6 pb-6 sm:w-96 mx-auto md:w-full lg:w-96">
                            <h2 className='text-2xl font-bold  text-center mb-8'>Login Here</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-log">
                                    Email Address
                                </label>
                                <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " name="email" id="email-log" type="email" placeholder="Email Address" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password-log">
                                    Password
                                </label>
                                <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline mb-2" id="password-log" name="password" type="password" placeholder="Password" required />
                            </div>
                            <div className=" ">

                                <div className="my-2 flex items-center justify-between">
                                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                            type="checkbox"
                                            value=""
                                            id="exampleCheck2"
                                        />
                                        <label
                                            className="inline-block pl-[0.15rem] hover:cursor-pointer md:text-base text-sm"
                                            htmlFor="exampleCheck2">
                                            Remember me
                                        </label>
                                    </div>

                                    {/* <!-- Forgot password link --> */}
                                    <a
                                        href="#!"
                                        className="text-[#26A8DF] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 md:text-base text-sm"
                                    >Forgot password?</a
                                    >
                                </div>


                                <p className={error ? 'text-red-500 text-sm my-2' : 'hidden'}>{error}</p>
                                <button className="bg-[#26A8DF] mt-2 hover:bg-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:text-[#26A8DF] border border-[#26A8DF] duration-500" type="submit">
                                    Sign In
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
                        <p className="text-sm text-center pt-3"> Don't Have An Account? <Link className='text-[#26A8DF]' to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;