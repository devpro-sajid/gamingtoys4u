import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider';
import Swal from 'sweetalert2';

const SocialReg = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const { googleLogIn} = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleLogIn()
            .then((result) => {
                navigate(from, { replace: true })
                Swal.fire({
                    icon: 'success',
                    title: 'You have logged in Successfully',
                    showConfirmButton: false,
                    timer:1500
                  })
            })
            .catch((error) => {
                // toast.error(error.message);
            })
    }
    return (
        <div className='lg:pr-16 sm:pr-16 md:pr-0 sm:w-96 mx-auto md:w-full lg:w-96'>
            <button onClick={handleGoogleLogin} className='mt-2 w-100 flex items-center text-sky-500 border border-sky-500 rounded-md py-2 px-4 w-full justify-center ease-in-out duration-300'><img className='lg:mr-4 sm:mr-4 mr-2 md:mr-2 w-6' src='https://i.ibb.co/dcdswWJ/colourful-google-logo-on-white-background-free-vector-removebg-preview.png'/> <span className='font-semibold md:text-lg'>Continue With Google</span></button>
        </div>
    );
};

export default SocialReg;