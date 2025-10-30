"use client";

import { motion } from "framer-motion";
import { competitions } from "@/data/portfolio-data";
import { Award, Calendar, MapPin, Trophy } from "lucide-react";
import Image from "next/image";

export default function CompetitionsPage() {
  const getRankColor = (rank: string) => {
    if (rank.includes("1st") || rank.includes("Winner")) return "text-yellow-400";
    if (rank.includes("2nd")) return "text-gray-300";
    if (rank.includes("3rd")) return "text-amber-600";
    if (rank.includes("5th")) return "text-cyan-400";
    if (rank.includes("20th")) return "text-violet-400";
    return "text-foreground/70";
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
            <span className="text-gradient">Competitions</span>
          </h1>
          <p className="text-xl text-foreground/70">
            My participation and achievements in various competitions
          </p>
        </motion.div>

        <div className="space-y-8">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 hover-3d"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {competition.certificate && competition.certificate.startsWith('/') && (
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 relative rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                      <Image
                        src={competition.certificate}
                        alt={`${competition.name} Certificate`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{competition.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-foreground/70 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {competition.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {competition.organization}
                        </div>
                      </div>
                    </div>
                    <div className={`text-right ${getRankColor(competition.rank)}`}>
                      <Trophy className="w-6 h-6 mx-auto mb-1" />
                      <div className="font-bold text-lg">{competition.rank}</div>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-4">{competition.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 glass rounded-full text-sm font-medium">
                      {competition.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: "Total Competitions", value: competitions.length, icon: Award },
            {
              label: "Best Achievement",
              value: "1st Place",
              icon: Trophy,
            },
            { label: "Categories", value: "5+", icon: Calendar },
          ].map((stat, index) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-gradient" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
