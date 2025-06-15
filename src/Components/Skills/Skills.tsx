import { useRef, useEffect } from "react";
import Style from "./Skills.module.css";
import gsap from "gsap";
import Navbar from "../Navbar"
import Footer from "../Footer"

const Skills = () => {
  const targetRef = useRef<(HTMLElement | null)[]>([]);
  let image = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const fadeText = (classname: string, delay: number = 0) => {
    if (gsap) {
      gsap.fromTo(
        `.${classname}`,
        {
          y: 30,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: delay,
        }
      );
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let timer = 150;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (entry.target.className.includes(Style["skill-heading"])) {
                fadeText(Style["skill-heading"], 0.2);
              } else if (
                entry.target.className.includes(Style["skill-para"])
              ) {
                fadeText(Style["skill-para"], 0.4);
              } else {
                entry.target.classList.add(Style["display"]);
              }
            }, (timer += 150));
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
    <>
      <Navbar />
      <section className={Style["skill-section"]}>
        <h1
          ref={(el) => {
            if (el) targetRef.current[0] = el;
          }}
          className={Style["skill-heading"]}
        >
          Skills
        </h1>
        <p
          ref={(el) => {
            if (el) targetRef.current[1] = el;
          }}
          className={Style["skill-para"]}
        >
          I am expert in
        </p>
        <div className={Style["skill-logo-container"]}>
          {image.map((index) => (
            <div
              key={index + 1}
              ref={(el) => {
                if (el) targetRef.current[index] = el;
              }}
              className={Style["skill-logo-img-container"]}
            >
              <img
                key={index + 2}
                className={Style["skill-logo-img"]}
                src={`skill-img${index - 1}.jpg`}
              ></img>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Skills;
