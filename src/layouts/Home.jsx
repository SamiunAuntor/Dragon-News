import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header';
import LatestNews from '../components/latestNews';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto mt-[30px]'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main>
                <section className="left-nav-bar">

                </section>
                <section className="main-content">
                    <Outlet></Outlet>
                </section>
                <section className="right-nav-bar">
                    
                </section>
            </main>
        </div>
    );
};

export default Home;