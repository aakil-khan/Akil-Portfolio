import habitImg from "../assets/projects/habit.png";
import blogImg from "../assets/projects/blog.png";
import portfolioImg from "../assets/projects/portfolio.png";

export const projects = [
  {
    title: "AI Habit Tracker",
    image: habitImg,
    description:
      "AI-powered habit tracking application with analytics and streak management.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/",
    live: "https://ai-habit-tracker-phi.vercel.app",
  },
  {
    title: "ZenFox",
    image: blogImg,
    description:
      "My Frontend Project ",
    tech: ["React.js","Tailwind","Framer Motion","React CountUp"],
    github: "https://github.com/aakil-khan/Zenfox",
    live: "https://zenfox-3zwjl0bby-akil-khan-s-projects.vercel.app/",
  },
  {
    title: "Melodify",
    image: portfolioImg,
    description:
      "Melodify a React Admin Dashboard",
    tech: ["React", "Tailwind", "Framer Motion","Recharts","Lucide React"],
    github: "https://github.com/aakil-khan/Melodify",
    live: "https://melodify-n6hiczbpw-akil-khan-s-projects.vercel.app/",
  },
];