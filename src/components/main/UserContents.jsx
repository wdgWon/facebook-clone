import React from "react";
import profile_img from "../../img/profile_img5.png";

const UserContent = () => {
   return (
      <div className="w-full bg-white p-4 shadow rounded-lg">
         <div className="flex items-start">
            <img
               className="cursor-pointer hover:brightness-[92%] w-12 h-12 rounded-full mr-4"
               src={profile_img}
               alt="프로필 사진"
            />
            <div>
               <h2 className="text-lg font-semibold">사용자 이름(user.name)</h2>
               <p className="text-gray-600 text-sm cursor-default">1일 · 🌏</p>
            </div>
         </div>
         <div>
            <p className="mt-4">게시글 내용...</p>
         </div>
         <hr className="w-full border-t-[1px] border-slate-500" />
         <div className="flex items-center mt-2">
            <div className="flex">
               <button className="text-gray-600 text-sm">
                  <span>👍좋아요</span>
               </button>
               <button className="flex items-center ml-4 text-gray-600 text-sm">
                  <span>🗨댓글</span>
               </button>
               <button className="text-gray-600 text-sm">
                  <span>⚔️공유</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default UserContent;
