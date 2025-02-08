import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear(); // Removed the extra space

  return (
    <div className="bg-black text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <span className="text-2xl font-bold text-gray-300">Gopinath G</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mt-4 sm:mt-0">
          <p className="text-gray-600 sm:mr-8 text-sm sm:text-base">
            gopiguna0210@gmail.com <br /> Copyrights © {currentYear} Gopinath
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://www.linkedin.com/in/gopi-nath-1519ba207/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-400 hover:text-gray-200 cursor-pointer" size={24} />
            </a>
            <a
              href="https://github.com/gopinathgunasekaran02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-400 hover:text-gray-200 cursor-pointer" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
