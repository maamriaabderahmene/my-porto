// EXAMPLE: Competition Page Template
// To use:
// 1. Duplicate this file and rename for each competition.
// 2. Or, add data in data/portfolio-data.ts.

import { motion } from "framer-motion";

export default function ExampleCompetitionPage() {
  // Example competition
  const comp = {
    name: "Example Innovation League",
    date: "2026-06-20",
    organization: "Tech League Co.",
    rank: "Finalist",
    description: "Describe the competition. This file serves as a ready-made page you can clone and edit, or just use portfolio-data.ts for the card/timeline.",
    certificate: "", // Use /certificates/my-certificate.jpg if available
    category: "Programming",
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="p-14 max-w-2xl mx-auto mt-10 glass rounded-2xl"
    >
      <h1 className="text-3xl font-bold text-gradient mb-3">{comp.name}</h1>
      <p className="text-foreground/70 mb-1 text-xs">{comp.date} • {comp.organization}</p>
      <span className="inline-block my-2 px-3 py-1 glass rounded-full text-xs text-cyan-400">{comp.category}</span>
      <div className="font-semibold text-lg mb-2">Result: <span className="text-violet-400">{comp.rank}</span></div>
      <div className="mb-4">{comp.description}</div>
      {comp.certificate && (
        <img src={comp.certificate} className="rounded-xl max-w-xs border my-4" alt="Certificate" />
      )}
      {/*
        To add:
        1. Copy this file, update data fields, rename file.
        2. Or, use the competitions array in data/portfolio-data.ts.
      */}
    </motion.div>
  );
}
