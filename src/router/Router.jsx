import { createBrowserRouter } from "react-router-dom";
import ProfileSection from "../ProfileSection";
import MainPage from "../components/main/mainpage";
import App from "../App";
import Login from "../components/login/Login";
import Auth from "../hoc/Auth";
import Friends from "../components/friends/Friends";

// {/* <Auth specificComponent={<Login />} option={false}/> */}
const router = createBrowserRouter([
   {
      element: <App />,
      children: [
         {
            path: "/",
            element: (
               <Auth>
                  <MainPage />
               </Auth>
            ),
         },
         {
            path: "/profile",
            element: (
               <Auth>
                  <ProfileSection />
               </Auth>
            ),
         },
         {
            path: "/friends",
            element: (
               <Auth>
                  <Friends />
               </Auth>
            ),
         },
      ],
   },
   {
      path: "/login",
      element: (
         <Auth option={false}>
            <Login />
         </Auth>
      ),
   },
]);

export default router;
