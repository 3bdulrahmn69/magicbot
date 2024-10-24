const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-600 text-white flex flex-col items-center p-6">
      <div className="w-full flex flex-col md:flex-row justify-around mb-4">
        {/* Links Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl mt-4 mb-2 font-semibold">Links</h2>
          <ul className="space-y-1">
            <li>
              <a
                href="#home"
                aria-label="Go to Home section"
                className="hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                aria-label="Go to About section"
                className="hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                aria-label="Go to Contact section"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#download"
                aria-label="Go to Download section"
                className="hover:underline"
              >
                Download
              </a>
            </li>
          </ul>
        </div>

        {/* Telegram Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl mt-4 mb-2 font-semibold">Telegram</h2>
          <ul className="space-y-1">
            <li>
              <a
                href="https://t.me/magicbot6"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="Visit Magic Bot Channel on Telegram"
                className="hover:underline"
              >
                Channel
              </a>
            </li>
            <li>
              <a
                href="https://t.me/magicbotg"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="Join Magic Bot Group on Telegram"
                className="hover:underline"
              >
                Group
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center">&copy; {date} - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
