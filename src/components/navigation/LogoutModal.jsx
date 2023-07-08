import { useState, forwardRef } from "react";
import profile_img from "../../img/profile_img5.png";
import { useStore } from "../../store/store";
import { GET_DISPLAY_HEIGHT, USER_LOGOUT } from "../../store/type.json";
import { Link, useNavigate } from "react-router-dom";

const LogoutModal = forwardRef(({ setIsOpen }, ref) => {
   const navigate = useNavigate();
   const [getHeight, setHeight] = useState({});
   const [state, dispatch] = useStore(false);
   dispatch(GET_DISPLAY_HEIGHT, setHeight);
   const top = getHeight.top;

   const handleLogout = async () => {
      try {
         await dispatch(USER_LOGOUT);
      } catch (err) {
         console.error(err);
      }
      navigate("/login");
   };

   return (
      <div
         ref={ref}
         className="absolute z-20 flex flex-col p-2 bg-white rounded-md shadow-[0_2px_20px_2px_rgba(0,0,0,0.3)] w-[360px]"
         style={{ top: top }}
      >
         <div className="w-full p-1 rounded-md shadow-[0_2px_8px_2px_rgba(0,0,0,0.3)] shadow-gray-300">
            <Link
               className="flex w-full p-2 items-center space-x-2 cursor-pointer rounded-md hover:bg-[#f2f2f3]"
               to="/profile"
               onClick={() => setIsOpen(false)}
            >
               <img
                  src={state?.profile.profile_image || profile_img}
                  alt="profile image"
                  className="w-9 h-9 rounded-full"
               />
               <span className="text-base font-bold text-black">
                  {state.user.name}
               </span>
            </Link>
         </div>
         <button
            role="logout"
            type="button"
            className="w-full mt-4 p-2 items-center flex space-x-2 rounded-md hover:bg-[#f2f2f3]"
            onClick={handleLogout}
         >
            <div className="flex items-center p-2 rounded-full bg-[#e1e2e7]">
               <i
                  datavisualcompletion="css-img"
                  className="inline-block bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/fL-awjAJUDm.png')] w-5 h-5"
                  style={{ backgroundPosition: "0px -906px" }}
               ></i>
            </div>
            <span className="inline-block text-base text-black basis-full text-left">
               로그아웃
            </span>
         </button>
      </div>
   );
});

export default LogoutModal;
