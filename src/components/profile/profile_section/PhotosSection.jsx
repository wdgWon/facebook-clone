import { Link, useLocation } from "react-router-dom";

export default function PhotosSection() {
   const location = useLocation();

   return (
      <section role="photos section" className="w-full h-[534px] pt-[15px] bg-white rounded-md flex flex-col justify-center mb-[20px]">
         <div className="flex items-center justify-between ml-[15px]">
            <span className="text-xl font-bold">사진</span>
            <Link to={{pathname: "../photos", search: location.search}} className="text-blue-600 pr-[15px] cursor-pointer">
               사진 모두 보기
            </Link>
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
