import React from "react";
import fblogo from "../../img/fblogo.png";
import SearchBar from "./searchbars";
import { NavLink, Link } from "react-router-dom";
import Modals from "./promodals";

const Header = () => {
    return (
        <header className="flex h-[56px]">
            <div className="flex item-center">
                <img className="w-[50px]" src={fblogo} alt="페이스북로고" />
                <SearchBar />
            </div>
            {/*네비바*/}
            <div>
                <Link to="/" className="">
                    홈
                </Link>
                <Link to="/watch" className="">
                    워치
                </Link>
                <Link to="/group" className="">
                    그룹
                </Link>
                <Link to="/game" className="">
                    게임
                </Link>
      
            </div>

            <div>
           
                <Link to="/" className="">
                    +
                </Link>
                <Link to="/" className="">
                    메세지
                </Link>
                <Link to="/" className="">
                    알람
                </Link>
                {/*프로필창모달*/}
                <Modals />
               
            </div>
        </header>
    );
};

export default Header;
