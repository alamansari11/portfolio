import React from "react";
import { Why,Contact,Experience,Hero,Navbar,Projects } from "./components";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/why" element={<Why />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
