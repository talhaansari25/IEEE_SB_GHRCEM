import React from "react";
import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Join from "./pages/Join.jsx";
import Home from "./pages/home.jsx";
import Events from "./pages/Events.jsx";
import Prizes from "./pages/Prizes.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/join" element={<Join />} />
      <Route path="/events" element={<Events />} />
      <Route path="/prizes" element={<Prizes/>}/>
    </Routes>
  );
}

export default App;
