import Navbar from './components/Navbar/Navbar.tsx';
import Home from './components/Home/Home.tsx';
import { Routes, Route } from "react-router-dom";

import './App.css'
import Header from './components/Header/Header.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;