import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center uppercase tracking-[4px] text-gray-500 dark:text-gray-400 mb-4">
          Featured Work
        </p>

        <h2 className="text-center text-5xl md:text-6xl font-light mb-6 text-black dark:text-white">
          Recent <span className="text-blue-500">Projects</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
          A collection of projects that showcase my expertise
          in building modern web applications.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="backdrop-blur-lg bg-white/70 dark:bg-slate-800 border border-white/40 dark:border-slate-700 rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-slate-700 dark:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 dark:border-slate-600 text-black dark:text-white px-5 py-2 rounded-full hover:border-blue-500 transition"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;