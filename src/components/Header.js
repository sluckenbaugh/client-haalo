import React from 'react'
import logo from '../_img/White Avenica Logo Full.png'

const Header = () => {
  return (
    <div className='bg-black flex justify-center border-b-[3px] border-companyTeal'>
        <div className="flex flex-col items-center justify-center my-6 gap-[1rem]">
            <img className="w-[8rem]" src={logo} alt="" />
            <h1 className='text-white font-normal text-[1.5rem] md:text-[2.3rem] text-center'>HAALO FOR HIRING</h1>
        </div>
    </div>
  )
}

export default Header