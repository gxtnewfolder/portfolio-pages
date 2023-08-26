import React, { useState, useEffect } from "react";
import Inc272_1 from "../assets/works/1_1.png";
import Inc272_2 from "../assets/works/1_2.png";
import Inc272_3 from "../assets/works/1_3.png";
import Inc272_4 from "../assets/works/1_4.png";

const Work = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Inc272_1, Inc272_2, Inc272_3, Inc272_4];
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
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1024px] mx-auto p-5 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">// Check out some of my recent works</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${images[currentImageIndex]}) ` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ${
              isImageVisible
                ? "image-switcher-container"
                : "image-switcher-container"
            }`}
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                 Proteus 8 and NodeRed
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>   
        </div>
      </div>
    </div>
  );
};

export default Work;
