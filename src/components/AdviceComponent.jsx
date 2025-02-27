import React, { useEffect, useState } from "react";
import dice from "../assets/images/icon-dice.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import "../index.css";
import {FetchAdvice} from "../services/DataServices"

function AdviceComponent() {
  const [adviceNumber, setAdviceNumber] = useState(0);
  const [advice, setAdvice] = useState("")

  const GetAdvice = async(e) => {
    const response = await FetchAdvice();
    setAdviceNumber(response.slip.id);
    setAdvice(response.slip.advice);
  }


  return (
    <div className="bg-dark-grayish-blue flex flex-col items-center pt-10 px-10 rounded-xl">
      <div
        style={{ fontFamily: "Manrope" }}
        className="relative flex flex-col items-center gap-10 w-[444px]"
      >
        {
          adviceNumber > 0 ?
          <h1 className="text-neon-green font-thin">ADVICE # {adviceNumber}</h1> :
          <h1 className="text-neon-green font-thin">ADVICE # {adviceNumber}</h1>
        }
        {
          advice != "" ?
          <h2 className="text-light-cyan text-[28px] inline-flex text-center">"{advice}"</h2> :
          <h2 className="text-light-cyan text-[28px] inline-flex text-center">"Quote"</h2>
        }
        <img src={dividerDesktop} alt="dice icon" />
      </div>
        <div className="relative bg-neon-green rounded-full p-6 top-9 hover:shadow-[0_0_25px] hover:shadow-neon-green hover:cursor-pointer"
        onClick={GetAdvice}
        >
          <img src={dice} alt="dice icon" />
        </div>
    </div>
  );
}

export default AdviceComponent;
