"use client";
import SplitText1 from "@/components/SplitText1";
import SplitText2 from "@/components/SplitText2";
import SplitText3 from "@/components/SplitText3";
import React, { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex flex-col">
      <div className={`block1 ${step !== 1 ? 'hidden' : ''}`}>
        <SplitText1 setStep={setStep} />
      </div>
      <div className={`block1 ${step !== 2 ? 'hidden' : ''}`}>
        <SplitText2 />
      </div>
    </div>
  );
}
