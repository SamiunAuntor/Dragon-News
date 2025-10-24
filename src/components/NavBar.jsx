import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png";
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { successAlert } from '../alerts/Alerts';

const NavBar = () => {
    const { user: currentUser, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                successAlert('Logged out successfully!');
            })
            .catch((error) => {
                console.error('Logout error:', error);
            });
    };

    // Determine which image to show
    const profileImage = currentUser?.photoURL || user;


    return (
        <div className="w-11/12 mx-auto py-6 grid grid-cols-1 gap-3 items-center sm:grid-cols-3">

            {/* Left section - username when logged in */}
            <div className="hidden sm:block">
                {currentUser && (
                    <span className="text-lg font-medium text-black">
                        Hello {currentUser.displayName || 'User'}
                    </span>
                )}
            </div>

            {/* Middle section - nav links */}
            <div className="flex justify-center gap-5 order-1 sm:order-none">
                <NavLink className="py-3 px-5 rounded-xl" to="/">Home</NavLink>
                <NavLink className="py-3 px-5 rounded-xl" to="about">About</NavLink>
                <NavLink className="py-3 px-5 rounded-xl" to="career">Career</NavLink>
            </div>

            {/* Right section - user & login/logout */}
            <div className="flex justify-center sm:justify-end items-center gap-5 order-2 sm:order-none">
                <img src={profileImage} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full" />
                {currentUser ? (
                    <button onClick={handleLogout} className="btn btn-primary px-10">
                        Logout
                    </button>
                ) : (
                    <Link to="/auth/login" className="btn btn-primary px-10">
                        Login
                    </Link>
                )}
            </div>

        </div>
    );
};

export default NavBar;
