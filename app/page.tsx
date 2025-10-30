"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Bot, Award, GraduationCap } from "lucide-react";
import { personalInfo, skills, academics } from "@/data/portfolio-data";
import { useEffect, useRef, useState } from "react";
import SkillChart from "@/components/SkillChart";
import { TechIcon } from "@/components/TechIcon";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-cyan-500/10 animate-pulse" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 gradient-cyan text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  View Projects <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 glass text-foreground rounded-2xl font-semibold hover:border-cyan-500/50 transition-all"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-8 text-center"
            {...fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.div
            className="glass rounded-2xl p-8 space-y-4 text-lg text-foreground/80"
            {...fadeInUp}
          >
            <p>
              I'm a passionate Full-Stack Developer, robotics enthusiast, and designer with a deep
              interest in technology, software engineering, and innovation. Currently pursuing my
              studies at ENSTA (Higher National School of Advanced Technologies), where I also serve
              as <strong>President of the Google Developer Student Club (GDSC)</strong> and{" "}
              <strong>Delegate of the Computer Engineering Section</strong>.
            </p>
            <p>
              I founded <strong>AD-New Tech</strong>, a growing business focused on developing smart
              digital and technological solutions, and I also run <strong>Cy-Mos</strong>, a creative
              e-commerce clothing brand that merges technology with modern street fashion.
            </p>
            <p>
              My journey combines technical mastery, creativity, and leadership - from coding scalable
              web applications to organizing robotics competitions and building IoT systems that solve
              real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-cyan-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            {...fadeInUp}
          >
            Skills & Technologies
          </motion.h2>
          <div className="mb-10 flex flex-col items-center">
            <SkillChart />
            <div className="text-sm text-foreground/60 mt-2 text-center max-w-xl">
              <strong>Proficiency chart:</strong> Update your skills and scores in <code>data/portfolio-data.ts</code> and this chart will update. Copy the <code>SkillChart</code> component anywhere as needed—usage is fully customizable!
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover-3d cursor-pointer"
              >
                <div className="flex items-center justify-center mb-2">
                  <TechIcon name={skill.name} className="w-7 h-7 text-gradient" />
                </div>
                <div className="font-semibold">{skill.name}</div>
                <div className="text-sm text-foreground/60 mt-1">{skill.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            {...fadeInUp}
          >
            Academic Journey
          </motion.h2>
          <div className="space-y-8">
            {academics.slice(0, 3).map((academic, index) => (
              <motion.div
                key={academic.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass rounded-2xl p-6 hover-3d"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 gradient-cyan rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{academic.title}</h3>
                      <span className="text-sm text-foreground/60">{academic.year}</span>
                    </div>
                    <ul className="space-y-1 text-foreground/80">
                      {academic.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 text-gradient font-semibold hover:gap-4 transition-all"
            >
              View Full Academic Timeline <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-violet-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, label: "Projects", value: "10+", href: "/projects" },
              { icon: Bot, label: "Robotics Competitions", value: "5+", href: "/competitions" },
              { icon: Award, label: "Achievements", value: "15+", href: "/academics" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass rounded-2xl p-8 text-center hover-3d"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-gradient" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-foreground/70">{stat.label}</div>
                <Link
                  href={stat.href}
                  className="mt-4 inline-block text-sm text-gradient hover:underline"
                >
                  View Details →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
