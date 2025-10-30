"use client";

import Link from "next/link";
import { Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export function Footer() {
  const socialIcons = [
    { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: personalInfo.socials.instagram, label: "Instagram" },
    { icon: Facebook, href: personalInfo.socials.facebook, label: "Facebook" },
    { icon: MessageCircle, href: personalInfo.socials.discord, label: "Discord" },
  ];

  return (
    <footer className="border-t border-white/10 glass mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Abderahmene Maamria</h3>
            <p className="text-foreground/70 text-sm">
              Full-Stack Developer — Robotics & Embedded Systems
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/projects" className="hover:text-gradient transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/competitions" className="hover:text-gradient transition-colors">
                  Competitions
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-gradient transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gradient transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-full hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-foreground/70 mt-4">
              {personalInfo.email}
            </p>
            <p className="text-sm text-foreground/70">
              {personalInfo.phone}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} Abderahmene Maamria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
