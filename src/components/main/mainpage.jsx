import React, { useState } from "react";
import Header from "./header";
// bg-slate-400
const MainPage = () => {
    return (
        <div className="container">
            <Header />
            <div className="flex">
                <div className="flex-1 h-16">01</div>
                <div className="shrink-0 w-64 h-14">
                    <iframe
                        className="aspect-video hover:aspect-square"
                        src="https://tv.naver.com/embed/20582616?autoPlay=true"
                    ></iframe>
                </div>
                <div className="flex-1 h-16">03</div>
            </div>
        </div>
    );
};

export default MainPage;
