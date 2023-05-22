import React from 'react';

const ToyCard = ({ toy }) => {
    const { toyName, _id, toyPhoto, toyPrice, rating } = toy
    return (
        <div className='bg-white shadow-sm sm:mb-0 mb-4 py-5 px-7'>
            <div className='flex justify-between items-center'>
                <h2 className='sm:text-lg text-sm font-semibold font-fred'>{toyName}</h2>
                <p className='sm:text-lg text-base'>${toyPrice}</p>
            </div>
            <div className='flex justify-center py-5'>
                <div className=' bg-[#ECF4FA] rounded-full w-64'>
                <img className='p-14 w-64' src={toyPhoto} alt="" />
                </div>
                
            </div>

        </div>
    );
};

export default ToyCard;