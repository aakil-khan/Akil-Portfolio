import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-semibold mb-4 text-black dark:text-white">
          Akil Khan
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Passionate for Development.
        </p>

        <div className="flex justify-center gap-6 text-2xl mb-8">

          <a
            href="https://github.com/aakil-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/akil-khan-34baa3336/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:akilk6388@gmail.com"
            className="text-black dark:text-white hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 dark:text-gray-400">
          © 2026 Akil Khan. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;