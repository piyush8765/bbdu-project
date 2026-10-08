import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import Schools from "./pages/Home/Schools";
import Programs from "./pages/Home/Programs";
import Admissions from "./pages/Home/Admissions";
import Placements from "./pages/Home/Placements";
import Contact from "./pages/Home/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;