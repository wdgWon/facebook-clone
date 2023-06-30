import setActions from "./store/actions/actions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import About from "./components/profile/About";
import Friends from "./components/profile/Friends";
import Photos from "./components/profile/Photos";
import Videos from "./components/profile/Videos";
import Map from "./components/profile/Map";
import Header from "./components/profile/Header";
import Login from "./components/login/Login";
import MainPage from "./components/main/MainPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

setActions();

export default function App() {

   return (
      <>
         {/* <Login /> */}
         {/* <BrowserRouter>
         <Routes>
            
         </Routes>
         </BrowserRouter> */}
         <MainPage />

      </>
   );
}