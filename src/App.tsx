import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreLoader from "./Components/Pre-loader";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
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
              </Routes>
            </Router>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
