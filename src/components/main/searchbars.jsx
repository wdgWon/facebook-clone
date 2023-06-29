import React, { useState } from "react";

const SearchBar = () => {
    return (
        <div className="">
            <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="검색어를 입력하세요"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                검색
            </button>
        </div>
    );
};

export default SearchBar;
