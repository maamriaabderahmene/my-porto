"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  github: string;
  liveUrl: string;
  image: string;
  problem: string;
  solution: string;
  results: string;
  challenges: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gradient">{project.title}</h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="aspect-video relative rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                    {project.image && project.image.startsWith('/') ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl">
                        {project.title[0]}
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Description</h3>
                    <p className="text-foreground/80">{project.longDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Problem</h3>
                    <p className="text-foreground/80">{project.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Solution</h3>
                    <p className="text-foreground/80">{project.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results</h3>
                    <p className="text-foreground/80">{project.results}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Challenges</h3>
                    <p className="text-foreground/80">{project.challenges}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 glass rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 glass rounded-xl hover:border-cyan-500/50 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 gradient-cyan text-white rounded-xl hover:shadow-lg transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
