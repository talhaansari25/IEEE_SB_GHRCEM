// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Prize from './pages/Prize';
import Contact from './pages/Contact';
import Join from './pages/Join';

function App() {
  return (
    <>
      {/* Removed <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/prize" element={<Prize />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </>
  );
}

export default App;
