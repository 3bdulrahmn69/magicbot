import Section from '../Components/Section';
import logo from '../assets/icon.png';

const Download = () => {
  return (
    <Section
      id="download"
      title="Download Magic Bot"
      description="Download Magic Bot from the platform of your choice. Click the link below to start your download and automate your tasks effortlessly."
      desClass="text-gray-600"
      className="w-full pt-2 pb-8 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Magic Bot official logo"
            className="w-36 md:w-48 mx-auto"
            loading="lazy"
          />
        </div>

        {/* Download Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <a
              href="https://www.mediafire.com/file/slwudn6kttg6uos/magicBot.rar/file"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-center w-64"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Magic Bot from Mediafire"
            >
              Download Magic Bot from Mediafire
            </a>
          </div>
        </div>
      </div>

      {/* Additional Call to Action */}
      <div className="text-center mt-6 px-4 md:px-0">
        <p className="text-gray-600 text-lg">
          Need help with the installation or have any questions? Feel free to{' '}
          <a href="#contact" className="text-blue-600 hover:underline">
            contact us
          </a>
          .
        </p>
      </div>
    </Section>
  );
};

export default Download;
