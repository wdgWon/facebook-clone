import { NavLink, useSearchParams } from "react-router-dom";

const NavButton = ({ isActive, children }) => {
   return (
      <span
         className={
            isActive
               ? "cursor-pointer text-blue-600 font-bold underline underline-offset-[20px] decoration-2"
               : "bg-white rounded-md top-80 right-11 hover:brightness-[92%]cursor-pointer"
         }
      >
         {children}
      </span>
   );
};

const Nav = ({profile}) => {
   const searchParam = useSearchParams()[0];
   const idParam = profile.profile_user_id ?? searchParam.get("id");

   return (
      <div>
         <section className="w-[1186px] my-0 mx-auto">
            <hr className="w-full border-t-[1px] border-slate-500 mt-3.5" />
            <div className="flex items-center justify-center pt-2	">
               <div className="w-[1136px] h-[40px] flexitems-center">
                  <div className=" flex  items-center  justify-between w-[560px] cursor-pointer ">
                     <NavLink to={`../profile/post?id=${idParam}`}>
                        {({ isActive }) => (
                           <NavButton isActive={isActive}>{"게시물"}</NavButton>
                        )}
                     </NavLink>
                     <NavLink to={`../profile/about?id=${idParam}`}>
                        {({ isActive }) => (
                           <NavButton isActive={isActive}>{"정보"}</NavButton>
                        )}
                     </NavLink>
                     <NavLink to={`../profile/friends?id=${idParam}`}>
                        {({ isActive }) => (
                           <NavButton isActive={isActive}>{"친구"}</NavButton>
                        )}
                     </NavLink>
                     <NavLink to={`../profile/photos?id=${idParam}`}>
                        {({ isActive }) => (
                           <NavButton isActive={isActive}>{"사진"}</NavButton>
                        )}
                     </NavLink>
                     <NavLink to={`../profile/videos?id=${idParam}`}>
                        {({ isActive }) => (
                           <NavButton isActive={isActive}>{"동영상"}</NavButton>
                        )}
                     </NavLink>
                     <NavLink to={`../profile/map?id=${idParam}`}>
                        {({ isActive }) => (
                           <NavButton isActive={isActive}>{"체크인"}</NavButton>
                        )}
                     </NavLink>
                     <div className=" w-[70px]  h-[40px]  bg-white rounded-md  hover:brightness-[92%]  flex  justify-center  items-center cursor-pointer ">
                        더보기▼
                     </div>
                  </div>
               </div>
               <div className=" w-[40px]  h-[40px]  bg-neutral-300  rounded-md  hover:brightness-[92%]  flex  justify-center  cursor-pointer ">
                  ...
               </div>
            </div>
         </section>
      </div>
   );
};
export default Nav;
