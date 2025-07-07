import { footerIconsList } from "../constants";

const Footer = () => {
  const handleEmailClick = () => {
    const subject = "Hello Kaushalendra";
    const body = "I came across your portfolio and wanted to connect...";
    
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=yadavkausha4a5@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );
  };

  return (
    <div className="w-full flex-center flex-col md:gap-10 gap-7 bg-transparent py-10">
      <div className="flex items-center md:gap-16 gap-8 bg-transparent">
        {footerIconsList.map((icon, index) => (
          <div key={index}>
            {icon.name === "Email" ? (
              <button
                onClick={handleEmailClick}
                className="cursor-pointer hover:-translate-y-5 transition-all duration-700 group bg-transparent border-none p-0"
              >
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="md:size-10 size-8 filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </button>
            ) : (
              <a
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:-translate-y-5 transition-all duration-700 group"
              >
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="md:size-10 size-8 filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
            )}
          </div>
        ))}
      </div>
      <p className="font-regular md:text-lg text-sm text-gray-400">
        2025 © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;