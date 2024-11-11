import React from "react";

const PressCard = ({ category, title, date, imageUrl }) => {

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute bottom-3 left-4 p-1 bg-black bg-opacity-50 rounded text-white">
          <p className="text-xs">{category}</p>
        </div>
      </div>
      <div className="p-4">
        <a href="#" className="text-lg font-medium mt-1 leading-snug line-clamp-2 hover:text-[#4DB2EC]">
          {title}
        </a>
        <p className="text-gray-500 text-sm mt-1">{date}</p>
      </div>
    </div>
  );
};

export default PressCard;
