'use client'
import React from "react";
import "./3.css";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function SplitText3() {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      gsap.set(".split", { opacity: 1 });

      const split = SplitText.create(".split", {
        type: "words",
        wordsClass: "word++",
        wordDelimiter: String.fromCharCode(8205),
      });

      gsap.from(split.words, {
        y: -100,
        opacity: 0,
        rotation: "random(-80, 80)",
        stagger: 0.1,
        duration: 1,
        ease: "back",
      });
    });
  });
  return (
    <div className="container">
      <h1 className="split">#I&#8205;Really&#8205;Love&#8205;GSAP</h1>
    </div>
  );
}
