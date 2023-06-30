import React from "react";

const CreateContent = () => {
    return (
        <div>
            <div className="w-[500px] h-[40px] flex items-center bg-neutral-200 rounded-full pl-[15px] cursor-pointer hover:brightness-[95%]">
                무슨 생각을 하고 계신가요?
            </div>

            <hr className="w-full border-t-[1px] border-slate-500 pb-[30px]" />
            <div className="flex justify-between">
                <button
                    className="
                w-[160px] h-[40px] bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black"
                >
                    🎥라이브방송
                </button>
                <button className="w-[160px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black">
                    🤳사진/동영상
                </button>
                <button className="w-[160px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black">
                    🏳️‍🌈중요이벤트
                </button>
            </div>
        </div>
    );
};

export default CreateContent;
