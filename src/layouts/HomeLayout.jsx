import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header';
import LatestNews from '../components/latestNews';
import NavBar from '../components/NavBar';
import LeftSide from '../components/HomeMainLayout/LeftSide';
import RightSide from '../components/HomeMainLayout/RightSide';

const HomeLayout = () => {
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

            <main className="w-11/12 mx-auto mt-8 grid grid-cols-12 gap-6">
                <aside className="col-span-12 md:col-span-3">
                    <LeftSide></LeftSide>
                </aside>

                <section className="main-content col-span-12 md:col-span-6">
                    <Outlet></Outlet>
                </section>

                <aside className="col-span-12 md:col-span-3">
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>

    );
};

export default HomeLayout;