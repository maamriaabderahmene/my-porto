"use client";

import { motion } from "framer-motion";
import { Cpu, CircuitBoard, Zap, Bot } from "lucide-react";

const roboticsProjects = [
  {
    name: "Arduino Projects",
    description: "Built various automation systems using Arduino Uno, Nano, and Mega boards.",
    technologies: ["Arduino Uno", "Arduino Nano", "Arduino Mega", "C++", "Sensors"],
    icon: CircuitBoard,
  },
  {
    name: "Raspberry Pi Applications",
    description: "Developed IoT solutions and embedded systems using Raspberry Pi.",
    technologies: ["Raspberry Pi 4", "Python", "Linux", "GPIO", "IoT"],
    icon: Cpu,
  },
  {
    name: "Jetson Nano Projects",
    description: "Worked on AI-powered robotics applications using NVIDIA Jetson Nano.",
    technologies: ["Jetson Nano", "TensorFlow", "Computer Vision", "AI"],
    icon: Zap,
  },
  {
    name: "Competition Robots",
    description: "Designed and built autonomous robots for various robotics competitions.",
    technologies: ["Autonomous Navigation", "Sensor Fusion", "PID Control"],
    icon: Bot,
  },
];

const skills = [
  "Embedded C/C++ Programming",
  "Sensor Integration (Ultrasonic, IR, Gyroscope)",
  "Servo Motor Control",
  "IoT Communication Protocols",
  "Real-time System Design",
  "PCB Design & Circuit Building",
  "Robotic Arm Programming",
  "Autonomous Navigation Algorithms",
];

export default function RoboticsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Electronics & Robotics</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Exploring the intersection of hardware and software
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {roboticsProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8 hover-3d"
            >
              <project.icon className="w-12 h-12 text-gradient mb-4" />
              <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 glass rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="flex items-center gap-3 p-4 glass rounded-xl"
              >
                <div className="w-2 h-2 gradient-cyan rounded-full" />
                <span className="text-foreground/80">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Competition Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Competition Achievements</h2>
          <div className="space-y-4">
            {[
              { event: "Roboko Competition", rank: "5th Place", year: "2024" },
              { event: "African Robotics League", rank: "20th in Africa", year: "2023" },
              { event: "Local Robotics Events", rank: "Multiple Participations", year: "2022+" },
            ].map((achievement, index) => (
              <div
                key={achievement.event}
                className="flex items-center justify-between p-4 glass rounded-xl"
              >
                <div>
                  <div className="font-bold text-lg">{achievement.event}</div>
                  <div className="text-sm text-foreground/70">{achievement.year}</div>
                </div>
                <div className="text-gradient font-semibold">{achievement.rank}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
