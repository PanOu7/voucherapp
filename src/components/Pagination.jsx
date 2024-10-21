import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({
  links: { prev, next },
  meta: { total, to, from },
  updateFetchUrl,
}) => {
  const handlePrevbtn = () => {
   updateFetchUrl(prev);
  };

  const handleNextbtn = () => {
     updateFetchUrl(next);
  };
  return (
    <div className="flex justify-between items-center">
      {/* Help text */}
      <span className="text-sm text-gray-700 dark:text-gray-400 ">
        Showing <b>{from}</b> to <b>{to}</b> of <b>{total}</b> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={!prev}
          onClick={handlePrevbtn}
          className="flex items-center justify-center size-10 text-sm font-medium rounded-s-md text-white  bg-emerald-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:pointer-events-none "
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          disabled={!next}
          onClick={handleNextbtn}
          className="flex items-center justify-center size-10 text-sm font-medium rounded-e-md  text-white  bg-emerald-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:pointer-events-none "
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
