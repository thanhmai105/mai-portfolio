import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Home from "../components/Home";
import About from "../components/About";
import { Route, Routes, useLocation } from "react-router-dom";
import ProjectDetails from "../components/project/ProjectDetails";
import Project from "../components/Project";
import { AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Main() {
  const location = useLocation();
  const lastHash = useRef("");
  const navbarHeight = 110;

  useEffect(() => {
    if (location.hash.length > 0) {
      lastHash.current = location.hash.slice(1);
    }

    if (
      lastHash.current.length > 0 &&
      document.getElementById(lastHash.current) != null
    ) {
      setTimeout(() => {
        //  s
        const element = document.getElementById(lastHash.current);
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
          });
        }
        // s
      }, 100);
    }
  }, [location]);
  return (
    <AnimatePresence>
      <div className="flex flex-row overflow-hidden h-[100vh]">
        <Navbar />
        <div className="overflow-y-scroll w-full">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<Project />} />
            <Route path="project/:id" element={<ProjectDetails />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </AnimatePresence>
  );
}
