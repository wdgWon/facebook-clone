import { useStore } from "../../store/store";
import Complementary from "./Complementary";
import PostSection from "./PostSection";
import SideNav from "./SideNav";
import { GET_DISPLAY_HEIGHT } from "../../store/type.json";

const MainPage = () => {
   const [store, dispatch] = useStore(false);
   dispatch(GET_DISPLAY_HEIGHT);
   const [height, top] = [store.height, store.top];

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
            className="sticky w-full mr-2 basis-1/4 flex scrollbar overflow-hidden hover:overflow-y-auto"
         >
            <Complementary />
         </aside>
      </main>
   );
};

export default MainPage;
