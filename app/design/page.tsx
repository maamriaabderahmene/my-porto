"use client";

import { motion } from "framer-motion";
import { designTools } from "@/data/portfolio-data";
import { Palette, Film, Box, PenTool } from "lucide-react";

const categories = [
  {
    name: "3D Modeling",
    tools: ["Blender", "SketchUp", "SolidWorks", "AutoCAD"],
    icon: Box,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Graphic Design",
    tools: ["Photoshop", "Illustrator", "Figma", "Canva"],
    icon: Palette,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Video Editing",
    tools: ["Premiere Pro", "After Effects", "Filmora"],
    icon: Film,
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "UI/UX Design",
    tools: ["Figma", "Illustrator", "Photoshop"],
    icon: PenTool,
    color: "from-green-500 to-emerald-600",
  },
];

export default function DesignPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Design & 3D Skills</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Creative tools and design expertise
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8 hover-3d"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 glass rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">All Design Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {designTools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-xl p-4 text-center hover-3d"
              >
                <div className="font-semibold">{tool}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">3D Renders & Designs</h2>
          <p className="text-foreground/70 mb-6">
            Gallery of 3D models, renders, UI mockups, and design work coming soon...
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square glass rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center"
              >
                <span className="text-4xl">🎨</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
