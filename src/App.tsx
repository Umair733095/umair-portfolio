import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreLoader from "./Components/Pre-loader";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects"
import { useState } from "react";

function App() {
  const [IsPreloaderExist, setIsPreloaderExist] = useState(true);

  return (
    <>
      <PreLoader
        onUnmount={() => {
          setIsPreloaderExist(false);
        }}
      ></PreLoader>

      {!IsPreloaderExist && (
        <div className="wrap-container">
          <div className="wrap">
            <Router>
              <Routes>
                <Route index element={<Home />}></Route>
                <Route path="articles" element={<Articles />}></Route>
                <Route path="About" element={<About name="Muhammad Umair" imgSrc="DP.jpg" aboutText="I'm a passionate developer with a knack for creating engaging web experiences using modern tools like React and GSAP. I thrive on transforming ideas into clean, functional, and visually appealing solutions. In my free time, I enjoy exploring new tech trends and refining my craft." />}></Route>
                <Route path="skills" element={<Skills />}></Route>
                <Route path="Projects" element={<Projects />}></Route>
              </Routes>
            </Router>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
