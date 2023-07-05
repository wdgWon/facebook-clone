import React, { useRef, useState } from "react";
import profile_img from "../../img/profile_img5.png";
import picture from "../../img/pictures.png";
import maps from "../../img/maps.png";
import presontag from "../../img/person.png";
import emoticon from "../../img/emoticon.png";
import threemark from "../../img/threemark.png";
import DropZone from "./Dropzones";

const Contents = () => {
    [
        {
            id: 49,
            name: "Ellen Haynes",
            contentPost: "자바스크립트를 하고 제 눈이 말끔히 다 나았어요!",
        },

        {
            id: 45,
            name: "Agnes Lawrence",
            contentPost:
                "자바스크립트를 시작하고 나서 근육통이 말끔히 나았어요!",
        },
    ];
};

const Modals = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [iscontent, setContent] = useState("");

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleTextareaChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        //여기서 서버로 보내는..듯..
        e.preventDefault();
        closeModal();
    };

    const handlebutton = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="w-[400px] h-[40px] flex items-center bg-neutral-200 rounded-full pl-[15px] cursor-pointer hover:brightness-[95%]"
            >
                ooo님 , 무슨 생각을 하고 계신가요?
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <button
                        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
                        onClick={closeModal}
                    />
                    <div className="modal-container bg-white w-4/5 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-hidden">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <h2 className="text-2xl font-bold">
                                    게시글 만들기
                                </h2>
                                <button
                                    className="modal-close"
                                    onClick={closeModal}
                                >
                                    <span className="text-4xl">&times;</span>
                                </button>
                            </div>
                            <form
                                onSubmit={handleSubmit}
                                action="http://localhost:5173/"
                                method="post"
                            >
                                <div className="flex items-center items-start">
                                    <img
                                        className="cursor-pointer hover:brightness-[92%] w-12 h-12 rounded-full mr-4"
                                        src={profile_img}
                                        alt="프로필 사진"
                                    />
                                    <div className="flex flex-col">
                                        유저 이름
                                        <button
                                            className="w-[110px] h-[30px] rounded-lg border p-1 text-sm mb-2"
                                            onClick={handlebutton}
                                        >
                                            🔒나만 보기▼
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        rows="10"
                                        placeholder="ooo님, 무슨 생각을 하고 계신가요?"
                                        value={iscontent}
                                        onChange={handleTextareaChange}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                                    ></textarea>
                                </div>
                                <div className="flex ">
                                    <label className="w-full flex items-center rounded-sm border py-2 mb-5">
                                        게시물에 추가
                                        <button className="flex items-center flex-end">
                                            <label
                                                className="flex"
                                                
                                            >
                                                <img
                                                    className="cursor-pointer hover:bg-gray-300 rounded-lg"
                                                    src={picture}
                                                />
                                            </label>
                                            <img
                                                className="cursor-default hover:bg-gray-300 rounded-lg"
                                                src={presontag}
                                            />
                                            <img
                                                className="cursor-default hover:bg-gray-300 rounded-lg"
                                                src={emoticon}
                                            />
                                            <img
                                                className="cursor-default hover:bg-gray-300 rounded-lg"
                                                src={maps}
                                            />
                                            <img
                                                className="cursor-default hover:bg-gray-300 rounded-lg"
                                                src={threemark}
                                            />
                                        </button>
                                    </label>
                                </div>
                                <div className=" flex justify-end">
                                    <button
                                        disabled={!iscontent}
                                        type="submit"
                                        className="w-full bg-blue-300 enabled:hover:bg-blue-600 text-white font-bold py-2 px-4 rounded
                                        "
                                    >
                                        게시
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modals;
