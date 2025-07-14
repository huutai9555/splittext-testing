import React, { useEffect } from "react";
import "./scroll.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

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

  useEffect(() => {
    document.body.addEventListener("keypress", (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        // write your logic here.
        console.log("hahah");
      }
    });
  }, []);
  return (
    <div className="body hidden">
      <h1 className="scrollly-text">Convallaria majalis</h1>
      <h1 aria-hidden="true" className="scrollly-text outline-text">
        Convallaria majalis
      </h1>
      <h1 aria-hidden="true" className="scrollly-text filter-text">
        Convallaria majalis
      </h1>

      <div id="wrapper">
        <section id="content">
          <section className="images">
            <img
              className="child-images cursor-pointer"
              data-speed="0.8"
              src="https://i.pinimg.com/736x/06/89/bf/0689bf7de36bf0fb18b473cb58ebb044.jpg"
              alt=""
              onClick={() => {
                const split = SplitText.create(".text-split", {
                  type: "words, chars",
                });

                gsap
                  .timeline()
                  .set(".letter", {
                    display: "flex",
                  })
                  .to(".letter", {
                    opacity: 1,
                    duration: 1,
                  })
                  .from(split.chars, {
                    duration: 2,
                    y: 100, // animate from 100px below
                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                    stagger: 0.05,
                    z: 3, // 0.05 seconds between each
                  })
                  .to(".sub-text", {
                    opacity: 1,
                  });
              }}
            />
            <img
              className="child-images cursor-pointer"
              data-speed="0.9"
              src="https://i.pinimg.com/1200x/92/eb/80/92eb8066833b135a335aa4681ca230b0.jpg"
              alt=""
              onClick={() => {
                const split = SplitText.create(".text-split", {
                  type: "words, chars",
                });

                gsap
                  .timeline()
                  .set(".letter", {
                    display: "flex",
                  })
                  .to(".letter", {
                    opacity: 1,
                    duration: 1,
                  })
                  .from(split.chars, {
                    duration: 2,
                    y: 100, // animate from 100px below
                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                    stagger: 0.05,
                    z: 3, // 0.05 seconds between each
                  })
                  .to(".sub-text", {
                    opacity: 1,
                  });
              }}
            />
            <img
              className="child-images cursor-pointer"
              data-speed="1"
              src="https://i.pinimg.com/736x/dc/02/c9/dc02c99b744819a759f6987abafa0521.jpg"
              alt=""
              onClick={() => {
                const split = SplitText.create(".text-split", {
                  type: "words, chars",
                });

                gsap
                  .timeline()
                  .set(".letter", {
                    display: "flex",
                  })
                  .to(".letter", {
                    opacity: 1,
                    duration: 1,
                  })
                  .from(split.chars, {
                    duration: 2,
                    y: 100, // animate from 100px below
                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                    stagger: 0.05,
                    z: 3, // 0.05 seconds between each
                  })
                  .to(".sub-text", {
                    opacity: 1,
                  });
              }}
            />
            <img
              className="child-images cursor-pointer"
              data-speed="1.1"
              src="https://i.pinimg.com/736x/67/37/a4/6737a4aa10f937e33da48c9e15904759.jpg"
              alt=""
              onClick={() => {
                const split = SplitText.create(".text-split", {
                  type: "words, chars",
                });

                gsap
                  .timeline()
                  .set(".letter", {
                    display: "flex",
                  })
                  .to(".letter", {
                    opacity: 1,
                    duration: 1,
                  })
                  .from(split.chars, {
                    duration: 2,
                    y: 100, // animate from 100px below
                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                    stagger: 0.05,
                    z: 3, // 0.05 seconds between each
                  })
                  .to(".sub-text", {
                    opacity: 1,
                  });
              }}
            />
            <img
              className="child-images cursor-pointer"
              data-speed="0.9"
              src="https://i.pinimg.com/736x/f8/b9/86/f8b98692a6391e2c56f2e7f746f65241.jpg"
              alt=""
              onClick={() => {
                const split = SplitText.create(".text-split", {
                  type: "words, chars",
                });

                gsap
                  .timeline()
                  .set(".letter", {
                    display: "flex",
                  })
                  .to(".letter", {
                    opacity: 1,
                    duration: 1,
                  })
                  .from(split.chars, {
                    duration: 2,
                    y: 100, // animate from 100px below
                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                    stagger: 0.05,
                    z: 3, // 0.05 seconds between each
                  })
                  .to(".sub-text", {
                    opacity: 1,
                  });
              }}
            />
            <img
              className="child-images cursor-pointer"
              data-speed="1.2"
              src="https://i.pinimg.com/736x/fb/59/45/fb59459ad7c64e0b34323be47d94239f.jpg"
              alt=""
              onClick={() => {
                const split = SplitText.create(".text-split", {
                  type: "words, chars",
                });

                gsap
                  .timeline()
                  .set(".letter", {
                    display: "flex",
                  })
                  .to(".letter", {
                    opacity: 1,
                    duration: 1,
                  })
                  .from(split.chars, {
                    duration: 2,
                    y: 100, // animate from 100px below
                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                    stagger: 0.05,
                    z: 3, // 0.05 seconds between each
                  })
                  .to(".sub-text", {
                    opacity: 1,
                  });
              }}
            />
            <img
              className="child-images cursor-pointer"
              data-speed="0.8"
              src="https://i.pinimg.com/736x/4c/ab/e6/4cabe69a336f66eeea4ec3a24de0b8cd.jpg"
              alt=""
              onClick={() => {
                const split = SplitText.create(".text-split", {
                  type: "words, chars",
                });

                gsap
                  .timeline()
                  .set(".letter", {
                    display: "flex",
                  })
                  .to(".letter", {
                    opacity: 1,
                    duration: 1,
                  })
                  .from(split.chars, {
                    duration: 2,
                    y: 100, // animate from 100px below
                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                    stagger: 0.05,
                    z: 3, // 0.05 seconds between each
                  })
                  .to(".sub-text", {
                    opacity: 1,
                  });
              }}
            />
            <img
              className="child-images cursor-pointer"
              data-speed="1"
              src="https://i.pinimg.com/736x/89/03/0b/89030b2fcd1fd338e35c7b7abb6803fb.jpg"
              alt=""
              onClick={() => {
                const split = SplitText.create(".text-split", {
                  type: "words, chars",
                });

                gsap
                  .timeline()
                  .set(".letter", {
                    display: "flex",
                  })
                  .to(".letter", {
                    opacity: 1,
                    duration: 1,
                  })
                  .from(split.chars, {
                    duration: 2,
                    y: 100, // animate from 100px below
                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                    stagger: 0.05,
                    z: 3, // 0.05 seconds between each
                  })
                  .to(".sub-text", {
                    opacity: 1,
                  });
              }}
            />
          </section>
        </section>
      </div>

      <div
        className="letter fixed top-0 bottom-0 left-0 right-0 z-50 "
        onClick={() => {
          gsap
            .timeline()
            .to(".letter", {
              opacity: 0,
              duration: 1,
            })
            .set(".letter", {
              display: "none",
            })
            .set(".sub-text", {
              opacity: 0,
            });
        }}
      >
        <div className="letter absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-transparent to-black flex justify-center items-center hidden">
          <div
            className="max-w-[500px] min-w-[500px] bg-[#e1e1e1] h-[80%] rounded p-5 overflow-y-auto"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h2
              className="text-black cursor-pointer w-fit"
              onClick={() => {
                gsap
                  .timeline()
                  .to(".letter", {
                    opacity: 0,
                    duration: 1,
                  })
                  .set(".letter", {
                    display: "none",
                  })
                  .set(".sub-text", {
                    opacity: 0,
                  });
              }}
            >
              Back
            </h2>
            <h1
              className={`text-black text-4xl font-bold text-center text-split ${greatVibes.className}`}
            >
              Send To My Love
            </h1>
            <h2
              className={`text-black text-2xl font-bold text-center text-split ${greatVibes.className}`}
            >
              My Love
            </h2>
            <p className="text-black sub-text opacity-0">
              세상에 많은 단어 중 woo <br /> 해주고 싶은 말이 있어 yeah <br />{" "}
              제발 내게만 받아줘 yeah <br /> 너는 그럴 자격 있어 yeah yeah{" "}
              <br />I love you hey <br /> <br /> Baby I love you oh yeah <br />{" "}
              너무 단순하게도 oh oh <br /> 널 보고 떠오른 그 말<br /> Hey baby
              fucking <br />I love you I really fucking <br />I love you woo
              yeah <br />난 진짜 머릿속에 너만 있다구 yeah <br />
              If I If I say I love you <br />난 네 앞에만 서면 yeah yeah yeah{" "}
              <br />
              한마디 말도 나는 못해 woo yeah <br />
              다른 말은 내게 필요하지 않다는 생각을 나는 그저 하곤 해<br /> Oh
              baby fucking I love you woo woo <br />
              Oh really fucking I love you woo oh yeah Hey baby fucking <br />
              I love you yeah oh yeah <br />
              다른 말은 기억 안 난다구 ay hey 사랑해 yeah yeah <br />
              사랑해 yeah woo <br />
              나는 너를 너무 사랑해서 이런 바보 같은 노랠 만들게 됐어 어떻게
              표현할 방법이 없어 이렇게 소리를 지르고 싶어 내 심장을 꺼내서
              보여주고 싶어 그렇게 하면 내 말을 믿어주겠어? <br />
              fucking I love you I fucking love fucking
              <br />I love you I fucking love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
