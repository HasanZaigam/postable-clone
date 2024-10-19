import React from 'react';

const Cards = () => {
  return (
    <div className="p-6">
      <div className="overflow-hidden">
        {/* Image section */}
        <img
          src="/textCard.png" // Path from the 'public' folder
          alt="Optimization"
          className="w-full h-auto"
        />
      </div>
      <div>
        <img 
         src="/big1.png"
         alt = "Cards"
         className='w-full mt-10 mb-10 h-auto'
        />
      </div>
      <div className="relative max-w-4xl ml-16 mb-10 text-balance w-full h-auto">
      <img 
        src="/bigImage text.png" // Adjusted image name based on your file structure
        alt="Cards"
        className="w-full h-auto"
        style={{ fontFamily: 'Aspekta' }} // Applying custom font family
      />

       {/* Button section */}
        <div className="mt-6 ml-10"> {/* Added margin top for spacing */}
        <a 
          className="relative inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-neutral-900 px-4 py-2.5 text-md font-semibold leading-6 tracking-[-0.3px] text-white transition-colors hover:bg-neutral-800 md:px-6 md:py-3 md:text-lg" 
          href="#input"
        >
          Get Started for FREE 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
        </div>
   
    </div>
  );
};

export default Cards;
