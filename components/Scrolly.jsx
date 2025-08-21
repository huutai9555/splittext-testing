import React, { forwardRef, useEffect } from "react";
import "./scroll.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
import { Great_Vibes } from "next/font/google";
import { FaPlayCircle } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const albumList = [
  {
    title: "Love Part 1",
    image: "https://i.scdn.co/image/ab67616d0000b27394b54df1649cc87af7533d44",
    audioList: [
      {
        title: "Love Is a Flower",
        length: "2:11",
        src: "/pt1/1.mp3",
        artist: "Colde",
        parentIndex: 0,
      },
      {
        title: "Love Makes Me Jealous",
        length: "2:44",
        src: "/pt1/2.mp3",
        artist: "Colde",
        parentIndex: 0,
      },
      {
        title: "I Fxxking Love You",
        length: "4:03",
        src: "/pt1/3.mp3",
        artist: "Colde",
        parentIndex: 0,
      },
      {
        title: "WA-R-R",
        length: "4:32",
        src: "/pt1/4.mp3",
        artist: "Colde",
        parentIndex: 0,
      },
      {
        title: "Scent",
        length: "3:53",
        src: "/pt1/5.mp3",
        artist: "Colde",
        parentIndex: 0,
      },
      {
        title: "You don't need my love?",
        length: "3:12",
        src: "/pt1/6.mp3",
        artist: "Colde",
        parentIndex: 0,
      },
      {
        title: "Endless Love",
        length: "2:03",
        src: "/pt1/7.mp3",
        artist: "Colde",
        parentIndex: 0,
      },
      {
        title: "Don't Leave Me, My Love",
        length: "4:45",
        src: "/pt1/8.mp3",
        artist: "Colde",
        parentIndex: 0,
      },
    ],
  },
  {
    title: "Love Part 2",
    image:
      "https://images.genius.com/7a6999e118fee71481ef1f8674b36953.1000x1000x1.jpg",

    audioList: [
      {
        title: "Island",
        length: "4:17",
        src: "/pt2/1.mp3",
        artist: "Colde",
        parentIndex: 1,
      },
      {
        title: "Don't ever say love me (feat. RM of BTS)",
        length: "3:34",
        src: "/pt2/2.mp3",
        artist: "Colde",
        parentIndex: 1,
      },
      {
        title: "I'm Still Here",
        length: "3:27",
        src: "/pt2/3.mp3",
        artist: "Colde",
        parentIndex: 1,
      },
      {
        title: "Heartbreak Club (feat. LEE CHANHYUK)",
        length: "3:38",
        src: "/pt2/4.mp3",
        artist: "Colde",
        parentIndex: 1,
      },
      {
        title: "After Everything",
        length: "4:30",
        src: "/pt2/5.mp3",
        artist: "Colde",
        parentIndex: 1,
      },
      {
        title: "When Dawn Comes Again (feat. BAEKHYUN)",
        length: "3:56",
        src: "/pt2/6.mp3",
        artist: "Colde",
        parentIndex: 1,
      },
      {
        title: "Settle",
        length: "3:33",
        src: "/pt2/7.mp3",
        artist: "Colde",
        parentIndex: 1,
      },
      {
        title: "Even Though You Said So Easily",
        length: "3:26",
        src: "/pt2/8.mp3",
        artist: "Colde",
        parentIndex: 1,
      },
    ],
  },
];

export default forwardRef(function Scrolly(props, ref) {
  const { indexSrc, setIndexSrc } = props;
  const [parentIndex, setParentIndex] = React.useState(0);
  const [isPlayView, setIsPlayView] = React.useState(false);
  const [currentAudio, setCurrentAudio] = React.useState("/pt1/1.mp3");

  useGSAP(() => {
    const skewSetter = gsap.quickTo(".child-images", "skewY"), // fast
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
    const audio = ref.current;
    if (!audio) return;
    const handleEnded = () => {
      // Thay đổi source khi audio kết thúc

      const currentIndexSrc =
        indexSrc === albumList[parentIndex].audioList[indexSrc].length - 1
          ? 0
          : indexSrc + 1;
      console.log(currentIndexSrc);
      // console.log(albumList[parentIndex].audioList[currentIndexSrc])
      audio.src = albumList[parentIndex].audioList[currentIndexSrc].src; // hoặc logic để chọn file khác
      setCurrentAudio(albumList[parentIndex].audioList[currentIndexSrc].src);
      setIndexSrc(currentIndexSrc);
      audio.load(); // Load audio mới
      audio.play(); // Tự động phát (tuỳ chọn)
    };

    if (audio) {
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [ref]);
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
        className="letter hidden fixed top-0 bottom-0 left-0 right-0 z-50 "
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
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-transparent to-black flex justify-center items-center">
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
              I fucking love you
            </h1>
            <h2
              className={`text-black text-2xl font-bold text-center text-split ${greatVibes.className}`}
            >
              Colde
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

      <button
        className="fixed bottom-0 right-0 cursor-pointer mx-5 my-5 text-xl"
        onClick={() => {
          gsap
            .timeline()
            .set(".playlist-view", {
              display: "block",
            })
            .to(".playlist-view", {
              opacity: 1,
              duration: 0.5,
            });
        }}
      >
        <FaPlayCircle size={40} />
      </button>
      <div className="fixed top-0 left-0 right-0 z-50 bg-black h-screen hidden opacity-0 playlist-view">
        <div
          className={`w-[70%] flex-col mx-auto bg-gray-950 h-full ${
            isPlayView ? "flex" : "hidden"
          }`}
        >
          <div className="w-full h-[30%] bg-black/50 p-5 flex items-end gap-6">
            <img
              src={albumList[parentIndex].image}
              alt=""
              className={`w-[200px] h-[200px] rounded-full shadow-lg relative audio`}
            />
            <div className="flex flex-col">
              <span>Album</span>
              <h2 className="text-6xl font-bold">
                {albumList[parentIndex].title}
              </h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col  overflow-y-hidden pb-2">
            <div
              className="py-2 cursor-pointer flex gap-1 items-center"
              onClick={() => {
                setIsPlayView(false);
              }}
            >
              <IoArrowBackOutline />
              Watch Another Album
            </div>
            <div className="flex-1 overflow-y-auto">
              {albumList[parentIndex].audioList.map((audio, index) => {
                return (
                  <div
                    key={index}
                    className={`flex justify-between py-4 px-2 hover:bg-gray-900 group `}
                  >
                    <div className="flex gap-4 items-center">
                      <span className="group-hover:hidden">{index + 1}</span>
                      <FaPlayCircle
                        size={20}
                        className="hidden cursor-pointer group-hover:block"
                        onClick={() => {
                          setIndexSrc(index);
                          const audioInstance = ref.current;
                          audioInstance.src = audio.src;
                          audioInstance.load(); // Load audio mới
                          audioInstance.play(); // Tự động phát (tuỳ chọn)
                          setCurrentAudio(audio.src);
                        }}
                      />
                      <div className="flex flex-col">
                        <h3
                          className={`${
                            currentAudio === audio.src ? "text-green-200" : ""
                          }`}
                        >
                          {audio.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            currentAudio === audio.src ? "text-green-200" : ""
                          }`}
                        >
                          {audio.artist}
                        </p>
                      </div>
                    </div>
                    <span>{audio.length}</span>
                  </div>
                );
              })}
            </div>
            {/* <div className="flex-1 overflow-y-auto">
              {albumList[parentIndex].audioList.map((audio, index) => {
                return (
                  <div
                    key={index}
                    className={`flex justify-between py-4 px-2 hover:bg-gray-900 group `}
                  >
                    <div className="flex gap-4 items-center">
                      <span className="group-hover:hidden">{index + 1}</span>
                      <FaPlayCircle
                        size={20}
                        className="hidden cursor-pointer group-hover:block"
                        onClick={() => {
                          setIndexSrc(index);
                          const audioInstance = ref.current;
                          audioInstance.src = audio.src;
                          audioInstance.load(); // Load audio mới
                          audioInstance.play(); // Tự động phát (tuỳ chọn)
                          setCurrentAudio(audio.src);
                        }}
                      />
                      <div className="flex flex-col">
                        <h3
                          className={`${
                            currentAudio === audio.src ? "text-green-200" : ""
                          }`}
                        >
                          {audio.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            currentAudio === audio.src ? "text-green-200" : ""
                          }`}
                        >
                          {audio.artist}
                        </p>
                      </div>
                    </div>
                    <span>{audio.length}</span>
                  </div>
                );
              })}
            </div> */}
          </div>
          <div>
            <audio id="audio" ref={ref} controls className="w-full">
              <source src={currentAudio} type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div
          className={`w-[70%] flex-col mx-auto bg-gray-950 h-full ${
            isPlayView ? "hidden" : "flex"
          }`}
        >
          <h2
            className="pt-5 px-5 cursor-pointer"
            onClick={() => {
              gsap
                .timeline()
                .to(".playlist-view", {
                  opacity: 0,
                  duration: 0.5,
                })
                .set(".playlist-view", {
                  display: "none",
                });
            }}
          >
            Close
          </h2>

          <div className="flex gap-5 p-5">
            {albumList.map((item, index) => {
              return (
                <div
                  className="w-1/3 aspect-square hover:bg-gray-800 p-5 cursor-pointer"
                  key={index}
                  onClick={() => {
                    setParentIndex(index);
                    setIsPlayView(true);
                  }}
                >
                  <img src={item.image} alt="" className="rounded" />
                  <h2 className="text-4xl font-bold mt-3">{item.title}</h2>
                  <h4 className="text-2xl">Colde</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});
