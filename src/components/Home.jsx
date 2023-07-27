import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Arnat Ngawsuwan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a 3rd years student.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm currently a third-year undergraduate student of Automation
          Engineering (International Program) at KMUTT, Thailand, with a keen interest in Data Technology (e.g. Data Engineering, Data Science), and Industrial Automation. In my free time, I love to improve my programming skills and learn new things.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
