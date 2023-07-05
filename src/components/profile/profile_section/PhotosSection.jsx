export default function PhotosSection() {
   return (
      <section role="photos section" className="w-full h-[534px] pt-[15px] bg-white rounded-md flex flex-col justify-center mb-[20px]">
         <div className="flex items-center justify-between ml-[15px]">
            <span className="text-xl font-bold">사진</span>
            <span className="text-blue-600 pr-[15px] cursor-pointer">
               사진 모두 보기
            </span>
         </div>
         <div className="w-[458px] h-[458px] flex flex-wrap justify-between items-center ml-[15px]">
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
