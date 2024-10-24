import Section from '../Components/Section';
import { FaTelegram } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Contact Magic Bot"
      description="Have questions? Reach out to us via Telegram, and we’ll assist you as quickly as possible. Magic Bot support is just a message away."
      className="w-full py-12 bg-blue-500 text-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {/* Contact Info Section */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <p className="text-lg leading-relaxed">
              For support or inquiries about Magic Bot, we currently provide
              help through our Telegram channel and group. <br />
              Connect with us at:
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-4">
            <a
              href="https://t.me/magicbot6"
              className="bg-white text-blue-500/75 px-8 py-3 rounded-full font-bold flex items-center justify-center gap-4 w-full md:w-52 hover:scale-105 hover:text-blue-500 duration-150"
              title="Join Magic Bot Telegram Channel"
              aria-label="Join Magic Bot Telegram Channel"
            >
              <FaTelegram aria-hidden="true" className="text-xl" />
              <span>Telegram Channel</span>
            </a>
            <a
              href="https://t.me/magicbotg"
              className="bg-white text-blue-500/75 px-8 py-3 rounded-full font-bold flex items-center justify-center gap-4 w-full md:w-52 hover:scale-105 hover:text-blue-500 duration-150"
              title="Join Magic Bot Telegram Group"
              aria-label="Join Magic Bot Telegram Group"
            >
              <FaTelegram aria-hidden="true" className="text-xl" />
              <span>Telegram Group</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
