import profile_img5 from "../../../img/profile_img5.png";

export default function WritePost() {
   return (
      <div className="w-[637px] h-[173px] bg-white rounded-md mb-[15px] ">
         <div className="flex items-center justify-center ">
            <div className="flex-col mt-[15px]">
               <div className="flex items-center mb-[30px]">
                  <img
                     className="rounded-full cursor-pointer hover:brightness-[90%] w-[40px] h-[40px] mr-[10px]"
                     alt="profile"
                     src={profile_img5}
                  />
                  <div className="w-[560px] h-[40px] flex items-center bg-neutral-200 rounded-full pl-[15px] cursor-pointer hover:brightness-[95%]">
                     무슨 생각을 하고 계신가요?
                  </div>
               </div>
               <hr className="w-full border-t-[1px] border-slate-500 pb-[30px]" />
               <div className="flex justify-between">
                  <button
                     className="w-[160px] h-[40px] bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black"
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
         </div>
      </div>
   );
}
