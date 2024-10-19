"use client"; // Ensure this is at the top of your file

import React from "react";

const Works: React.FC = () => {
  // Array of image paths
  const cardImages = [
    "/Card111.png", // Replace with your actual image paths
    "/Card112.png",
    "/card113.png",
  ];

  // Function to handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const x = (deltaY / card.height) * 10; // Adjust rotation sensitivity
    const y = -(deltaX / card.width) * 10; // Adjust rotation sensitivity

    // Set CSS variables for rotation
    e.currentTarget.style.setProperty("--x" as any, `${x}deg`); // Use 'as any' to bypass type-checking
    e.currentTarget.style.setProperty("--y" as any, `${y}deg`); // Use 'as any' to bypass type-checking
  };

  // Reset rotation on mouse leave
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--x" as any, "0deg"); // Use 'as any'
    e.currentTarget.style.setProperty("--y" as any, "0deg"); // Use 'as any'
  };

  return (
    <section className="relative py-12">
      <div className="container mx-auto px-8">
        {/* Heading aligned to the left */}
        <h2 className="text-4xl font-bold mb-4 text-left">How it Works?</h2>

        {/* Card section */}
        <div className="flex justify-center gap-6">
          {cardImages.map((image, index) => (
            <div
              key={index}
              className="transform-gpu gap-4 transition-transform ease-linear will-change-transform flex w-fit min-w-72 flex-1 flex-shrink-0 flex-col rounded-[32px] bg-neutral-50/70 p-2"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: '400px',
                transform: `perspective(400px) rotateX(var(--x)) rotateY(var(--y))`,
                transitionDuration: "50ms",
                // Using 'any' type assertion to avoid TypeScript error
                "--x": "0deg" as any, // Default value for rotation
                "--y": "0deg" as any, // Default value for rotation
              }}
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-3xl bg-neutral-50">
                <img
                  src={image} // Dynamically load image from array
                  alt={`Card ${index + 1}`}
                  className="w-full rounded-3xl transition-transform"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
