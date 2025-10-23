import React from 'react';
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="mt-12 text-center mx-auto w-fit px-4">
            <div className="flex justify-center">
                <img
                    className="w-[300px] sm:w-[472px] md:w-[472px] lg:w-[472px]"
                    src={logo}
                    alt=""
                />
            </div>
            <h3 className="text-accent text-lg sm:text-xl mt-5">
                Journalism Without Fear or Favour
            </h3>
            <p className="text-accent text-base sm:text-[20px] mt-3 font-medium">
                {format(new Date(), "EEEE, MMMM dd, yyyy")}
            </p>
        </div>


    );
};

export default Header;