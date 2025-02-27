import React from "react";
import dice from "../assets/images/icon-dice.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import "../index.css";

function AdviceComponent() {
  return (
    <div className="bg-dark-grayish-blue flex flex-col items-center pt-10 px-10 rounded-xl">
      <div
        style={{ fontFamily: "Manrope" }}
        className="relative flex flex-col items-center gap-10 w-[444px]"
      >
        <h1 className="text-neon-green">Advice #</h1>
        <h2 className="text-light-cyan text-[28px] inline-flex text-center">"Quote"</h2>
        <img src={dividerDesktop} alt="dice icon" />
      </div>
        <div className="relative bg-neon-green rounded-full p-6 top-9">
          <img src={dice} alt="dice icon" />
        </div>
    </div>
  );
}

export default AdviceComponent;
