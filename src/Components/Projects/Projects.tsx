import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Style from "./Projects.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const targetRef = useRef<(HTMLElement | null)[]>([]);

  const [isMobile] = useState(window.innerWidth < 800);

  let projectImage = [1, 2, 3, 4, 5, 6, 7, 8];
  let projectName = [
    "Hishi",
    "MMA Fightland",
    "Drive Autoverse",
    "Fainefield",
    "Milano Straps",
    "Ride A Bull",
    "Stedtnitz",
    "Trainsane",
  ];

  let projectLink = [
    "https://hishi.co/",
    "https://mmafightland.com/",
    "https://driveautoverse.com/",
    "https://fainefield.shop/",
    "https://milanostraps.com/",
    "http://rideabull.com.au/",
    "https://www.stedtnitz.ch/",
    "https://trainsane.com/",
  ];

  const fadeText = (element: Element, delay: number) => {
    gsap.fromTo(
      element,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: delay,
      }
    );
  };

  useEffect(() => {
    // To apply animation on text and image
    ScrollTrigger.refresh(true);

    targetRef.current.slice(2).forEach((el) => {
      if (el) {
        const lastChild = el.lastElementChild as HTMLElement | null;
        if (lastChild) {
          gsap.fromTo(
            lastChild,
            {
              y: isMobile ? 50 : 350,
              scale: 1,
            },
            {
              scale: 0.7,
              y: isMobile ? -60 : -460,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        let timer = 100;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              fadeText(entry.target, 0.15);
            }, (timer += 100));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targetRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      targetRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className={Style["projects-section"]}>
      <h1
        ref={(el) => {
          if (el) targetRef.current[0] = el;
        }}
        className={Style["project-heading"]}
      >
        SOME PROJECTS
      </h1>
      <p
        ref={(el) => {
          if (el) targetRef.current[1] = el;
        }}
        className={Style["project-heading-para"]}
      >
        out of hundreds
      </p>

      <div className={Style["projects-container"]}>
        {projectImage.map((index) => (
          <div key={index + 1} className={Style["project-img-text-container"]}>
            <a
              key={index + 2}
              ref={(el) => {
                if (el) {
                  targetRef.current[index + 1] = el;
                }
              }}
              href={projectLink[index - 1]}
              target="_blank"
              className={Style["img-container"]}
            >
              <img
                key={index + 3}
                src={`project-img-${index++}.jpg`}
                className={Style["img"]}
              />
              <div key={index + 4} className={Style["text"]}>
                {projectName[index - 2]}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
