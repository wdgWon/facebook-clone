import React, { useState } from "react";
import Header from "./Header";
import Content from "./contents";
// bg-slate-400
const MainPage = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col min-w-screen min-h-screen py-4 justify-center bg-gray-100">
                <div className="flex justify-center h-[900px]">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="flex justify-start">
                            <div className="w-[300px] bg-gray-300 p-4 ml-4"></div>
                        </div>
                        <div className="w-[500px] bg-pink-500 p-4 flex items-center justify-center ">
                            <Content />
                        </div>
                        <div className="flex justify-end">
                            <div className="w-[300px] bg-gray-300 p-4 mr-4">
                                세 번째 열
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
