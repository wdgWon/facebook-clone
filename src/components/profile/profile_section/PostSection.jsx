export default function PostSection() {
   return (
      <div className="w-[637px] h-[173px] bg-white rounded-md ">
         <div className="flex items-center justify-center">
            <div className="flex-col mt-[15px] ">
               <div className="flex items-center ">
                  <div className="flex-1">
                     <span className=" text-xl font-bold">게시물</span>
                  </div>
                  <div className="">
                     <button className="w-[80px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black">
                        🖋️필터
                     </button>
                     <button className="w-[130px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black">
                        ⚙️게시물관리
                     </button>
                  </div>
               </div>
               <hr className="w-full border-t-[1px] border-slate-500 pb-[30px] mt-[40px]" />
               <div className="flex justify-between items-center">
                  <div className="text-blue-600 font-bold underline  underline-offset-[20px]  decoration-2  w-[310px]  h-[40px]  flex  justify-center  items-center  cursor-pointer  ">
                     ▤리스트보기
                  </div>
                  <div className=" w-[310px] h-[40px]  bg-white  rounded-md  top-80 right-11  hover:brightness-[92%] flex justify-center items-center cursor-pointer">
                     ▒그리드보기
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
