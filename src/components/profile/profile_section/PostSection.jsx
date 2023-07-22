export default function PostSection() {
   return (
      <div className="w-full h-fit bg-white rounded-md ">
         <div className="w-full flex items-center justify-center">
            <div className="w-full flex-col">
               <div className="flex items-center justify-between py-2 px-4">
                  <span className=" text-xl font-bold">게시물</span>
                  <div className="flex space-x-2">
                     <button className="inline-block p-2 bg-neutral-300 rounded-md hover:brightness-[92%] text-black">
                        🖋️필터
                     </button>
                     <button className="inline-block p-2 bg-neutral-300 rounded-md hover:brightness-[92%] text-black">
                        ⚙️게시물관리
                     </button>
                  </div>
               </div>
               <hr className="w-full border-t-[1px] border-slate-500" />
               <div className="grid grid-flow-col justify-stretch h-fit p-1">
                  <div className="text-blue-600 p-2 font-bold border-b-[3px] border-b-blue-700 flex  justify-center  items-center  cursor-pointer  ">
                     ▤리스트보기
                  </div>
                  <div className="bg-white p-2 rounded-md hover:brightness-[92%] flex justify-center items-center cursor-pointer">
                     ▒그리드보기
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
