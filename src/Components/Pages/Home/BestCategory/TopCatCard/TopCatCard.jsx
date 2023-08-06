import React from 'react';

const TopCatCard = ({catItem}) => {
    const {name,img}=catItem;
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <img className='rounded-full' src={img} alt="" />
            <h2 className='text-xl font-bold pt-2'>{name}</h2>
        </div>
    );
};

export default TopCatCard;