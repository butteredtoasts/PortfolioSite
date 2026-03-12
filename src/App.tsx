import Navbar from './components/fixedComponents/Navbar/Navbar.tsx';
import Home from './components/pages/Home/Home.tsx';
import Development from './components/pages/Development/Development.tsx';
import Regeneron from './components/pages/Regeneron/Regneron.tsx';
import Tazzworks from './components/pages/Tazzworks/Tazzworks.tsx';
import MythicalFood from './components/pages/MythicalFood/MythicalFood.tsx';
import PhotoMain from './components/pages/PhotoMain/PhotoMain.tsx';
import Music from './components/pages/Music/Music.tsx';
import Content from './components/pages/Content/Content.tsx';
import Contact from './components/pages/Contact/Contact.tsx';
import FadeUp from './components/reusable/FadeUp/FadeUp.tsx';
import useSystemDarkMode from './components/fixedComponents/DarkModeSystem/DarkModeSystem.tsx';
import { Routes, Route } from "react-router-dom";

import './App.css'
import Header from './components/fixedComponents/Header/Header.tsx';
import PortfolioSelector from './components/fixedComponents/PortfolioSelector/PortfolioSelector.tsx';
import PhotoPortraitEntries from './components/pages/PhotoPortraitEntries/PhotoPortraitEntries.tsx';
import PhotoEventEntries from './components/pages/PhotoEventEntries/PhotoEventEntries.tsx';

function App() {
  useSystemDarkMode();
  
  return (
    <>
      <Navbar />
      <FadeUp delay={500}>
      <Header />
      </FadeUp>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioSelector />} />
        <Route path="/portfolio/dev" element={<Development />} />
        <Route path="/portfolio/dev/regeneron" element={<Regeneron />} />
        <Route path="/portfolio/dev/tazzworks" element={<Tazzworks />} />
        <Route path="/portfolio/dev/mythicalfood" element={<MythicalFood />} />
        <Route path="/portfolio/photography" element={<PhotoMain />} />
        <Route path="/portfolio/photography/portraits" element={<PhotoPortraitEntries />} />
        <Route path="/portfolio/photography/events" element={<PhotoEventEntries />} />
        <Route path="/portfolio/music" element={<Music />} />
        <Route path="/portfolio/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;