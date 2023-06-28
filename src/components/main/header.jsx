import React from "react";
import fblogo from "../../img/fblogo.png";
import SearchBar from "./searchbars";
import { NavLink, Link } from "react-router-dom";
import Modals from "./promodals";

const Header = () => {
    return (
        <header className="flex h-[56px]">
            <div className="flex items-center">
                <a href="/">
                    <img
                        className="w-[50px]"
                        src={fblogo}
                        alt="페이스북 로고"
                    />
                </a>
                <SearchBar />
            </div>

            <div className="flex items-center">
                <div className="flex justify-center p-4">
                    <a href="/" className="hover:bg-gray-200">
                        홈
                    </a>
                    <a href="/watch" className="hover:bg-gray-200">
                        워치
                    </a>
                    <a href="/group" className="hover:bg-gray-200">
                        그룹
                    </a>
                    <a href="/game" className="hover:bg-gray-200">
                        게임
                    </a>
                </div>

                <div className="p-4">
                    <a href="/plus?" className="hover:bg-gray-200">
                        +
                    </a>
                    <a href="/message" className="hover:bg-gray-200">
                        메세지
                    </a>
                    <a href="/notify" className="hover:bg-gray-200">
                        알람
                    </a>  
                    <a href="/profiles" className="hover:bg-gray-200">
                        프로필
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
