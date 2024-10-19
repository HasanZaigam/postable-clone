import React from 'react';

const Body: React.FC = () => {
  return (
    <section
      className="relative mx-auto mb-12 w-fit max-w-full rounded-[16px] bg-cover bg-top pt-8 sm:mb-16 sm:rounded-[32px] md:mb-24 md:rounded-[64px] md:px-12 lg:px-24 lg:pt-12"
      style={{
        backgroundImage: 'url("/section-background.webp")', // Optional: keep your background
        backgroundSize: '100% 300%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Centered image with padding */}
      <div className="flex justify-center items-center p-4">
        <img 
          src="/Body.png" // Replace with the actual path to your image
          alt="Your Image Description"
          className="max-w-full rounded-[68px] shadow-lg" // More rounded corners
          style={{ width: '960px', height: '700px', }} // Set width and height
        />
      </div>
    </section>
  );
};

export default Body;
