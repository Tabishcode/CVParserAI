import React from 'react'
import logo from '../../public/images/logo.svg'
import Image from 'next/image'
const Navbar = () => {
  return (
      <nav className='flex  items-center justify-between mx-auto px-6 h-16'>
        {/* left aligned */}
        <div>
              <Image
                  src={logo}
                  alt="Logo" width="144" height="44"/>
        </div>
        {/* right aligned  */}
        <div className='flex justify-center items-center space-x-6'>
        <div className="btn  hover:text-white cursor-pointer font-medium">Login</div>
        <div className="btn  inline-flex   bg-primary cursor-pointer  hover:bg-[#00CFCF]/90  text-white  space-x-2 rounded-full text-sm h-10 px-4 py-2 font-medium  ">Try Free Now</div>
        
        </div>
        
    </nav>
  )
}

export default Navbar