import { createBrowserRouter } from "react-router-dom";
import ProfileSection from "../ProfileSection";
import Header from "../components/profile/Header";
import ProfileFriends from "../components/profile/Friends";
import Photos from "../components/profile/Photos";
import Videos from "../components/profile/Videos";
import Map from "../components/profile/Map";
import MainPage from "../components/main/mainpage";
import App from "../App";
import Login from "../components/login/Login";
import Auth from "../hoc/Auth";
import Friends from "../components/friends/Friends";
import About from "../components/profile/About"

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
                  <Header />
                  <ProfileSection />
               </Auth>
            ),
            children: [
               {
                  path: "/profile/about",
                  element: <About />
               },
               {
                  path: "/profile/friends",
                  element: <ProfileFriends />
               },
               {
                  path: "/profile/photos",
                  element: <Photos />
               },
               {
                  path: "/profile/videos",
                  element: <Videos />
               },
               {
                  path: "/profile/map",
                  element: <Map />
               }
            ]
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
