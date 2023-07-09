import { useStore } from "../../store/store";
import Complementary from "./Complementary";
import PostSection from "./PostSection";
import SideNav from "./SideNav";
import { GET_DISPLAY_HEIGHT } from "../../store/type.json";
import { useState } from "react";

const MainPage = () => {
   const [getHeight, setHeight] = useState({});
   const dispatch = useStore(false)[1];
   dispatch(GET_DISPLAY_HEIGHT, setHeight);
   const [height, top] = [getHeight.height, getHeight.top];

   return (
      <main
         style={{ minHeight: height }}
         className="w-full flex bg-[#f0f2f5] z-0"
      >
         <nav
            style={{ top: top, maxHeight: height }}
            className="sticky h-fit -mr-2 pt-4 pr-20 flex flex-col basis-1/4 scrollbar overflow-hidden hover:overflow-y-auto"
         >
            <SideNav />
         </nav>
         <article
            role="main"
            className="relative basis-2/4 flex justify-center"
         >
            <PostSection />
         </article>
         <aside
            style={{ top: top, height: height }}
            className="sticky w-full mr-2 shrink-0 basis-1/4 flex flex-row-reverse scrollbar overflow-hidden hover:overflow-y-auto"
         >
            <Complementary />
         </aside>
      </main>
   );
// import React, { useState } from "react";
// import Header from "./Header";
// import Content from "./contents";
// // bg-slate-400
// const MainPage = () => {
//     return (
//         <div>
//             <Header />
//             <div className="flex flex-col min-w-screen min-h-screen py-4 justify-center bg-gray-100">
//                 <div className="flex justify-center h-[900px]">
//                     <div className="grid grid-cols-3 gap-4 w-full">
//                         <div className="flex justify-start">
//                             <div className="w-[300px] bg-gray-300 p-4 ml-4"></div>
//                         </div>
//                         <div className="w-[500px] bg-pink-500 p-4 flex items-center justify-center ">
//                             <Content />
//                         </div>
//                         <div className="flex justify-end">
//                             <div className="w-[300px] bg-gray-300 p-4 mr-4">
//                                 세 번째 열
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
};

export default MainPage;
