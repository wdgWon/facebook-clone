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
            className="sticky min-w-fit h-fit -mr-2 pt-4 pr-20 flex flex-col basis-1/4 scrollbar overflow-hidden hover:overflow-y-auto"
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
};

export default MainPage;
