import React, { useState } from "react";
import Header from "./header";
// bg-slate-400
const MainPage = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col min-w-screen min-h-screen py-4 justify-center bg-gray-200">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-300 p-4">첫 번째 열</div>
                    <div className="bg-gray-300 p-4">두 번째 열(content 컴포넌트 들어갈 자리)</div>
                    <div className="bg-gray-300 p-4">세 번째 열</div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
