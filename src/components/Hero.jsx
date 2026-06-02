import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
     className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-28"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[4px] text-blue-500 font-medium mb-6">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight text-black dark:text-white">
            Building modern
            <br />
            <span className="text-blue-500">
              web experiences
            </span>
            <br />
            that inspire
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            Hi, I'm Akil Khan. I build responsive,
            scalable and modern web applications using
            React, Node.js, MongoDB and the MERN Stack.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-gray-300 hover:border-blue-500 hover:text-blue-500 px-8 py-4 rounded-full transition"
            >
              Download Resume
            </a>

          </div>

          <div className="flex gap-6 mt-8 text-2xl">

            <a
              href="https://github.com/aakil-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/akil-khan-34baa3336/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Akil Khan"
            className="w-[350px] md:w-[450px] rounded-[40px] shadow-2xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;