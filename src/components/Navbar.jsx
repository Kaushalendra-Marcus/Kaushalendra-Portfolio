import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Animate the menu on open
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full text-lg z-30 py-4 px-5 md:px-10 lg:px-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <div className="font-bold text-2xl tracking-wide">
            <a href="#home" className="flex items-center">
              <img 
                src="images/Kaushalendra.png" 
                alt="Logo"
                width={40}
                height={40}
                className='rounded-full w-10 h-10 object-cover border-2 border-gray-600'
              />
             
            </a>
          </div>
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="font-medium hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="md:hidden z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-opacity-95 flex flex-col items-center justify-center md:hidden text-white"
        >
          <div className="absolute top-4 left-4 flex items-center">
            <img 
              src="images/Kaushalendra.png" 
              alt="Logo"
              width={40}
              height={40}
              className='rounded-full w-10 h-10 object-cover border-2 border-gray-600'
            />
            
          </div>
          <button
            className="absolute top-6 right-6 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col gap-10 text-center text-2xl font-semibold">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;