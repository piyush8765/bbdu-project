import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/Home/About.jsx";
import Schools from "./Pages/Home/Schools.jsx";
import Programs from "./Pages/Home/Programs.jsx";
import Admissions from "./Pages/Home/Admissions.jsx";
import Placements from "./Pages/Home/Placements.jsx";
import Contact from "./Pages/Home/Contact.jsx";

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