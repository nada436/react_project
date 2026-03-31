import React from 'react';
import logo from '../assets/logo.png'
import loupe from '../assets/loupe.png'

const Header = ({ handel_search }) => {
    return (
        <>
        <div className='flex w-full items-center justify-around ' >
     <img src={logo} className='w-48' alt="logo" />
     <div>
    <img src={loupe} className="w-5 absolute top-8 " />
     <input type="text" name="search_inpute" className='rounded-xl bg-mauve-100 outline-none  px-8 py-1 w-56'  placeholder='Search...' onChange={(e)=>{handel_search(e)}}/>
     </div>
     </div>
        </>
    );
}

export default Header;