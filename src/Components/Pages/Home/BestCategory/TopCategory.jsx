import React from 'react';
import TopCatCard from './TopCatCard/TopCatCard';

const TopCategory = () => {
    const bestCategories = [
        { name: 'Mix & Match Magic', img: 'https://wpbingosite.com/wordpress/kidsdoy/wp-content/uploads/2023/02/category-6.jpg' },
        { name: 'wooden Toys', img: 'https://wpbingosite.com/wordpress/kidsdoy/wp-content/uploads/2023/02/category-1.jpg' },
        { name: 'Suffed Animals', img: 'https://wpbingosite.com/wordpress/kidsdoy/wp-content/uploads/2023/02/category-2.jpg' },
        { name: 'Cooking Toys', img: 'https://wpbingosite.com/wordpress/kidsdoy/wp-content/uploads/2023/02/category-3.jpg' },
    ]
    return (
        <div className='boxed-container py-16'>
            <div className='flex flex-col items-center px-4 text-center'>
                <h2 className='font-mont md:text-3xl text-2xl font-bold'>Best Categories</h2>
                <p className='pt-3 pb-4'>Check out our best Toys Categories</p>
                <hr className='border border-[#26A8DF] w-24' />
            </div>
            {/* cat cards */}
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-5 md:gap-8 pt-12 pb-6'>
                {
                    bestCategories?.map((catItem, i) => <TopCatCard key={i} catItem={catItem}></TopCatCard>)
                }
            </div>

        </div>
    );
};

export default TopCategory;