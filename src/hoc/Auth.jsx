import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../store/store";
import {
   AUTHENTICATION_ACCESS,
   AUTHENTICATION_REFRESH,
   GET_PROFILE,
} from "../store/type.json";

export default function Auth({ option = true, admin = null, children }) {
   const [store, dispatch] = useStore(false);
   const [isAuth, setIsAuth] = useState(false);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const auth = async () => {
         console.log("Auth.js");

         try {
            try {
               await dispatch(AUTHENTICATION_ACCESS);
            } catch (err) {
               await dispatch(AUTHENTICATION_REFRESH);
               await dispatch(AUTHENTICATION_ACCESS);
            }

            setIsAuth(true);

            !store.profile && (await dispatch(GET_PROFILE));

            if (!option) {
               alert("이미 로그인 되어있습니다.");
            }
         } catch (err) {
            console.error(err);

            setIsAuth(false);

            if (option) {
               alert("접속 권한이 없습니다. 로그인을 해주세요.");
            }
         }
         setLoading(false);
      };

      auth();
   }, [store.auth]);

   if (loading) {
      return (
         <div
            role="loading"
            className="fixed top-0 left-0 w-screen h-screen bg-gray-300/0 flex justify-center items-center"
         >
            <span className="inline-block text-black/0 text-7xl">Loading...</span>
         </div>
      );
   }

   return (
      <>
         {isAuth && option && children}
         {!isAuth && option && <Navigate replace to="/login" />}
         {isAuth && !option && <Navigate replace to="/" />}
         {!isAuth && !option && children}
      </>
   );
}
