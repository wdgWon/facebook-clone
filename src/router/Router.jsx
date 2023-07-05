import { createBrowserRouter, Outlet } from "react-router-dom";
import NavigationBar from "../components/navigation/NavigationBar";
import ProfileSection from "../components/profile/profile_section/ProfileSection";
import Header from "../components/profile/Header";
import ProfileFriends from "../components/profile/Friends";
import Photos from "../components/profile/Photos";
import Videos from "../components/profile/Videos";
import Map from "../components/profile/Map";
import MainPage from "../components/main/mainpage";
import Login from "../components/login/Login";
import Auth from "../hoc/Auth";
import Friends from "../components/friends/Friends";
import About from "../components/profile/About";

const rootRouter = createBrowserRouter([
   {
      element: (
         <Auth>
            <NavigationBar />
            <Outlet />
         </Auth>
      ),
      children: [
         {
            path: "/",
            element: <MainPage />,
         },
         {
            element: (
               <Auth>
                  <Header />
                  <Outlet />
               </Auth>
            ),
            children: [
               {
                  path: "/profile",
                  element: <ProfileSection />,
               },
               {
                  path: "/profile/about",
                  element: <About />,
               },
               {
                  path: "/profile/friends",
                  element: <ProfileFriends />,
               },
               {
                  path: "/profile/photos",
                  element: <Photos />,
               },
               {
                  path: "/profile/videos",
                  element: <Videos />,
               },
               {
                  path: "/profile/map",
                  element: <Map />,
               },
            ]
         },
         {
            path: "/friends",
            element: <Friends />,
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

export default rootRouter;
