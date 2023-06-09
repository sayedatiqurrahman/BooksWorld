import React, { useContext } from 'react';
import logo from '../assets/favicon_io st logo/android-chrome-512x512.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProviders';

const Header = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className=' z-10 bg-opacity-75 bg-gray-100 xl:rounded-full MyContainer   flex justify-between items-center place-content-center '>
            <Link to='/'>
                <img className="h-16 animate-pulse " src={logo} alt="" />
            </Link>
            <div className="menu flex gap-3">
                <NavLink className='default' to="/">Home</NavLink>
                <NavLink className='default' to="books">Books</NavLink>
                <NavLink className='default' to="about">About</NavLink>
                <NavLink className='default' to="login">Login</NavLink>
                {/* className = { isActive => isActive ? 'active' : 'default'} */}
            </div>
            {
                user &&
                <button className='default'>
                    {user.displayName}
                </button>
            }
        </div>
    );
};

export default Header;