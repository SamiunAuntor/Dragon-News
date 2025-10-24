import React from 'react';
import Categories from './Categories';
import { Suspense } from 'react';


const LeftSide = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftSide;