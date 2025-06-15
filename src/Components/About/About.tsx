import Navbar from "../Navbar";
import Style from "./About.module.css";
import Footer from "../Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import FadeText from "../Fade-text";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Define props interface
interface AboutProps {
  name: string;
  imgSrc: string;
  aboutText: string;
}

export default function About({ name, imgSrc, aboutText }: AboutProps) {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  useEffect(() => {
    // Animate the img-wrap (container with shadow)
    if (imgWrapRef.current) {
      gsap.fromTo(
        imgWrapRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgWrapRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate the image
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate the name (optional, for smooth appearance)
    if (nameRef.current) {
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: nameRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Split name into first and last names
  const [firstName, lastName] = name.split(" ");

  return (
    <>
      <Navbar />
      <div className={Style["img-container"]}>
        <div className={Style["img-wrap"]} ref={imgWrapRef}>
          <img src={imgSrc} alt={`${name}'s Profile`} ref={imgRef} className={Style.img} />
        </div>
        <div className={Style["wrap-Name"]} ref={nameRef}>
          <div className={Style["name-container"]}>
            <FadeText MaskedHeading={firstName} />
            {lastName && <FadeText MaskedHeading={lastName} />}
          </div>
        </div>
      </div>
      <div className={Style["about-me-lines-wrap"]}>
        <FadeText Para={aboutText} />
      </div>
      <Footer />
    </>
  );
}