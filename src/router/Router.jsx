import {
   createBrowserRouter,
   Outlet,
   Route,
   createRoutesFromElements,
} from "react-router-dom";
import NavigationBar from "../components/navigation/NavigationBar";
import MainPage from "../components/main/mainpage";
import Login from "../components/login/Login";
import Auth from "../hoc/Auth";
import Friends from "../components/friends/Friends";
import { default as FriendsHome } from "../components/friends/Home";
import { default as FriendsRequests } from "../components/friends/Request";
import { default as FriendsList } from "../components/friends/List";
import OthersProfile from "../components/others/profile";
import About from "../components/profile/About";
import Searchs from "../components/search/SearchPage";

import ProfileFriends from "../components/profile/Friends";
import Map from "../components/profile/Map";
import Photos from "../components/profile/Photos";
import Videos from "../components/profile/Videos";
import ProfileSection from "../components/profile/profile_section/ProfileSection";
import ProfilePage from "../components/profile/ProfilePage";

const rootRouter = createBrowserRouter(
   createRoutesFromElements(
      <Route>
         <Route
            path="/"
            element={
               <Auth>
                  <NavigationBar />
                  <Outlet />
               </Auth>

            }
         >
            <Route index element={<MainPage />} />
            <Route path="/search" element={<Searchs />} />
            <Route path="profile" element={<ProfilePage />}>
               <Route index element={<ProfileSection />} />
               <Route path="post" element={<ProfileSection />} />
               <Route path="about" element={<About />} />
               <Route path="friends" element={<ProfileFriends />} />
               <Route path="photos" element={<Photos />} />
               <Route path="videos" element={<Videos />} />
               <Route path="map" element={<Map />} />
            </Route>
            <Route path="others" element={<OthersProfile />} />
            <Route path="friends" element={<Friends />}>
               <Route index element={<FriendsHome />} />
               <Route path="requests" element={<FriendsRequests />}>
                  <Route path="profile" element={<ProfilePage />}>
                     <Route index element={<ProfileSection />} />
                     <Route path="post" element={<ProfileSection />} />
                     <Route path="about" element={<About />} />
                     <Route path="friends" element={<ProfileFriends />} />
                     <Route path="photos" element={<Photos />} />
                     <Route path="videos" element={<Videos />} />
                     <Route path="map" element={<Map />} />
                  </Route>
               </Route>
               <Route path="list" element={<FriendsList />}>
                  <Route path="profile" element={<ProfilePage />}>
                     <Route index element={<ProfileSection />} />
                     <Route path="post" element={<ProfileSection />} />
                     <Route path="about" element={<About />} />
                     <Route path="friends" element={<ProfileFriends />} />
                     <Route path="photos" element={<Photos />} />
                     <Route path="videos" element={<Videos />} />
                     <Route path="map" element={<Map />} />
                  </Route>
               </Route>
            </Route>
         </Route>
         <Route
            path="login"
            element={
               <Auth option={false}>
                  <Login />
               </Auth>
            }
         />
      </Route>
   )
);

export default rootRouter;
