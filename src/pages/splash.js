import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Splash() {
  // Define your slides data
  const navigate = useNavigate();

  const slides = [
    {
      img: "assets/images/onboarding-slider-img-1.png",
      title: "Top Web3 Crypto Solution Today",
      description:
        "Discover the leading Web3 crypto solution for secure and efficient transactions.",
    },
    {
      img: "assets/images/onboarding-slider-img-2.png",
      title: "Premier Choice Crypto Web3 App",
      description:
        "Explore our premier choice crypto web3 app for seamless transactions and security.",
    },
    {
      img: "assets/images/onboarding-slider-img-3.png",
      title: "Trending Crypto Made Simple Now",
      description:
        "Experience streamlined crypto trading with our intuitive platform. Start trading effortlessly today!",
    },
  ];

  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide or redirect if on last slide
  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      // Redirect to register page after last slide
      navigate('/register');
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-center items-center text-white">
      {/* Background circle */}
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="relative z-20 w-full px-6 py-8">
        {/* Header with back button */}
        <div className="flex justify-start items-center pb-8 mr-8">
          <a
            href="home.html"
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="ph-bold ph-caret-left"></i>
          </a>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Splash</h1>
          </div>
        </div>

        {/* Slide Content */}
        <div className="p-6">
          <img
            src={slides[currentSlide].img}
            alt={`Slide ${currentSlide + 1}`}
            className="mx-auto"
          />
          <div className="pt-8">
            <p className="text-3xl font-bold">
              {slides[currentSlide].title}
            </p>
            <p className="text-n70 text-sm pt-5">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Navigation & Pagination */}
        <div className="flex justify-between items-center w-full px-6 mt-8">
          {/* Pagination dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-g300" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
          {/* Next button */}
          <div className="nextButton">
            <button
              onClick={nextSlide}
              className="text-white flex justify-center items-center bg-g300 rounded-full text-2xl p-4"
            >
              <i className="ph ph-caret-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
