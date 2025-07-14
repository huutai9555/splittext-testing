"use client";
import Scrolly from "@/components/Scrolly";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { use, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";

export default function Page() {
  const audioRef = React.useRef(null);
  const [onHover, setOnHover] = React.useState(false);
  const [played, setPlayed] = React.useState(false);

  // useEffect(() => {
  // const audio = document.getElementById('audio')
  // console.log('Audio element:', audio)
  // if (audio) {
  //   audio.play().catch((error) => {
  //     console.error('Error playing audio:', error)
  //   })
  // }
  // if (audioRef.current) {
  //   audioRef.current.play().catch((error) => {
  //     console.error("Error playing audio:", error);
  //   });
  // }
  // }, [audioRef]);
  useEffect(() => {
    if (played) {
      const tl = gsap.timeline();
      tl.to(".audio-box", {
        delay: 3,
        duration: 3,
        opacity: 0,
      })
        .set(".audio-box", {
          display: "none",
        })
        .set(".body", {
          display: "block",
          opacity: 0,
        })
        .to(".body", {
          duration: 1,
          opacity: 1,
        });
    }
  }, [played]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".audio", {
      duration: 15,
      rotate: 360,
      ease: "power1.inOut",
      repeat: -1,
    })
  });
  return (
    <>
      <div className="audio-box flex flex-col items-center justify-center h-screen relative bg-black">
        <audio id="audio" ref={audioRef} controls className="hidden">
          <source src={"./audio.mp3"} type="audio/mpeg" />
        </audio>
        {!played && (
          <FaPlayCircle
            className={`absolute text-5xl cursor-pointer ${
              !onHover ? "opacity-0" : "opacity"
            } z-10 duration-200`}
            onMouseEnter={() => {
              setOnHover(true);
            }}
            onMouseLeave={() => {
              setOnHover(false);
            }}
            onClick={() => {
              setPlayed(true);
              audio.play().catch((error) => {
                console.error("Error playing audio:", error);
              });
            }}
          />
        )}
        <img
          src="https://i.scdn.co/image/ab67616d0000b27394b54df1649cc87af7533d44"
          alt=""
          className={`audio w-[300px] h-[300px] rounded-full shadow-lg relative`}
          onMouseEnter={() => {
            setOnHover(true);
          }}
          onMouseLeave={() => {
            setOnHover(false);
          }}
        />
      </div>

      <Scrolly />
    </>
  );
}
