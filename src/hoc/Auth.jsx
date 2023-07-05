import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../store/store";
import {
   AUTHENTICATION_ACCESS,
   AUTHENTICATION_REFRESH,
   GET_PROFILE,
} from "../store/type.json";
import Cookies from "js-cookie";

export default function Auth({ option = true, admin = null, children }) {
   const [store, dispatch] = useStore(false);
   const [isAuth, setIsAuth] = useState(false);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      (async () => {
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
            !option && alert("이미 로그인 되어있습니다.");
         } catch (err) {
            console.error(err);
            setIsAuth(false);
            option && alert("접속 권한이 없습니다. 로그인을 해주세요.");
         }

         setLoading(false);
      })();
   }, []);

   if (loading) {
      return (
         <div className="w-screen h-screen flex justify-center items-center text-black text-7xl">
            Loading...
         </div>
      );
   }

   if (option) {
      return <>{isAuth ? children : <Navigate replace to="/login" />}</>;
   } else {
      return <>{isAuth ? <Navigate replace to="/" /> : children}</>;
   }
}
