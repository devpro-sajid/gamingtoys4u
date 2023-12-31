import React from 'react';
import Rating from 'react-rating';
import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/Authprovider';
AOS.init();
const ToyCard = ({ toy }) => {
    const { toyName, _id, toyPhoto, toyPrice, rating } = toy
    const {user}=useContext(AuthContext)
    const handleViewNotification=()=>{
        if(user){
           return
        }
        else{
            Swal.fire({
                icon: 'warning',
                title: 'You have to log in first to view details',
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    return (
        <div  data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center" className='bg-white shadow-sm sm:mb-0 mb-4 py-5 px-7 rounded-sm'>
            <div className='flex justify-between items-center'>
                <h2 className='sm:text-lg text-sm font-semibold font-fred'>{toyName}</h2>
                <p className='sm:text-lg text-base text-[#26A8DF]'>${toyPrice}</p>
            </div>
            <div className='flex justify-center py-5'>
                <div className=' bg-[#ECF4FA] rounded-full w-64'>
                    <img className='p-14 w-64' src={toyPhoto} alt="" />
                </div>

            </div>
            <div className='flex justify-between items-center'>
                <Rating className='text-xl text-amber-500'
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                    readonly
                />
                <Link to={`/toy-details/${_id}`}><button onClick={handleViewNotification} className='flex items-center space-x-2 justify-items-center bg-[#26A8DF] text-white hover:bg-white border border-[#26A8DF] duration-500 hover:text-[#26A8DF] rounded-sm px-3 py-1'><span>View Details</span>
                    <FaEye></FaEye>
                </button></Link>

            </div>

        </div>
    );
};

export default ToyCard;