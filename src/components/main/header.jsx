import React from "react";
import fblogo from "../../img/fblogo.png";
import SearchBar from "./searchbars";
import { NavLink, Link } from "react-router-dom";
import Modals from "./promodals";

const Header = () => {
    return (
        <header className="flex h-[56px]">
            <div className="flex flex-just item-center">
                <img className="w-[50px]" src={fblogo} alt="페이스북로고" />
                <SearchBar />
            </div>
            {/*네비바*/}
            <div className="">
                <a href="/" className="hover:bg-gray-200">
                    홈
                </a>
                <a href="/watch" className="hover:bg-gray-200">
                    워치
                </a>
                <a href="/" className="hover:bg-gray-200">
                    그룹
                </a>
                <a href="/" className="hover:bg-gray-200">
                    게임
                </a>
            </div>

            <div className="">
                <a href="" className="hover:bg-gray-200">
                    +
                </a>
                <a href="" className="hover:bg-gray-200">
                    메세지
                </a>
                <a href="" className="hover:bg-gray-200">
                    알람
                </a>
            </div>
            {/*프로필창모달을 하고싶다..*/}
            <a href="/profiles" className="hover:bg-gray-200">
                프로필
            </a>
        </header>
    );
};

export default Header;
