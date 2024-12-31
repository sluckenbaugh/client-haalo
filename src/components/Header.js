import React from 'react'
import logo from '../_img/avenica_logo.png'

const Header = () => {
  return (
    <div className='bg-black flex justify-center border-b-[3px] border-companyTeal'>
        <div className="flex flex-col items-center justify-center my-[1.7rem] gap-[1rem]">
            <img className="w-[4.5rem]" src={logo} alt="Avenica Logo." />
            <h1 className='text-white font-bold text-[1.5rem] md:text-[2rem] text-center'>HAALO For Hiring</h1>
        </div>
    </div>
  )
}

export default Header