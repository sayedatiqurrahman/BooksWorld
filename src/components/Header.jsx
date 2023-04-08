import React from 'react';
import logo from '../assets/favicon_io st logo/android-chrome-512x512.png'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className=' z-10 bg-opacity-75 bg-gray-100 xl:rounded-full MyContainer   flex justify-between items-center place-content-center '>
            <Link to='/'>
                <img className="h-16 animate-pulse " src={logo} alt="" />
            </Link>
            <div className="menu flex gap-3">
                <NavLink className='default' to="/">Home</NavLink>
                <NavLink className='default' to="books">Books</NavLink>
                <NavLink className='default' to="about">About</NavLink>
                {/* className = { isActice => isActice ? 'active' : 'default'} */}
            </div>
        </div>
    );
};

export default Header;