import React from 'react';
import Marquee from 'react-fast-marquee';
import { useLoaderData } from 'react-router';

const LatestNews = () => {
    const news = useLoaderData(); // ✅ get news here

    return (
        <div className='flex items-center gap-5 bg-base-200 p-4'>
            <p className='text-base-100 bg-secondary py-2.5 px-4'>Latest</p>

            <Marquee pauseOnHover={true}>
                {news?.length > 0 ? (
                    news.map(item => (
                        <p key={item.id} className='font-bold mx-10'>
                            {item.title}
                        </p>
                    ))
                ) : (
                    <p>No Latest News Found</p>
                )}
            </Marquee>
        </div>
    );
};

export default LatestNews;
