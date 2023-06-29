import React from "react";
import CreateContent from "./createcontents";

const Content = () => {
    return (
        <div>
            <CreateContent />
            <div class="bg-white p-4 shadow-md rounded-lg">
                <div class="flex items-start">
                    <img
                        class="w-12 h-12 rounded-full mr-4"
                        src="profile.jpg"
                        alt="프로필 사진"
                    />
                    <div>
                        <h2 class="text-lg font-semibold">사용자 이름</h2>
                        <p class="text-gray-600 text-sm">게시글 작성 시간</p>
                    </div>
                </div>
                <p class="mt-4">게시글 내용...</p>
                <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center">
                        <button class="flex items-center text-gray-600 text-sm">
                            <svg class="w-5 h-5 mr-1" viewBox="0 0 24 24">
                                {/* <!-- 좋아요 아이콘 --> */}
                            </svg>
                            <span>좋아요</span>
                        </button>
                        <button class="flex items-center ml-4 text-gray-600 text-sm">
                            <svg class="w-5 h-5 mr-1" viewBox="0 0 24 24">
                                {/* <!-- 댓글 아이콘 --> */}
                            </svg>
                            <span>댓글</span>
                        </button>
                    </div>
                    <button class="text-gray-600 text-sm">공유</button>
                </div>
            </div>
        </div>
    );
};

export default Content;
