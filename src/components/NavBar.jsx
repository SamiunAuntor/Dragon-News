import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"

const NavBar = () => {
    return (
        <div className='w-11/12 mx-auto my-6 grid grid-cols-3 items-center'>
            <div></div> {/* left empty */}
            <div className='flex justify-center gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="career">Career</NavLink>
            </div>
            <div className='flex justify-end items-center gap-5'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>

    );
};

export default NavBar;