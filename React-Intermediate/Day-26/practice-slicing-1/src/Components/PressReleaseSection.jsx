import React, { useState } from "react";
import PressCard from "./PressCard";

const PressReleaseSection = ({ title, items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);


  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-5 mb-10 px-36">
      <div className="flex items-center justify-between mb-4 border-b-2 border-[#42B549]">
        <h2 className="text-base font-semibold text-white px-2 under bg-[#42B549]">
          {title}
        </h2>
        <nav className="text-gray-600 space-x-4">
          <a href="#founders-letter" className="hover:text-[#42B549]">
            Founder's Letter
          </a>
          <a href="#milestone" className="hover:text-[#42B549]">
            Milestone
          </a>
        </nav>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <PressCard
            key={index}
            category={title}
            title={item.title}
            date={item.date}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>

      <div className="flex mt-4 space-x-2">
        <button
          onClick={prevPage}
          className="p-2 border hover:bg-[#42B549] text-gray-400 rounded-l-md disabled:text-gray-200"
          disabled={currentPage === 1}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={nextPage}
          className="p-2 border hover:bg-[#42B549] text-gray-400 rounded-r-md disabled:text-gray-200"
          disabled={currentPage === totalPages}
        >
          <span className="sr-only">Next</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PressReleaseSection;

