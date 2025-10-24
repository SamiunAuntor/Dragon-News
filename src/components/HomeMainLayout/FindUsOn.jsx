import React from 'react';
import facebook from "../../assets/fb.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const FindUsOn = () => {
    return (
        <section className="w-full mt-6">
            <h2 className="text-[20px] font-bold text-black mb-4">Find Us On</h2>

            <div className="w-full">
                {/* Facebook */}
                <div className="flex items-center gap-3 p-4 rounded cursor-pointer hover:bg-gray-100 transition border border-[#E7E7E7] w-full">
                    <div className="bg-[#F3F3F3] w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                        <img src={facebook} alt="Facebook" className="w-5 h-5 object-contain" />
                    </div>
                    <span className="text-black font-medium">Facebook</span>
                </div>

                {/* Twitter */}
                <div className="flex items-center gap-3 p-4 rounded cursor-pointer hover:bg-gray-100 transition border border-[#E7E7E7] w-full mt-3">
                    <div className="bg-[#F3F3F3] w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                        <img src={twitter} alt="Twitter" className="w-5 h-5 object-contain" />
                    </div>
                    <span className="text-black font-medium">Twitter</span>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-3 p-4 rounded cursor-pointer hover:bg-gray-100 transition border border-[#E7E7E7] w-full mt-3">
                    <div className="bg-[#F3F3F3] w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                        <img src={instagram} alt="Instagram" className="w-5 h-5 object-contain" />
                    </div>
                    <span className="text-black font-medium">Instagram</span>
                </div>
            </div>
        </section>
    );
};

export default FindUsOn;
