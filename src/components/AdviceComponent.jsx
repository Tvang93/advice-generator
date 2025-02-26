import React from 'react'
import dice from '../assets/images/icon-dice.svg'
import dividerDesktop from '../assets/images/pattern-divider-desktop.svg'
import dividerMobile from '../assets/images/pattern-divider-mobile.svg'

function AdviceComponent() {


  return (
    <div className='relative'>
      <div>
        <h1></h1>
        <h2></h2>
        <img src={dividerDesktop} alt="dice icon" />
      </div>
      <div className='absolute bg-'>
        <img src={dice} alt="" />
      </div>
    </div>
  )
}

export default AdviceComponent