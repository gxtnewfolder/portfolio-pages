import React, { useEffect, useState } from "react";
import Kmutt from "../assets/kmutt.png";
import Inc from "../assets/inc1.png";
import Skt from "../assets/skt.png";

const Education = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Kmutt, Inc];
  const [isImageVisible, setIsImageVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageVisible(false); // Start the fade-out transition
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsImageVisible(true); // Start the fade-in transition
      }, 1250); // Wait 500ms for the fade-out transition to complete

      // Note: You can adjust the duration of the fade-in and fade-out transitions by changing the value (e.g., 500ms in this case).
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div name="education" className="w-full h-[110vh] bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full px-5">
        <div className="max-w-[1024px] w-full">
          <div className="sm:text-left pb-6 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Education
            </p>
          </div>
        </div>
        {/* Container */}
        <div className="max-w-[1024px] w-full grid sm:grid-rows-2 gap-4 px-4">
          {/* KMUTT */}
          <div className="md:flex items-center hover:scale-105 duration-500">
            <div
              className={`basis-40 mx-8 w-36 h-36 flex items-center ${
                isImageVisible
                  ? "image-switcher-container transition-in"
                  : "image-switcher-container transition-out"
              }`}
            >
              <img
                className=""
                src={images[currentImageIndex]}
                alt="`Image ${currentImageIndex + 1}`"
              />
            </div>
            <div className="max-w-[750px] m-6 flex flex-col items-start justify-center">
              <div className="sm:text-2xl">
                <span>Bachelor of Engineering</span>
                <span className="mx-2 opacity-50">·</span>
                <span>2021 - Present</span>
              </div>
              <div className="sm:text-xl mt-2">
                <div className="opacity-75">
                  Major in Automation Engineering, International Program
                </div>
                <div className="opacity-50">
                  at King Mongkut's University of Technology Thonburi, Thailand
                </div>
              </div>
              <div className="flex flex-wrap mt-2 p-1">
                <a
                  className="mt-1 mr-1 text-sm cursor-pointer transition duration-500 opacity-50 border-solid border p-1 hover:opacity-100"
                  href="https://www.kmutt.ac.th/en/home/"
                >
                  University Website
                </a>
                <a
                  className="mt-1 mr-1 text-sm cursor-pointer transition opacity-50 border-solid border p-1 hover:opacity-100"
                  href="https://inc.kmutt.ac.th/automation/page/en"
                >
                  Program Website (Automation)
                </a>
              </div>
            </div>
          </div>
          {/* SKT */}
          <div className="md:flex items-center hover:scale-105 duration-500">
            <div
              className={`basis-40 mx-8 w-36 h-36 ${
                isImageVisible
                  ? "image-switcher-container transition-in"
                  : "image-switcher-container transition-out"
              }`}
            >
              <img className="" src={Skt} alt="SKT" />
            </div>
            <div className="max-w-[750px] m-6 flex flex-col items-start justify-center">
              <div className="sm:text-2xl">
                <span>High School</span>
                <span className="mx-2 opacity-50">·</span>
                <span>2018 - 2021</span>
              </div>
              <div className="sm:text-xl mt-2">
                <div className="opacity-75">
                  Science - Mathematics Program, English Program
                </div>
                <div className="opacity-50">
                  at Suankularb Wittayalai Thonburi School (SKT), Thailand
                </div>
              </div>
              <div className="flex flex-wrap mt-2 p-1">
                <a
                  className="mt-1 mr-1 text-sm cursor-pointer transition opacity-50 border-solid border p-1 hover:opacity-100"
                  href="https://www.sk-thonburi.ac.th/"
                >
                  School Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
