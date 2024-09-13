import React from 'react'

const Footer = () => {
  return (
    <div className="flex h-[188px] items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center">
        <a href="https://avenica.com/" rel="home" aria-current="page"><img className='w-[150px] h-[21.54px] mb-4' src="https://avenica.com/wp-content/uploads/2022/04/avenica_logo_solid-white.svg" alt="Avenica" /></a>
        <div>
          Copyright <span>&reg;</span> 2024 Avenica. All rights reserved. <a target='_blank' href="https://avenica.com/privacy-policy/">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;