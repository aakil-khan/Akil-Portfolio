const techs = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Webpack",
  "Vite",
  "JWT",
  "Tailwind",
];

const TechStack = () => {
  return (
    <section
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-center text-3xl font-semibold mb-10 text-black dark:text-white">
          Also Working With
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 border border-gray-300 dark:border-slate-600 rounded-full text-black dark:text-white bg-white dark:bg-slate-800 hover:bg-blue-500 hover:text-white transition"
            >
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;