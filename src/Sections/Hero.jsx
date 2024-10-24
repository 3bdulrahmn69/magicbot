import DownloadBtn from '../Components/DownloadBtn';
import Section from '../Components/Section';
import background from '../assets/robot.jpg';

const Hero = () => {
  return (
    <Section
      id="home"
      className="w-full h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-around px-4 lg:px-16 mt-8 mb-28 sm:mb-8 md:my-0"
    >
      {/* Left Side Image */}
      <div
        className="w-4/5 md:w-1/5 h-60 md:h-4/5 rounded-full shadow-lg mb-8 md:mb-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full h-full bg-black/50 rounded-full flex items-center justify-center">
          <p className="bg-white/70 px-6 py-3 rounded-full text-center">
            <span className="text-gray-900 font-extrabold text-lg">
              Magic Bot
            </span>
            <br />
            <span className="text-gray-700 text-sm">
              Automate your tasks effortlessly
            </span>
          </p>
        </div>
      </div>

      {/* Centered Box */}
      <div className="w-4/5 md:w-1/5 h-40 md:h-4/5 bg-blue-500 rounded-md shadow-lg flex items-center justify-center mb-8 md:mb-0">
        <p className="text-white font-bold text-center text-sm md:text-base lg:text-lg">
          Simplify complex tasks <br /> with{' '}
          <span className="text-2xl">Magic Bot</span>
        </p>
      </div>

      {/* Right Side Content */}
      <div className="w-4/5 md:w-2/5 h-auto md:h-4/5 flex flex-col gap-6">
        {/* Feature Box 1 */}
        <div className="w-full h-auto md:h-1/2 bg-purple-700 text-white rounded-md shadow-lg flex items-center justify-center p-6">
          <p className="text-center text-sm md:text-lg">
            Auto-click, drag, hold, and insert with precision using{' '}
            <span className="font-extrabold">Magic Bot</span> — the ultimate
            automation tool for power users.
          </p>
        </div>

        {/* Feature Box 2 */}
        <div className="w-full h-auto md:h-1/2 rounded-md bg-white/60 shadow-md backdrop-blur-md p-6 glass">
          <p className="text-gray-800 text-xs lg:text-base leading-relaxed">
            <span className="font-bold">Magic Bot</span> is more than just a
            clicker. It’s a multi-function automation tool that gives you full
            control over repetitive tasks. Whether you need to auto-click,
            insert text, hold, or drag items, Magic Bot lets you streamline your
            workflow and get more done in less time.
          </p>
          <div className="mt-4 md:mt-8">
            <DownloadBtn />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
