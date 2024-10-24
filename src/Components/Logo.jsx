import logo from '../assets/icon.png';

const Logo = () => {
  return (
    <a href="/" aria-label="Magic Bot Home" className="flex items-center group">
      <img
        src={logo}
        alt="Magic Bot Logo"
        width={75}
        height={75}
        className="p-4 rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        loading="lazy"
      />
      <span className="font-black text-xl text-gray-900 ml-2 sm:text-2xl lg:text-3xl">
        Magic Bot
      </span>
    </a>
  );
};

export default Logo;
