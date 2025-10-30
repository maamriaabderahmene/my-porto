"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { events } from "@/data/portfolio-data";
import { Calendar, MapPin, User, Image as ImageIcon } from "lucide-react";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"participated" | "organized">("participated");

  const activeEvents =
    activeTab === "participated" ? events.participated : events.organized;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Events</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Events I've participated in and organized
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 justify-center">
          <button
            onClick={() => setActiveTab("participated")}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === "participated"
                ? "gradient-cyan text-white"
                : "glass text-foreground/70 hover:text-foreground"
            }`}
          >
            Events I Participated In
          </button>
          <button
            onClick={() => setActiveTab("organized")}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === "organized"
                ? "gradient-cyan text-white"
                : "glass text-foreground/70 hover:text-foreground"
            }`}
          >
            Events I Organized
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {activeEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 hover-3d"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <span className="px-3 py-1 glass rounded-full text-sm font-medium">
                      {event.role}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <User className="w-4 h-4" />
                      <span>{event.role}</span>
                    </div>
                  </div>
                  <p className="text-foreground/80">{event.description}</p>
                  {event.photos && event.photos.length > 0 && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70">
                      <ImageIcon className="w-4 h-4" />
                      <span>{event.photos.length} photos available</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-foreground/70">No events in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
