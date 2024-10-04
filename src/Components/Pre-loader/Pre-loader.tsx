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
        duration: 1,
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
            viewBox="0 0 1612 1612"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(678,176)"
              d="m0 0h62l44 4 31 4 3 1 1 9-1 329h234v-337l4-2 39-5 35-3h63l42 4 32 4 2 1v902l-14 3-37 5-21 2-17 1h-40l-38-3-49-7-1-1v-372h-234v372l-14 3-45 6-30 2h-40l-29-2-47-6-11-2-2-2 1-901 10-2 43-5z"
              fill="#FEFEFE"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(831,66)"
              d="m0 0h31l42 3 36 4 21 3 3 1 1 336h78l1-237 10-8 14-10 18-13 15-11 36-26 19-14 18-13 10-7 25-4 31-3 15-1h73l43 4 41 6 3 1v917l-4 4-13 9-17 12-19 14-54 39-14 10-16 12-21 4-38 5-36 3h-43l-29-2-40-5-27-4-1-371-79-1 1 266-2 5-8 6-14 10-16 12-19 14-18 13-17 13-16 11-13 10-10 7-7 5-49 7-29 3-15 1h-44l-37-3-45-6-13-2v-919l11-7 20-15 17-12 15-11 14-10 19-14 18-13 15-11 9-7 13-3 36-4zm-153 110-43 4-31 4-3 1-1 901 2 2 33 5 37 4 17 1h40l30-2 45-6 14-3v-372h234v372l7 2 43 6 38 3h40l30-2 38-5 18-3 3-1v-902l-10-2-42-5-24-2h-63l-44 4-30 4-4 2v337h-234l1-333-1-5-10-2-43-5-25-2z"
              fill="#050505"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(1404,90)"
              d="m0 0 2 1 1 194v705l-13 10-17 12-14 10-15 11-17 12-19 14-14 10-12 9-2-1-1-21-5-274v-596l8-7 14-10 14-11 19-14 13-10 44-33z"
              fill="#FEFEFE"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(952,92)"
              d="m0 0h2l1 27v298l-17 12-16 12-14 10-18 13-19 14-36 26-7 5-2-3v-314l2-6 13-10 44-33 13-10 36-27 13-10z"
              fill="#FEFEFE"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(827,723)"
              d="m0 0h127l1 1 2 234v30l-13 10-14 10-38 28-18 13-16 12-18 13-10 7-3 1-1-129v-225z"
              fill="#FEFEFE"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(1256,74)"
              d="m0 0h68l36 3 34 5 4 1v3l-14 10-18 14-24 18-19 14-18 14-19 14-11 8-47-6-20-2-17-1h-64l-34 3-32 4 2-4 19-14 18-13 19-14 17-12 13-10 14-10 18-13 8-5 29-4z"
              fill="#FEFEFE"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(812,75)"
              d="m0 0h56l29 2 32 4 18 3-1 4-11 8-13 10-28 21-19 14-18 14-19 14-12 9-18-2-41-5-27-2h-64l-34 3-24 3h-6v-2l14-10 19-14 11-8 36-26 19-14 18-13 9-6 22-3 34-3z"
              fill="#FEFEFE"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(961,422)"
              d="m0 0h82l1 1v92h-210l5-5 14-10 36-26 38-28 14-10 18-13z"
              fill="#FEFEFE"
            />
          </svg>

          <div className={Style["name-container"]}>
            <div className={Style["logo-name"]}>HASHIR</div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreLoader;
