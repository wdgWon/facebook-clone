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

setActions();

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<ProfileSection />} />
          <Route path="about" element={<About />} />
          <Route path="/about/:aboutParam" element={<About />} />
          <Route path="friends" element={<Friends />} />
          <Route path="photos" element={<Photos />} />
          <Route path="videos" element={<Videos />} />
          <Route path="map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
