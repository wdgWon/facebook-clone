export default function FriendSection() {
   return (
      <section className="w-full h-[534px] pt-[15px] bg-white rounded-md flex flex-col justify-center">
         <div className="flex items-center justify-between ml-[15px]">
            <span className="text-xl font-bold">친구</span>
            <span className="text-blue-600 pr-[15px] cursor-pointer">
               모든 친구 보기
            </span>
         </div>
         <div>
            <span className="ml-[15px]">user friend 00명</span>
         </div>
         <div
            className="
            w-[458px] 
            h-[458px] 
            flex 
            flex-wrap 
            justify-between 
            items-center
            ml-[15px]
            "
         >
            <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
            <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
            <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
            <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
            <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
            <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
            <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
            <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
            <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
         </div>
      </section>
   );
}
