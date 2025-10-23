import React from 'react';
import Marquee from 'react-fast-marquee';

const latestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-4'>
            <p className='text-base-100 bg-secondary py-2.5 px-4'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem, sit incidunt dignissimos quam hic?</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem, sit incidunt dignissimos quam hic?</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem, sit incidunt dignissimos quam hic?</p>
            </Marquee>
        </div>
    );
};

export default latestNews;