import React from 'react'

const Header = () => {
  return (
    <div className='flex h-[188px] justify-center'>
        <div className="flex flex-col items-center justify-center">
            <img className="w-[300px] h-[168.75px]" src="https://haalo.avenica.com/_img/avenica_logo.png" alt="" />
            <h1 className='font-bold text-[2rem] -mt-4'>HAALO Persona Inventory</h1>
        </div>
    </div>
  )
}

export default Header