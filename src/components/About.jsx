import { FaHeart, FaLaptopCode, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center uppercase tracking-[4px] text-gray-500 dark:text-gray-400 mb-4">
          About Me
        </p>

        <h2 className="text-center text-5xl md:text-6xl font-light mb-16 text-black dark:text-white">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-3xl p-10 shadow-lg">

            <h3 className="text-3xl font-semibold mb-6 text-black dark:text-white">
              My Mission
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              I am a passionate Full Stack Developer focused on building
              modern, scalable, and user-friendly web applications.
              I enjoy transforming ideas into real products using
              React, Node.js, MongoDB, and modern technologies.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mt-6">
              My goal is to create meaningful digital experiences
              that solve real-world problems while maintaining
              beautiful and intuitive user interfaces.
            </p>

          </div>

          {/* What I Love */}
          <div className="backdrop-blur-lg bg-white/70 dark:bg-slate-800 border border-white/40 dark:border-slate-700 rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-semibold mb-8 text-black dark:text-white">
              What I Love Building
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">
                <FaHeart className="text-blue-500 text-2xl mt-1" />

                <div>
                  <h4 className="font-semibold text-xl text-black dark:text-white">
                    User Experience
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    Clean, intuitive interfaces users enjoy using.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaLaptopCode className="text-blue-500 text-2xl mt-1" />

                <div>
                  <h4 className="font-semibold text-xl text-black dark:text-white">
                    Full Stack Applications
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    Modern scalable applications using MERN stack.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaRocket className="text-blue-500 text-2xl mt-1" />

                <div>
                  <h4 className="font-semibold text-xl text-black dark:text-white">
                    Performance
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    Fast, optimized, and responsive web experiences.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;