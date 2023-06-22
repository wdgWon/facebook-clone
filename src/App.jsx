import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import About from "./components/About";
import Friends from "./components/Friends";
import Photos from "./components/Photos";
import Videos from "./components/Videos";
import Map from "./components/Map";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProfileSection />} />
        <Route path="about" element={<About />} />
        <Route path="friends" element={<Friends />} />
        <Route path="photos" element={<Photos />} />
        <Route path="videos" element={<Videos />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}
