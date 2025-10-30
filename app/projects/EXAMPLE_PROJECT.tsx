// EXAMPLE: Project Template Page
// Steps to usage:
// 1. Duplicate this file, rename to e.g. my-new-project.tsx
// 2. Edit the content and/or import data from portfolio-data.ts
// 3. Optional: Use ProjectModal or custom layout

import { motion } from "framer-motion";

export default function ExampleProjectPage() {
  // Replace with your own data or import from data/portfolio-data.ts
  const project = {
    title: "Example Project Title",
    description: "Detailed description of this sample project.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/example",
    liveUrl: "https://example.com",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="p-14 max-w-3xl mx-auto mt-12 glass rounded-2xl"
    >
      <h1 className="text-4xl font-bold text-gradient mb-4">{project.title}</h1>
      <p className="text-lg text-foreground/80 mb-4">{project.description}</p>
      <div className="mb-4 flex gap-2 flex-wrap">
        {project.techStack.map((t) => (
          <span key={t} className="glass px-3 py-1 rounded-full text-sm">{t}</span>
        ))}
      </div>
      <div className="flex gap-2">
        <a href={project.github} target="_blank" className="underline">Repo</a>
        <a href={project.liveUrl} target="_blank" className="underline">Live</a>
      </div>
      {/* 
        To add a new project:
        1. Copy this file and adjust fields above.
        2. (Optional) Add images/screenshots.
        3. (Optional) Import data from portfolio-data.ts for structured projects.
      */}
    </motion.div>
  );
}
