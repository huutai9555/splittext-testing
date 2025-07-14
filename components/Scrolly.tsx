import React from "react";
import "./scroll.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Scrolly() {
  useGSAP(() => {
    const skewSetter = gsap.quickTo("img", "skewY"), // fast
      clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 2,
      speed: 3,
      effects: true,
      onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
      onStop: () => skewSetter(0),
    });
  });
  return (
    <div className="body hidden">
      <h1 className="text">Convallaria majalis</h1>
      <h1 aria-hidden="true" className="text outline-text">
        Convallaria majalis
      </h1>
      <h1 aria-hidden="true" className="text filter-text">
        Convallaria majalis
      </h1>

      <div id="wrapper">
        <section id="content">
          <section className="images">
            <img
              className="child-images"
              data-speed="0.8"
              src="https://i.pinimg.com/736x/06/89/bf/0689bf7de36bf0fb18b473cb58ebb044.jpg"
              alt=""
            />
            <img
              className="child-images"
              data-speed="0.9"
              src="https://i.pinimg.com/1200x/92/eb/80/92eb8066833b135a335aa4681ca230b0.jpg"
              alt=""
            />
            <img
              className="child-images"
              data-speed="1"
              src="https://i.pinimg.com/736x/dc/02/c9/dc02c99b744819a759f6987abafa0521.jpg"
              alt=""
            />
            <img
              className="child-images"
              data-speed="1.1"
              src="https://i.pinimg.com/736x/67/37/a4/6737a4aa10f937e33da48c9e15904759.jpg"
              alt=""
            />
            <img
              className="child-images"
              data-speed="0.9"
              src="https://i.pinimg.com/736x/f8/b9/86/f8b98692a6391e2c56f2e7f746f65241.jpg"
              alt=""
            />
            <img
              className="child-images"
              data-speed="1.2"
              src="https://i.pinimg.com/736x/fb/59/45/fb59459ad7c64e0b34323be47d94239f.jpg"
              alt=""
            />
            <img
              className="child-images"
              data-speed="0.8"
              src="https://i.pinimg.com/736x/4c/ab/e6/4cabe69a336f66eeea4ec3a24de0b8cd.jpg"
              alt=""
            />
            <img
              className="child-images"
              data-speed="1"
              src="https://i.pinimg.com/736x/89/03/0b/89030b2fcd1fd338e35c7b7abb6803fb.jpg"
              alt=""
            />
          </section>
        </section>
      </div>
    </div>
  );
}
