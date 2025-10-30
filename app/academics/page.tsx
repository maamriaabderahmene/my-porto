"use client";

import { motion } from "framer-motion";
import { academics } from "@/data/portfolio-data";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Academic Journey</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Cursus Académique - My educational path and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 gradient-cyan opacity-30 hidden md:block" />

          <div className="space-y-12">
            {academics.map((academic, index) => (
              <motion.div
                key={academic.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-16 h-16 gradient-cyan rounded-full flex items-center justify-center relative z-10">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass rounded-2xl p-6 md:p-8 hover-3d">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{academic.title}</h3>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{academic.year}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {academic.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-gradient flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Baccalaureate Score", value: "17.39/20", sub: "Experimental Sciences" },
              { label: "Baccalaureate Score", value: "16.19/20", sub: "Mathematics" },
              { label: "National Competition", value: "1st Place", sub: "Aklam Biladi" },
            ].map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">{highlight.value}</div>
                <div className="text-sm text-foreground/70">{highlight.label}</div>
                <div className="text-xs text-foreground/50 mt-1">{highlight.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
