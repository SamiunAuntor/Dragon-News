import React from 'react';
import { useParams, useLoaderData, Link } from 'react-router';
import { format } from 'date-fns';
import RightSide from '../components/HomeMainLayout/RightSide';
import Header from '../components/header';

const NewsDetails = () => {
    const { id } = useParams();
    const newsData = useLoaderData();

    // Find the specific news article
    const news = newsData?.find(item => item.id === id);

    if (!news) {
        return (
            <div className="text-center text-gray-500 mt-10">
                News article not found
            </div>
        );
    }

    const {
        title,
        details,
        image_url,
        author,
        tags
    } = news;

    return (
        <div className='bg-white min-h-screen'>
            <header>
                <Header />
            </header>

            <main className="w-11/12 mx-auto mt-8 mb-8 grid grid-cols-12 gap-6">

                {/* Left side - News Details */}
                <section className="col-span-12 md:col-span-9">
                    {/* Page Title*/}
                    <h1 className="col-span-12 md:col-span-9 text-[20px] font-bold mb-4">
                        The Dragon News
                    </h1>
                    <div className="bg-base-200 rounded-lg p-8">

                        {/* Main Image */}
                        <img
                            src={image_url}
                            alt="news"
                            className="w-full h-96 object-cover rounded-lg mb-6"
                        />

                        {/* Article Title inside card */}
                        <h2 className="text-3xl font-bold text-black mb-6 leading-tight">
                            {title}
                        </h2>

                        {/* Article Content */}
                        <div className="prose max-w-none">
                            <p className="text-gray-700 text-justify text-lg leading-relaxed mb-4">
                                {details}
                            </p>

                        </div>

                        {/* Back Button */}
                        <div className="mt-8">
                            <Link
                                to={`/category/${news.category_id}`} // dynamic category link
                                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                All news in this category
                            </Link>

                        </div>
                    </div>
                </section>

                {/* Right sidebar */}
                <aside className="col-span-12 md:col-span-3">
                    <RightSide />
                </aside>
            </main>

        </div>
    );
};

export default NewsDetails;
