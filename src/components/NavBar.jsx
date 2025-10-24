import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png";

const NavBar = () => {
    return (
        <div className="w-11/12 mx-auto my-6 grid grid-cols-1 gap-3 items-center sm:grid-cols-3">

            {/* Left empty - hidden on mobile */}
            <div className="hidden sm:block"></div>

            {/* Middle section - nav links */}
            <div className="flex justify-center gap-5 order-1 sm:order-none">
                <NavLink className="py-3 px-5 rounded-xl" to="/">Home</NavLink>
                <NavLink className="py-3 px-5 rounded-xl" to="about">About</NavLink>
                <NavLink className="py-3 px-5 rounded-xl" to="career">Career</NavLink>
            </div>

            {/* Right section - user & login */}
            <div className="flex justify-center sm:justify-end items-center gap-5 order-2 sm:order-none">
                <img src={user} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full" />
                <button className="btn btn-primary px-10">Login</button>
            </div>

        </div>
    );
};

export default NavBar;
