import React, { useState, useEffect } from 'react';
import { Clipboard } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [tweetLink, setTweetLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setTweetLink(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <header className="my-4 flex w-full max-w-6xl flex-col">
      <nav 
        className={`fixed left-1/2 top-8 z-20 flex items-center justify-between bg-neutral-900 shadow-lg transition-all duration-300 ease-in-out rounded-full ${
          isScrolled ? 'w-3/5 px-6 py-3' : 'w-fit px-5 py-3'
        }`} 
        style={{ transform: 'translateX(-50%)' }}
      >
        <div className="flex items-center w-full space-x-4">
          {/* Logo and Icon */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="overflow-hidden" style={{ width: "36px", height: "36px" }}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-10"
              >
                <path
                  d="M22.1513 5.10429C20.7173 2.76204 18.5184 0.945608 15.6026 0.324196C11.6829 -0.584022 7.18959 0.419798 4.27373 3.28785C1.74028 5.7735 0.83206 9.16737 0.927661 12.7046C1.02326 15.2859 1.59687 18.1539 2.55289 20.544C3.17431 22.0258 4.70394 24.4159 6.61597 23.9379C8.19341 23.5555 8.52801 21.022 9.96204 21.022C12.7823 21.022 15.6982 20.9264 18.375 20.0182C21.2909 19.0144 23.0117 16.9589 23.6331 13.8041C24.2545 10.7926 23.6809 7.63774 22.1513 5.10429Z"
                  fill="#FAF9F9"
                />
              </svg>
            </div>
            <p className="text-white text-2xl font-semibold">Postable</p>
          </div>

          {/* Tweet Link Input and Paste Button */}
          <div className={`flex items-center space-x-2 ${isScrolled ? 'flex-grow' : 'hidden'}`}>
            <div className="relative flex-grow">
              <input
                type="text"
                value={tweetLink}
                onChange={(e) => setTweetLink(e.target.value)}
                placeholder="Enter tweet link"
                className="w-full bg-neutral-800 text-white px-4 py-2 rounded-full pr-12"
              />
              <button 
                onClick={handlePaste} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
              >
                <Clipboard size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;