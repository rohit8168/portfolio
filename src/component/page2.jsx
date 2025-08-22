import React from "react";

// Import all images
import freeLogo from "../assets/Free_Logo_Mockup_4 1.png";
import stationaryMockup from "../assets/Stationery_Mockup_1 1.png";
import logo11 from "../assets/Logo11 1.png";
import icon1 from "../assets/ICON 1.png";
import bookPreview from "../assets/book preview 1.png";
import ellipse7 from "../assets/Ellipse 7.png";
import bookMockup from "../assets/book mockup 1.png";

export default function DesignShowcase() {
  return (
    <div className="flex flex-col gap-8 pt-4 bg-white ml-16">
      {/* Top Row */}
      <div className="flex gap-8 ml-[78px]">
        <div>
        <img
          className="w-96 h-72 rounded-[20px] m-4"
          src={freeLogo}
          alt="Free Logo"
        />
                <img
          className="w-96 h-52 rounded-[20px] mt-12 ml-4 "
          src={logo11}
          alt="Logo11"
        />
        
        </div>
        <img
          className="w-[748px] h-[561px] rounded-[20px]"
          src={stationaryMockup}
          alt="Stationary Mockup"
        />
      </div>

      {/* Second Row */}
      <div className="flex gap-8 ml-[100px]">
            <div>
                <img
                className="w-[647px] h-96 rounded-[20px] mt-5"
                src={icon1}
                alt="Icons"
                />
                <div
                className="w-96 h-60 origin-top-left rotate-[0deg] bg-gradient-to-l from-amber-500 to-orange-500 rounded-full mt-10 ml-20"
                style={{ backgroundImage: `url(${ellipse7})`, backgroundSize: "cover" }}
                />
            </div>
            <div>
                <img
                className="w-[501px] h-96 rounded-[20px]"
                src={bookPreview}
                alt="Book Preview"
                />
                <img
                className="w-[502px] h-96 rounded-[20px] ml-1 pt-4"
                src={bookMockup}
                alt="Book Mockup"
                />
            </div>
      </div>

      {/* Third Row */}
      <div className="flex gap-36 items-center ml-[150px]">
        {/* <div
          className="w-96 h-60 origin-top-left rotate-[16deg] bg-gradient-to-l from-amber-500 to-orange-500 rounded-full -mt-20"
          style={{ backgroundImage: `url(${ellipse7})`, backgroundSize: "cover" }}
        /> */}
        {/* <img
          className="w-[502px] h-96 rounded-[20px] ml-20"
          src={bookMockup}
          alt="Book Mockup"
        /> */}
      </div>
    </div>
  );
}