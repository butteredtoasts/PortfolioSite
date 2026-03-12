import Navbar from './components/fixedComponents/Navbar/Navbar.tsx';
import Home from './components/pages/Home/Home.tsx';
import PhotoMain from './components/pages/PhotoMain/PhotoMain.tsx';
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
        <Route path="/portfolio/photography" element={<PhotoMain />} />
        <Route path="/portfolio/photography/portraits" element={<PhotoPortraitEntries />} />
        <Route path="/portfolio/photography/events" element={<PhotoEventEntries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;