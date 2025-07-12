"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import "./1.css";
import { SplitText } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(SplitText);

const handleMultipleText = () => {
  let text = "Iu Bé Nhiều";
  for (let index = 0; index < 30; index++) {
    text += ", Iu Bé Nhiều";
  }

  return text;
};

export default function SplitText1(props) {
  const { setStep } = props;
  const text = handleMultipleText();

  useGSAP(() => {
    document.fonts.ready.then(() => {
      gsap.set(".container", { opacity: 1 });
      let split = SplitText.create(".animate-me", {
        type: "words",
        aria: "hidden",
      });

      gsap.from(split.words, {
        opacity: 0,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.1,
        onComplete: () => {
          setStep(2);
        },
      });
    });
  });
  return (
    <div className="container bg-black/50">
      {/* <div className="animate-me" aria-hidden="true">
        This text has a <a href="https://testlink.com">nested link</a> so we
        have created a duplicate "screenreader-only" element to preserve the
        semantics of child elements for screenreaders.
      </div> */}
      <div className="animate-me" aria-hidden="true">
        {text}
      </div>
    </div>
  );
}
