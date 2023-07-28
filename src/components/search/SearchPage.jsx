import { Fragment, useEffect, useState } from "react";
import SideNav from "./SideNav2";
import { useStore } from "../../store/store";
import { GET_DISPLAY_HEIGHT, GET_SEARCH_LIST } from "../../store/type.json";
import profile_img5 from "../../img/profile_img5.png";
import { useNavigate, useSearchParams } from "react-router-dom";

const ProfileCard = ({ id, name }) => {
   const navigate = useNavigate();

   const handleOnClick = (e) => {
      if (e.target !== e.currentTarget) {
         navigate(`/profile?id=${id}`);
      }
   };

   const handleOnSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <div className="flex items-center justify-between rounded-sm">
         <div
            onClick={handleOnClick}
            className="flex shrink-0 space-x-5 items-center"
         >
            <img
               src={profile_img5}
               className="w-10 h-10 rounded-full hover:brightness-95 cursor-pointer"
            />
            <span
               className="inline-block text-black font-semibold cursor-pointer hover:underline"
            >
               {name}
            </span>
         </div>
         <button
            type="submit"
            className="px-2 py-1 rounded bg-neutral-200/70 hover:bg-neutral-200"
            onClick={handleOnSubmit}
         >
            <span className="text-blue-500 font-semibold text-sm">
               친구 추가
            </span>
         </button>
      </div>
   );
};

const Searchs = () => {
   const [getHeight, setHeight] = useState({});
   const [isMounted, setIsMounted] = useState(false);
   const searchParams = useSearchParams()[0];
   const [store, dispatch] = useStore(false);
   dispatch(GET_DISPLAY_HEIGHT, setHeight);

   useEffect(() => {
      setIsMounted(false);

      const setSearchList = async () => {
         try {
            await dispatch(GET_SEARCH_LIST);
         } catch (err) {
            console.error(err);
         }
         setIsMounted(true);
      };
      setSearchList();
   }, [searchParams.get("name")]);

   if (!isMounted) {
      return null;
   }

   return (
      <Fragment>
         <main
            style={{ minHeight: getHeight.height }}
            className="w-full flex bg-[#f0f2f5] z-0"
         >
            <nav
               style={{ top: getHeight.top, height: getHeight.height }}
               className="sticky h-fit basis-1/4 bg-white scrollbar overflow-hidden hover:overflow-y-auto"
            >
               <div className=" flex flex-col p-2">
                  <h1 className="text-xl font-black p-3 border-b-2 border-gray-300">
                     검색 결과
                  </h1>
                  <SideNav />
               </div>
            </nav>

            <section
               role="search result"
               className="flex justify-center mb-auto w-full"
            >
               <div className="flex grow-[0.5] flex-col space-y-4 rounded-md p-3 shadow bg-white shadow-black/10 m-5">
                  <h2 className="inline-block text-black font-semibold text-xl">
                     사람
                  </h2>
                  {store.searchList
                     .filter(
                        ({ profile_user_name }) =>
                           profile_user_name.includes(searchParams.get("name"))
                     )
                     .map(({ profile_user_id, profile_user_name }) => (
                        <ProfileCard
                           key={profile_user_id}
                           id={profile_user_id}
                           name={profile_user_name}
                        />
                     ))}
               </div>
            </section>
            <hr className="border border-gray-300" />
         </main>
      </Fragment>
   );
};
export default Searchs;
