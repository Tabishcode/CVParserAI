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
              <div className="underline-offset-6 underline cursor-pointer font-medium">Login</div>
              <div className="inline-flex   bg-primary border-purple-500 hover:border-purple-700 border cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-[#00CFCF]/90  text-white  space-x-2 rounded-full text-sm h-10 px-4 py-2 font-medium whitespace-nowrap  ">Buy Now</div>
        </div>
    </nav>
  )
}

export default Navbar