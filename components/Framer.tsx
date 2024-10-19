import Image from 'next/image';

const Framer = () => {
  return (
    <section className=" overflow-none bg-black rounded-[50px] p-8 md:p-16 flex flex-col items-center justify-center">
      {/* Heading */}
      <h3 className="mb-4 text-4xl font-bold tracking-tight text-white md:mb-6 md:text-[60px] md:font-extrabold md:tracking-tight">
        One-Click to Create
      </h3>

      {/* Description */}
      <p className="mb-6 max-w-md text-center text-md font-normal leading-relaxed text-neutral-400 md:max-w-2xl md:text-lg">
        Postable is built with simplicity and fun at its core. No design skills? No problem. We handle the heavy lifting so you can effortlessly create stunning posts.
      </p>

      {/* Button */}
      <a
        className="relative my-8 inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold leading-6 tracking-[-0.3px] text-white transition-colors hover:bg-neutral-800 md:px-6 md:py-3 md:text-lg"
        href="#input"
      >
        Get Started for FREE
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right size-4"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>

      {/* Centered Image */}
      <div className="flex justify-center">
        <Image
          src="/app-screenshot_uficxp.webp" // Update with your image path
          alt="Framer Preview"
          width={1280}  // Adjust width as needed
          height={640} // Adjust height as needed
          className="rounded-[30px] shadow-lg"
        />
      </div>
    </section>
  );
};

export default Framer;


