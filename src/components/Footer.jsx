import { footerIconsList } from "../constants";

const Footer = () => {
  const handleEmailClick = () => {
    const subject = "Opportunity to Discuss a Role at [Your Company]";
    const body = `
    Name:
    Email:
    Message:
    `;

    window.location.href = `mailto:yadavkausha4a5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="w-full flex flex-col items-center md:gap-10 gap-7 bg-transparent py-10">
      <div className="flex items-center md:gap-16 gap-8 bg-transparent">
        {footerIconsList.map((icon, index) => (
          <div key={index} className="group transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-110">
  {icon.name === "Email" ? (
    <button
      onClick={handleEmailClick}
      className="cursor-pointer"
    >
      <img
        src={icon.icon}
        alt={icon.name}
        className="md:size-10 size-8 filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </button>
  ) : (
    <a
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <img
        src={icon.icon}
        alt={icon.name}
        className="md:size-10 size-8 filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
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
