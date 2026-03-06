import Navbar from './components/fixedComponents/Navbar/Navbar.tsx';
import Home from './components/pages/Home/Home.tsx';
import PhotoMain from './components/pages/PhotoMain/PhotoMain.tsx';
import { Routes, Route } from "react-router-dom";

import './App.css'
import Header from './components/fixedComponents/Header/Header.tsx';
import PortfolioSelector from './components/fixedComponents/PortfolioSelector/PortfolioSelector.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioSelector />} />
        <Route path="/portfolio/photography" element={<PhotoMain />} />
      </Routes>
    </>
  );
}

export default App;