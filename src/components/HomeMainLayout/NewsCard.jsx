import React from "react";
import bookmark from "../../assets/bookmark.png";
import share from "../../assets/share.png";
import starsIcon from "../../assets/star.png";
import eye from "../../assets/eye.png";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        details,
        image_url,
        author,
        rating,
        total_view,
    } = news;

    // Print stars based on rating number (1,2,3..)
    const starCount = rating?.number || 0;

    return (
        <div className="border border-[#F3F3F3] rounded-md p-4 bg-white">
            {/* Top section */}
            <div className="flex justify-between items-center bg-[#F3F3F3] p-3 rounded">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt="author"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="text-sm font-semibold">{author?.name}</h4>
                        <p className="text-xs text-gray-600">
                            {new Date(author?.published_date).toISOString().slice(0, 10)}
                        </p>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex gap-3">
                    <img src={bookmark} alt="bookmark" className="w-5 cursor-pointer" />
                    <img src={share} alt="share" className="w-5 cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-black mt-4">{title}</h2>

            {/* News Image */}
            <img
                src={image_url}
                alt="news"
                className="w-full h-64 object-cover rounded mt-3"
            />

            {/* Description */}
            <p className="text-[#706F6F] text-justify mt-3">
                {details?.slice(0, 200)}...{" "}
                <Link to={`/news-details/${id}`} className="text-orange-500 cursor-pointer">
                    Read More
                </Link>
            </p>

            <hr className="my-3 border-t-[1px] border-gray-200" />

            {/* Rating & Views */}
            <div className="flex justify-between items-center">
                {/* Stars */}
                <div className="flex items-center gap-1">
                    {[...Array(starCount)].map((_, index) => (
                        <img
                            key={index}
                            src={starsIcon}
                            alt="star"
                            className="w-4"
                        />
                    ))}
                    <span className="text-sm font-medium text-gray-600 ml-2">
                        {rating?.number}
                    </span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1 text-gray-600">
                    <img src={eye} alt="view" className="w-5" />
                    <span className="font-medium">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
