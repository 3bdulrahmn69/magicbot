import Section from '../Components/Section';
import first from '../assets/first.png';
import second from '../assets/second.png';
import third from '../assets/third.png';

const About = () => {
  return (
    <Section id="about" title="About Magic Bot" className="w-full">
      <div className="container mx-auto px-4">
        <div>
          {/* Introduction Section */}
          <div className="w-full grid md:grid-cols-2 items-center gap-8 my-4 p-4 bg-slate-200">
            <figure className="w-full md:w-3/4 mx-auto">
              <img
                src={first}
                alt="Magic Bot program interface"
                className="w-auto rounded-lg shadow-lg"
              />
            </figure>
            <div className="w-full md:w-3/4 mx-auto text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                - What is Magic Bot?
              </h3>
              <p className="text-base md:text-lg leading-6 text-gray-700">
                Magic Bot is an advanced automation tool that allows you to
                streamline repetitive tasks, giving you more time to focus on
                other important work. Whether you need to automate clicks,
                swipes, or keystrokes, Magic Bot does the job efficiently and
                effortlessly.
              </p>
            </div>
          </div>

          {/* Why Choose Magic Bot Section */}
          <div className="w-full grid md:grid-cols-2 items-center gap-8 my-4 p-4 bg-slate-200">
            <div className="w-full md:w-3/4 mx-auto text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                - Why Choose Magic Bot?
              </h3>
              <p className="text-base md:text-lg leading-6 text-gray-700">
                1. It&apos;s incredibly easy to use
              </p>
              <p className="text-base md:text-lg leading-6 text-gray-700">
                2. Simply perform the action once, and Magic Bot will save it
                for future use
              </p>
              <p className="text-base md:text-lg leading-6 text-gray-700">
                3. You can request additional features customized for your needs
              </p>
            </div>
            <figure className="w-full md:w-3/4 mx-auto">
              <img
                src={second}
                alt="Magic Bot demonstration"
                className="w-auto rounded-lg shadow-lg"
              />
            </figure>
          </div>

          {/* Features Section */}
          <div className="w-full grid md:grid-cols-2 items-center gap-8 my-4 p-4 bg-slate-200">
            <figure className="w-full md:w-3/4 mx-auto">
              <img
                src={third}
                alt="Magic Bot performing automation"
                className="w-auto rounded-lg shadow-lg"
              />
            </figure>
            <div className="w-full md:w-3/4 mx-auto text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                - Features of Magic Bot
              </h3>
              <ul className="list-disc pl-5 text-base md:text-lg leading-6 text-gray-700">
                <li>Automated Clicks and Double Clicks</li>
                <li>Swipe gestures</li>
                <li>Type numbers directly from files</li>
                <li>Generate specific or random text</li>
                <li>Automatically type random email addresses</li>
                <li>Press and hold keys</li>
                <li>Wait for a specific key press</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <p className="text-center text-base md:text-lg my-4 py-4">
          <strong>Important:</strong> Need a custom feature? Contact us today
          and let us know your requirements!
        </p>
      </div>
    </Section>
  );
};

export default About;
