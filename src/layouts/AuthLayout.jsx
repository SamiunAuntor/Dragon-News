import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet>
                    
                </Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;