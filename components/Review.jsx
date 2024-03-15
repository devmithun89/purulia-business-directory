import React from "react";
import {FaStar, FaThumbsUp, FaThumbsDown} from "react-icons/fa";

const Review = ({reviewerName, reviewText, rating, date, like}) => {
  // Dynamic styling or logic can be applied to render the stars based on the rating
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} color={i < rating ? "#ffc107" : "#e4e5e9"} />);
    }
    return stars;
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="font-semibold">{reviewerName}</div>
      <div className="text-xs text-gray-500">{date}</div>
      <div className="flex items-center mt-2">
        <div className="flex items-center mr-2">{renderStars()}</div>
        <div className="ml-auto flex items-center">
          <FaThumbsUp className="mr-1" />
          <span className="mr-4">{like}</span>
          <FaThumbsDown className="mr-1" />
        </div>
      </div>
      <div className="mt-2">{reviewText}</div>
    </div>
  );
};

export default Review;
