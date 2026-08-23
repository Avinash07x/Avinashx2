import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import ScrollEffects from "./components/ScrollEffects";
import ScrollProgress from "./components/ScrollProgress";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <ScrollEffects />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
