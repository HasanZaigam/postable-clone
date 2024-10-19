import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="ml-36 mr-36 flex flex-col items-center justify-center min-h-screen bg-white text-black text-center py-10 px-5 mx-4">
      <h1 className="max-text-5xl md:text-7xl font-bold mb-6 ml-36 mr-36 leading-tight py-4">
        Convert 
        
        {/* Updated the image with increased height */}
        <img 
          src="/Tweetsvg.png" 
          alt="Tweet" 
          className="inline-block align-middle w-58 h-16 ml-3" // Adjusted height to h-16
        />
        <br /> {/* Break to move 'into' to the next line */}
        into Engaging Social <br />
        <p className=" pt-2">Media Posts,Instantly!</p>
      </h1>
      <p className="text-lg md:text-xl ml-28 mr-28 font-bold text-black mt-4 mb-8 px-4">
        Paste your tweet link below to get started for FREE
      </p>
      <div className="flex flex-col items-center mb-4">
        {/* Outer Box for the Input Field */}
        <div className="mx-56 hidden w-[70vw] sm:w-full items-center gap-1 rounded-2xl border-[1.5px] border-neutral-200 bg-white pl-5 pr-3 shadow-input-container focus-within:border-gray-500 sm:flex lg:max-w-4xl">
          <input
            type="url"
            placeholder="Paste tweet link here..."
            className="flex-1 py-5 text-lg font-normal text-neutral-900 placeholder-neutral-500 focus-visible:outline-none"
          />
          <button className="relative inline-flex h-10 items-center justify-center gap-1 rounded-[8px] bg-neutral-50 px-4 text-neutral-900 hover:bg-blue-600 hover:text-white transition">
            <span className="text-sm font-medium">Paste</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
            >
              <path
                d="M4.89142 3.42871C4.0835 3.42871 3.42856 4.16552 3.42856 5.07443V12.0687C3.42856 12.9776 4.0835 13.7144 4.89142 13.7144H11.1086C11.9165 13.7144 12.5714 12.9776 12.5714 12.0687V5.07443C12.5714 4.16552 11.9165 3.42871 11.1086 3.42871"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.52382 4.57136H6.4762C6.05541 4.57136 5.71429 4.27897 5.71429 3.9183V2.93871C5.71429 2.57803 6.05541 2.28564 6.4762 2.28564H9.52382C9.94462 2.28564 10.2857 2.57803 10.2857 2.93871V3.9183C10.2857 4.27897 9.94462 4.57136 9.52382 4.57136Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5.71429 8H10.2857"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5.71429 10.2856H10.2857"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <p className="text-sm md:text-base mt-4">
          No signup, no credit card, no crap!
        </p>
      </div>

      {/* Outer Box for Sample Tweet */}
      <div className="transition duration-300 ease-in-out hover:bg-purple-100 p-4 rounded-md shadow-md max-w-lg mx-auto">
        {/* "Try Sample Tweet" Text Outside Inner Box */}
        <p className="text-lg italic font-cursive text-purple-800 mb-2 text-center">
          Try Sample Tweet
        </p>

        {/* Smaller Inner Box for the Text */}
        <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-300 mx-auto w-full">
          <img 
            src="/tweetpost.png"
            alt="Sample Tweet Post"
            className="h-auto w-full max-w-xs mx-auto object-cover rounded-md" // Use object-cover for better fit
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
