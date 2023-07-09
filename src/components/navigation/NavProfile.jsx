import { useState, useRef, useEffect, Fragment } from "react";
import profile_img from "../../img/profile_img5.png";
import LogoutModal from "./LogoutModal";
import { useStore } from "../../store/store";

export default function NavProfile() {
   const state = useStore(false)[0];
   const [isOpen, setIsOpen] = useState(false);
   const ref = useRef();

   const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <Fragment>
         <img
            alt="프로필 사진"
            className="relative h-10 w-10 rounded-full cursor-pointer hover:brightness-95"
            src={state.profile?.profile_image || profile_img}
            onClick={() => setIsOpen(!isOpen)}
         />
         {isOpen && <LogoutModal setIsOpen={setIsOpen} ref={ref} />}
      </Fragment>
   );
}
