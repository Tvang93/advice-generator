import { useState } from 'react'
import './App.css'
import AdviceComponent from './components/AdviceComponent'

function App() {

  return (
    <>
      <div className='min-h-screen flex justify-center place-items-center'>
        <div className=''>
          <AdviceComponent />
        </div>
      </div>
    </>
  )
}

export default App
