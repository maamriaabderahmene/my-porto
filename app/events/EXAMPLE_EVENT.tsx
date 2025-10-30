// EXAMPLE: Event Page Template
// How to use:
// 1. Duplicate this file & rename, or copy/paste/modify content here to add new events
// 2. You can also add new entries in data/portfolio-data.ts > events

import { motion } from "framer-motion";

export default function ExampleEventPage() {
  // Example event object
  const event = {
    title: "Robotics Hackathon Example",
    date: "2026-04-05",
    location: "ENSTA, Algiers",
    role: "Organizer/Participant",
    description:
      "A sample robotics event description. You can add new events by duplicating this file or just modifying the events array in portfolio-data.ts.",
    links: [{ label: "Event photos", url: "https://example.com/gallery" }],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="p-12 glass rounded-2xl max-w-2xl mx-auto mt-12"
    >
      <h1 className="text-3xl font-bold mb-2 text-gradient">{event.title}</h1>
      <span className="block text-sm text-foreground/50 mb-1">{event.date} — {event.location}</span>
      <span className="inline-block px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-xs mb-4">{event.role}</span>
      <p className="text-foreground/80 mb-6">{event.description}</p>
      {event.links && event.links.length > 0 && (
        <div className="flex gap-3">
          {event.links.map((l) => (
            <a key={l.url} href={l.url} className="underline text-violet-400" target="_blank" rel="noopener">{l.label}</a>
          ))}
        </div>
      )}
      {/*
        To add:
        1. Copy this file, update data.
        2. Or, add directly to events array in data/portfolio-data.ts
      */}
    </motion.div>
  );
}
