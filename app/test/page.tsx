// 'use client'

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import React, { useEffect } from "react";
// gsap.registerPlugin(ScrollTrigger)

// export default function Page() {
//   useEffect(() => {
//     gsap.to(".box", {
//       scrollTrigger: {
//         trigger: ".box",
//         toggleActions: 'play pause play play',
//         onToggle: () => {
//           console.log("hehe")
//         }
//       }, // start the animation when ".box" enters the viewport (once)
//       x: 500,
//       duration: 10
//     });
//   }, []);
//   return <div>
//     <div className="w-full h-[2000px]"></div>
//     <div className="box w-20 h-20 bg-red-300"></div>
//     <div className="w-full h-[2000px]"></div>
//   </div>;
// }

"use client";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getInitData = async () => {
      setIsLoading(true);
      const reponse = await fetch("https://fakestoreapi.com/products/1");
      const response = await reponse.json();
      console.log(response);
      setIsLoading(false);

      return response;
    };

    getInitData();

    gsap.to(".spinner", {
      rotate: 360,
      repeat: -1,
      duration: 2,
    });
  }, []);

  return (
    <div className="h-screen w-full">
      <div
        className="w-full h-screen bg-black/50 flex justify-center items-center"
        style={{
          display: isLoading ? "flex" : "none",
        }}
      >
        <div className="spinner w-20 h-20 bg-red-500"></div>
      </div>
    </div>
  );
}
