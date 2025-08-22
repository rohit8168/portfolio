import React from "react";
import wavyBg from "../assets/wavybg.png";
import ellipse from "../assets/Ellipse 12.png";

export default function HeroSection() {
  return (
    <div
      className="w-full h-[799.50px] relative"
      style={{
        backgroundImage: `url(${wavyBg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text Section */}
      <div className="absolute top-[100px] left-[100px]">
        <div className="justify-start text-zinc-800 text-8xl font-bold font-['Quicksand'] leading-[100px]">
          PAY ONLY IF YOU <br /> ARE SATISFIED
        </div>
        <p className="text-zinc-800 text-lg max-w-[500px] mt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {/* About Us Button */}
          <div className="w-48 h-12 relative cursor-pointer">
            <div className="w-48 h-12 left-0 top-0 absolute bg-zinc-800 rounded-[50px]" />
            <div className="left-[47px] top-[8px] absolute justify-start text-white text-2xl font-bold font-['Quicksand']">
              About Us
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="w-48 h-12 relative cursor-pointer">
            <div className="w-48 h-12 left-0 top-0 absolute bg-zinc-800 rounded-[50px]" />
            <div className="left-[18px] top-[9px] absolute justify-start text-white text-2xl font-bold font-['Quicksand']">
              Contact Us
            </div>
            <div className="w-7 h-7 left-[156px] top-[10px] absolute bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Rectangle on Right */}
      <div className="absolute right-[100px] top-[100px] w-96 h-[500px] bg-white rounded-[20px]" />

      {/* Ellipse Shape */}
      <img
        src={ellipse}
        alt="Ellipse"
        className="absolute bottom-[-80px] right-[500px] w-56 h-48 origin-top-left rotate-[330deg]"
      />

      {/* Projects Text */}
      <div className="absolute bottom-[-2px] left-[100px] text-zinc-800 text-9xl font-bold font-['Quicksand'] leading-[100px]">
        Projects
      </div>
    </div>
  );
}
