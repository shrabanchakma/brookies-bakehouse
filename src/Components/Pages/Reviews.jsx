import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import Ratings from "./Ratings";

const Reviews = ({ ratings }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews.json");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-brookies-primary my-20">
        <div className=" grid grid-cols-1 ">
          <p className="text-gray-600 flex items-center gap-2 text-sm place-self-center">
            <Ratings />
            {`${ratings} out of 5`}
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl text-center">Customer Reviews</h2>
          <div className="flex flex-col items-center justify-center gap-1 ">
            <div className="flex  items-center gap-2">
              <Ratings />
              <progress
                className="progress w-48  h-4 border-none text-brookies-secondary"
                value="80"
                max="100"
              ></progress>
            </div>
            <div className="flex items-center gap-2">
              <Ratings />
              <progress
                className="progress w-48  h-4 border-none text-brookies-secondary"
                value="60"
                max="100"
              ></progress>
            </div>
            <div className="flex items-center gap-2">
              <Ratings />
              <progress
                className="progress w-48  h-4 border-none text-brookies-secondary"
                value="20"
                max="100"
              ></progress>
            </div>
            <div className="flex items-center gap-2">
              <Ratings />
              <progress
                className="progress w-48  h-4 border-none text-brookies-secondary"
                value="40"
                max="100"
              ></progress>
            </div>
            <div className="flex items-center gap-2">
              <Ratings />
              <progress
                className="progress w-48  h-4 border-none text-brookies-secondary"
                value="2"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <button className="bg-brookies-secondary place-self-center py-2 w-[18rem] text-white font-bold">
            Write a review
          </button>
        </div>
      </div>
      <div className=" mx-auto p-4 bg-white rounded-lg shadow-md">
        {/* Sorting Dropdown */}
        <div className="flex justify-between items-center mb-4">
          <label className="font-medium text-gray-600">Sort by:</label>
          <select className="select select-bordered select-sm text-gray-700">
            <option>Most Recent</option>
            <option>Highest Rated</option>
            <option>Lowest Rated</option>
          </select>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-t pt-4">
              <div className="flex items-center space-x-3">
                <img
                  src={review.avatar}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  {review.isVerified && (
                    <span className="bg-pink-200 text-pink-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                <div className="ml-auto text-gray-500 text-sm">
                  {review.timeAgo}
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center mt-2 text-pink-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                ))}
              </div>

              {/* Review Comment */}
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Reviews.propTypes = {};

export default Reviews;
