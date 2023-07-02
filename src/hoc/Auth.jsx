import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import authentication from "./authentication";

export default function Auth({ option = true, admin = null, children }) {
   const [isAuth, setIsAuth] = useState(false);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      (async () => {
         console.log("Auth.js");

         const auth = await authentication();
         setIsAuth(auth);

         if (!auth && option) {
            alert("접속 권한이 없습니다. 로그인을 해주세요.");
         } else if (auth && !option) {
            alert("이미 로그인 되어있습니다.");
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
