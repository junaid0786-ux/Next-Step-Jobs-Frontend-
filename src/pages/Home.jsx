import React from 'react'
import heroimg from '../assets/hero.png';

const Home = () => {
  return (
    <div className='bg-blue-400  h-screen flex justify-end gap-200 p-20 '>

      <div className='bg-blue-600 h-135 w-100 rounded-tl-[200px] rounded-br-[140px] justify-center items-center flex'>
        <img src={heroimg} alt="hero" className='transform scale-100 md:scale-110 lg:scale-110  mt-[-121px] rounded-br-[150px]' />
    </div>
    </div>
  )
}

export default Home