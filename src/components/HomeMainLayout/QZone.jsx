import React from 'react';
import playground from "../../assets/playground.png";
import swimming from "../../assets/swimming.png";
import classImg from "../../assets/class.png";

const QZone = () => {
    return (
        <section className="bg-[#F3F3F3] w-full p-4 sm:p-6 mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-left">Q-Zone</h2>

            <div className="flex flex-col gap-6">
                <img src={swimming} alt="Swimming" className="w-full rounded-lg" />
                <img src={classImg} alt="Class" className="w-full rounded-lg" />
                <img src={playground} alt="Playground" className="w-full rounded-lg" />
            </div>
        </section>
    );
};

export default QZone;
