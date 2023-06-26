import React from "react";
import fblogo from "../../img/fblogo.png";

const Header = () => {
    return (
        <Header className="h-[56px]">
            <div>
                <img src={fblogo} alt="페이스북로고" />
            </div>
            {/*검색기능*/}
            <div className=""></div>

            {/*네비바*/}
            <div></div>
            {/*프로필모달*/}
        </Header>
    );
};

export default Header;
