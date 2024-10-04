import { useRef, useEffect } from "react";
import Style from "./client.module.css";
import gsap from "gsap";

const Client = () => {
  const targetRef = useRef<(HTMLElement | null)[]>([]);
  let image = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
              if (entry.target.className.includes(Style["client-heading"])) {
                fadeText(Style["client-heading"], 0.2);
              } else if (
                entry.target.className.includes(Style["client-para"])
              ) {
                fadeText(Style["client-para"], 0.4);
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
      <section className={Style["client-section"]}>
        <h1
          ref={(el) => {
            if (el) targetRef.current[0] = el;
          }}
          className={Style["client-heading"]}
        >
          Clients
        </h1>
        <p
          ref={(el) => {
            if (el) targetRef.current[1] = el;
          }}
          className={Style["client-para"]}
        >
          I've been working with
        </p>
        <div className={Style["client-logo-container"]}>
          {image.map((index) => (
            <div
              key={index + 1}
              ref={(el) => {
                if (el) targetRef.current[index] = el;
              }}
              className={Style["client-logo-img-container"]}
            >
              <img
                key={index + 2}
                className={Style["client-logo-img"]}
                src={`client-img${index - 1}.png`}
              ></img>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Client;
