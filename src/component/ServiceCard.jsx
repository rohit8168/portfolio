import React from "react";
import a_1 from "../assets/a_1.png";
import a_2 from "../assets/a_2.png";
import p1 from "../assets/p1.png";
import A1 from "../assets/A1.png";
import c1 from "../assets/c1.png";
import Vector1 from "../assets/Vector 1.png";

export default function Services() {
  return (
    <div
      className="w-full min-h-screen px-6 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${Vector1})` }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-black mb-6 md:mb-0">Services</h2>
          <img
            src={a_1}
            alt="book"
            className="w-64 rounded-xl shadow-lg"
          />
        </div>

        {/* Service Blocks */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Art & Illustration */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">Art & Illustration</h3>
            <p className="text-gray-800 text-sm mb-4">
              Immerse your brand in a world of creativity with our Art & Illustration service. Our skilled artists bring ideas to life through captivating visuals.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-lg">Know more</button>
          </div>
          <img
            src={a_1}
            alt="art"
            className="rounded-xl shadow-lg"
          />

          {/* Logo & Branding */}
          <img
            src={c1}
            alt="logo"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">Logo & Branding</h3>
            <p className="text-gray-800 text-sm mb-4">
              Transform your brand identity with our Custom Logo Design service.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-lg">Know more</button>
          </div>

          {/* Icon Design */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">Icon Design</h3>
            <p className="text-gray-800 text-sm mb-4">
              Elevate your digital presence with our Custom Icon Design service.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-lg">Know more</button>
          </div>
          <img
            src={p1}
            alt="icon"
            className="rounded-xl shadow-lg"
          />

          {/* UI/UX Design */}
          <img
            src={a_2}
            alt="uiux"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">UI/UX Design</h3>
            <p className="text-gray-800 text-sm mb-4">
              Embark on a journey of seamless digital experiences with our UI/UX Design service.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-lg">Know more</button>
          </div>

          {/* Book Layout */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">Book Layout</h3>
            <p className="text-gray-800 text-sm mb-4">
              Immerse readers in a visually compelling narrative with our Book Layout service.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-lg">Know more</button>
          </div>
          <img
            src={A1}
            alt="book layout"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
