import "./App.css";
import Home from "./Componant/Pages/Home";
import About from "./Componant/Pages/About";
import { HashRouter, Routes, Route } from "react-router-dom";
import Contact from "./Componant/Pages/Contact";
import Blog from "./Componant/Pages/Blog";
import Verification from "./Componant/Pages/Verification";
import CourseReg from "./Componant/Pages/CourseReg";
import Database from "./Componant/Pages/Database";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/verification" element={<Verification />}></Route>
          <Route path="/course" element={<CourseReg />}></Route>
          <Route path="/database" element={<Database />}></Route>
          <Route path="/*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
