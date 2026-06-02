import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 80 },
  { name: "JavaScript", value: 85 },
  { name: "React", value: 95 },
  { name: "Tailwind CSS", value: 92 },
];

const backendSkills = [
  { name: "Node.js", value: 90 },
  { name: "Express.js", value: 88 },
  { name: "MongoDB", value: 85 },
  { name: "REST APIs", value: 92 },
  { name: "JWT", value: 84 },
];

const SkillCard = ({ title, skills }) => (
  <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm">
    <h3 className="text-3xl font-semibold mb-8 text-black dark:text-white">
      {title}
    </h3>

    {skills.map((skill) => (
      <div key={skill.name} className="mb-6">
        <div className="flex justify-between mb-2 text-black dark:text-white">
          <span>{skill.name}</span>
          <span>{skill.value}%</span>
        </div>

        <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full bg-blue-500 rounded-full"
          />
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center uppercase tracking-[4px] text-gray-500 dark:text-gray-400 mb-4">
          Technical Expertise
        </p>

        <h2 className="text-center text-5xl md:text-6xl font-light mb-6 text-black dark:text-white">
          Skills & <span className="text-blue-500">Technologies</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
          A comprehensive toolkit for building modern,
          scalable web applications from concept to deployment.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
        </div>

      </div>
    </section>
  );
};

export default Skills;