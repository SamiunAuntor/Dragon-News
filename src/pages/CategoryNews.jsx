import React from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/HomeMainLayout/NewsCard";

const CategoryNews = () => {
    const { id } = useParams();
    const newsData = useLoaderData();

    const filteredNews = newsData.filter(news => {
        if (id === "0") return true; // Show all
        if (id === "1") return news?.others?.is_today_pick === true; // Today's Pick
        return news.category_id == id; // Category-wise
    });

    if (filteredNews.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-10">
                No news available in this category.
            </p>
        );
    }

    return (
        <div className="space-y-6">
            {filteredNews.map(news => (
                <NewsCard key={news.id} news={news} />
            ))}
        </div>
    );
};

export default CategoryNews;
