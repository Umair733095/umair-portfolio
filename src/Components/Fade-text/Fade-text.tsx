import gsap from "gsap";
import { useEffect, useRef } from "react";
import Style from "./Fade-text.module.css";

interface props {
  MaskedHeading?: string;
  UnmaskedHeading?: string;
  Para?: string;
  AnchorText?: string;
  Span?: string;
  delay?: number;
  anchorRef?: string;
  oncomplete?: () => void;
}

export default function FadeTextDemo({
  MaskedHeading = "",
  UnmaskedHeading = "",
  Para = "",
  Span = "",
  AnchorText = "",
  delay = 0,
  anchorRef,
  oncomplete = () => {},
}: props) {
  const TagRef = useRef(null);

  useEffect(() => {
    if (gsap) {
      gsap.fromTo(
        TagRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: delay,
          onComplete: oncomplete,
        }
      );
    }
  }, []);

  return (
    <>
      {(MaskedHeading !== "" || UnmaskedHeading !== "") && (
        <h1 ref={TagRef} className={Style["h1"]}>
          <span className={Style["Unmasked_h1"]}>{UnmaskedHeading}</span>
          <span className={Style["Masked_h1"]}>{MaskedHeading}</span>
          <span className={Style["h1_span"]}>{Span}</span>
        </h1>
      )}

      {Para !== "" && AnchorText === "" && (
        <p ref={TagRef} className={Style["Para"]}>
          {Para}
        </p>
      )}

      {AnchorText !== "" && (
        <p ref={TagRef} className={Style["Para"]}>
          {" "}
          {Para}
          <a className={Style["anchor"]} href={anchorRef}>
            {AnchorText}
          </a>
        </p>
      )}
    </>
  );
}
