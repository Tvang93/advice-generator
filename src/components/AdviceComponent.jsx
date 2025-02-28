import React, { useEffect, useState } from "react";
import dice from "../assets/images/icon-dice.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import "../index.css";
import {FetchAdvice} from "../services/DataServices"

function AdviceComponent() {
  const [adviceNumber, setAdviceNumber] = useState(0);
  const [advice, setAdvice] = useState("")

  const GetAdvice = async() => {
    const response = await FetchAdvice();
    setAdviceNumber(response.slip.id);
    setAdvice(response.slip.advice);
  }

  GetAdvice();

  return (
    <div className="bg-dark-grayish-blue flex flex-col items-center pt-10 px-5 sm:px-10 rounded-xl">
      <div
        style={{ fontFamily: "Manrope" }}
        className="relative flex flex-col items-center gap-5 w-[295px] sm:w-[444px]"
      >
        {
          adviceNumber > 0 ?
          <small className="text-neon-green font-thin tracking-[0.3rem]">ADVICE # {adviceNumber}</small> :
          <small className="text-neon-green font-thin tracking-[0.3rem]">ADVICE # {adviceNumber}</small>
        }
        {
          advice != "" ?
          <h2 className="text-light-cyan text-[28px] inline-flex text-center"><q>{advice}</q></h2> :
          <h2 className="text-light-cyan text-[28px] inline-flex text-center"><q>Quote</q></h2>
        }
        <img className='mt-5 hidden sm:block' src={dividerDesktop} alt="divider desktop" />
        <img className='mt-5 sm:hidden' src={dividerMobile} alt="divider mobile" />
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
