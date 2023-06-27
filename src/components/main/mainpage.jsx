import React, { useState } from "react";
import Header from "./header";
// bg-slate-400
const MainPage = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col min-w-screen min-h-screen py-4 justify-center bg-gray-100">
                <div className="flex justify-center h-[900px]">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="flex justify-start">
                            <div className="w-[350px] bg-gray-300 p-4 ml-4">
                                첫 번째 열
                            </div>
                        </div>
                        <div className="bg-gray-500 p-4 flex items-center justify-center ">
                            두 번째 열 (content 컴포넌트 들어갈 자리)
                        </div>
                        <div className="flex justify-end">
                            <div className="w-[350px] bg-gray-300 p-4 mr-4">
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
