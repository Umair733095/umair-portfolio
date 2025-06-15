import React, { useEffect, useState } from "react";
import gsap from "gsap"; // Direct GSAP import
import Style from "./Pre-loader.module.css";

interface props {
  onUnmount: () => void;
}

const PreLoader: React.FC<props> = ({ onUnmount }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GSAP Animations
    if (gsap) {
      // Fade out loading page after 5 seconds
      gsap.to(`.${Style["loading-page"]}`, {
        opacity: 0,
        duration: 2,
        delay: 3,
        onComplete: () => {
          setLoading(false);
          onUnmount();
        }, // Hide loading screen after animation completes
      });

      // Drop in logo name
      gsap.fromTo(
        `.${Style["logo-name"]}`,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, delay: 0.5 }
      );
    }
  }, []); // Runs only once when component mounts

  return (
    <>
      {loading && (
        <div className={Style["loading-page"]}>
          <svg
  className={Style["logo-svg"]}
  id="svg"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1600 1800"
>
  <g transform="scale(1,-1) translate(0,-2050)">
    <path d="M640 1700 c0 -16 7 -20 34 -20 l35 0 3 -312 c3 -273 5 -317 20 -343 16 -29 17 -15 18 333 l0 362 -55 0 c-48 0 -55 -2 -55 -20z"/>
    <path d="M890 1277 l0 -443 34 -17 c88 -42 224 -42 312 0 l34 17 0 443 0 443 -55 0 c-48 0 -55 -2 -55 -20 0 -16 7 -20 35 -20 l35 0 0 -414 0 -414 -37 -14 c-49 -16 -177 -16 -225 0 l-38 14 0 413 0 414 32 3 c22 2 34 9 36 21 3 14 -5 17 -52 17 l-56 0 0 -443z"/>
    <path d="M1410 1358 c1 -348 2 -362 18 -333 15 26 17 70 20 343 l3 312 35 0 c27 0 34 4 34 20 0 18 -7 20 -55 20 l-55 0 0 -362z"/>
  </g>
</svg>


          <div className={Style["name-container"]}>
            <div className={Style["logo-name"]}>UMAIR</div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreLoader;
