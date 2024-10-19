import React from 'react';

const Features = () => {
  return (
    <div className="mt-12">
      {/* Heading */}
      <div>
        <p className="ml-24 text-black text-3xl font-bold">Our Features</p>
      </div>

      {/* Scrollable row with images */}
      <div className="relative flex w-full gap-4 overflow-scroll px-4 pb-4 pt-3 xl:ps-0 xl:pt-4 dragging" style={{ paddingLeft: '139px' }}>
        <div className="min-w-72 max-w-fit select-none md:min-w-96">
          <img
            src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-1_zepkcz.webp"
            alt="Feature 1"
            draggable="false"
            className="rounded-xl" // Rounded corners
          />
        </div>
        <div className="min-w-72 max-w-fit select-none md:min-w-96">
          <img
            src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-2_xfgklf.webp"
            alt="Feature 2"
            draggable="false"
            className="rounded-xl"
          />
        </div>
        <div className="min-w-72 max-w-fit select-none md:min-w-96">
          <img
            src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-3_ouj8od.webp"
            alt="Feature 3"
            draggable="false"
            className="rounded-xl"
          />
        </div>
        <div className="min-w-72 max-w-fit select-none md:min-w-96">
          <img
            src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-4_xaqpz1.webp"
            alt="Feature 4"
            draggable="false"
            className="rounded-xl"
          />
        </div>
        <div className="min-w-72 max-w-fit select-none md:min-w-96">
          <img
            src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-5_ftjick.webp"
            alt="Feature 5"
            draggable="false"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
