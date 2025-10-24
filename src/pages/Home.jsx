import React from 'react';
import { useLoaderData } from 'react-router';
import NewsCard from '../components/HomeMainLayout/NewsCard';

const Home = () => {
    // Fetch all news from the loader
    const news = useLoaderData();

    return (
        <div className="mx-auto space-y-6">
            <h2 className='font-bold text-[20px]'>Dragon News Home</h2>
            {news && news.length > 0 ? (
                news.map((item) => (
                    <NewsCard key={item.id} news={item} />
                ))
            ) : (
                <p className="text-center text-gray-500">No news available</p>
            )}
        </div>
    );
};

export default Home;
