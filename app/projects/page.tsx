"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio-data";
import { ProjectModal } from "@/components/ProjectModal";
import { ExternalLink, Github, Filter } from "lucide-react";
import Image from "next/image";
import { TechIcon } from "@/components/TechIcon";

const categories = ["All", "Web", "Mobile", "Desktop", "Robotics", "3D/Design"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Showcasing my work in web development, mobile apps, robotics, and more
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-12 justify-center"
        >
          <Filter className="w-5 h-5 text-foreground/70" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "gradient-cyan text-white"
                  : "glass text-foreground/70 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover-3d cursor-pointer group"
              onClick={() => openModal(project)}
            >
              <div className="aspect-video relative bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                {project.image && project.image.startsWith('/') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    {project.title[0]}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 glass rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 glass rounded-full inline-flex items-center gap-1">
                      <TechIcon name={tech} className="w-3.5 h-3.5" />
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 glass rounded-full">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-sm font-semibold text-gradient hover:underline">
                    Read More →
                  </button>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 glass rounded-lg hover:border-cyan-500/50 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 glass rounded-lg hover:border-cyan-500/50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-foreground/70">No projects found in this category.</p>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
