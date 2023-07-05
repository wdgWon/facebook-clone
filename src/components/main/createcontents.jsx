import React, { useState } from "react";
import profile_img5 from "../../img/profile_img5.png";
import Modals from "./Contentmodals";

const CreateContent = () => {
    return (
        <div className="">
            <div className="w-[480px] bg-white rounded-md mb-[15px] ">
                <div
                    className="flex items-center
                justify-center"
                >
                    <div className="flex-col mt-[15px]">
                        <div className="flex items-center mb-1">
                            <img
                                className="rounded-full cursor-pointer hover:brightness-[90%] w-[40px] h-[40px] m-2"
                                alt="profile"
                                src={profile_img5}
                            />
                            <Modals />
                        </div>
                        <hr className="w-full border-t-[1px] border-slate-500 pb-2" />
                        <div className="flex justify-between pb-2">
                            <button
                                className="
                                    w-[150px] h-[40px] bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black"
                            >
                                🎥라이브방송
                            </button>
                            <button className="w-[150px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black">
                                🤳사진/동영상
                            </button>
                            <button className="w-[150px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black">
                                😀기분/활동
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateContent;
