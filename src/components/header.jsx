import React from 'react';
import logo from '../assets/logo.png'
import loupe from '../assets/loupe.png'

const Header = () => {
    return (
        <>
        <div className='flex w-full items-center justify-around ' >
     <img src={logo} className='w-48' alt="logo" />
     <div>
    <img src={loupe} className="w-5 absolute top-8 " />
     <input type="text" className='rounded-xl bg-mauve-100 outline-none  px-8 py-1 w-56'  placeholder='Search...'/>
     </div>
     </div>
        </>
    );
}

export default Header;