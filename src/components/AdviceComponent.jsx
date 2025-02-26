import React from 'react'
import dice from '../assets/images/icon-dice.svg'
import dividerDesktop from '../assets/images/pattern-divider-desktop.svg'
import dividerMobile from '../assets/images/pattern-divider-mobile.svg'
import '../index.css'

function AdviceComponent() {


  return (
    <div className='relative bg-dark-grayish-blue'>
      <div style={{fontFamily: 'Manrope'}}>
        <h1 className='text-neon-green'>Advice #</h1>
        <h2 className='text-light-cyan text-[28px]'>"Quote"</h2>
        <img src={dividerDesktop} alt="dice icon" />
      </div>
      <div className='absolute bg-neon-green rounded-full p-6'>
        <img src={dice} alt="" />
      </div>
    </div>
  )
}

export default AdviceComponent