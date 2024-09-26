import React from 'react'
import logo from '../_img/USAA-Symbol 1.svg'

const Header = () => {
  return (
    <div className='bg-companyBlue flex justify-center border-b-[3px] border-companyYellow'>
        <div className="flex flex-col items-center justify-center my-4 gap-[1rem]">
            <img className="w-[7rem]" src={logo} alt="" />
            <h1 className='text-white font-bold text-[1.5rem] md:text-[2rem] text-center'>HAALO PERSONA INVENTORY</h1>
        </div>
    </div>
  )
}

export default Header