import FadeText from "../Fade-text";
import Style from "./Intro-section.module.css";
import IconCloud from "../Icon-cloud";
import { useState, useRef, useEffect } from "react";

const IntroSection = () => {
  const [IntroDisplayed, setIntroDisplayed] = useState(false);
  const IconCloudref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (IconCloudref.current) {
        IconCloudref.current.classList.add(Style["icon-cloud-display"]);
      }
    }, 500);
  }, [IntroDisplayed]);

  return (
    <section className={Style["intro-section"]}>
      <div className={Style["intro-wrap-container"]}>
        <div>
          <FadeText
            UnmaskedHeading="Hi, I'm"
            MaskedHeading=" Umair"
            Span="."
            delay={0.3}
          ></FadeText>
          <FadeText
            MaskedHeading="Web Designer & Developer"
            Span=" based in"
            delay={0.6}
          ></FadeText>
          <FadeText UnmaskedHeading=" Lahore, Pakistan." delay={0.9}></FadeText>
          <div className={Style["intro-para-container"]}>
            <FadeText
              delay={1.2}
              Para="I love art, code and design. I can help you with website, identity & digital design."
            ></FadeText>
            <FadeText
              delay={1.5}
              Para="Making you stand out in the digital world is what I'm after because I believe if something is worth doing, it’s worth doing right."
            ></FadeText>
            <div className={Style["intro-contact-wrap-container"]}>
              <FadeText
                oncomplete={() => setIntroDisplayed(true)}
                Para="Get in touch at "
                AnchorText="umair733095@gmail.com"
                anchorRef="mailto:umair733095@gmail.com"
                delay={1.8}
              ></FadeText>
            </div>
          </div>
        </div>
        {IntroDisplayed && (
          <div className={Style["icon-cloud"]} ref={IconCloudref}>
            <IconCloud></IconCloud>
          </div>
        )}
      </div>
    </section>
  );
};

export default IntroSection;
