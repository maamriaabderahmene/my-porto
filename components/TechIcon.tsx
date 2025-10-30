"use client";

import {
  Braces,
  Code2,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Terminal,
  Wrench,
  Box,
  Atom,
  Binary,
  Bot,
  Cuboid,
  CpuCog,
} from "lucide-react";

// Map common tech names to icons
const NAME_MAP: Record<string, any> = {
  // Languages
  javascript: Braces,
  typescript: Braces,
  python: FileCode,
  java: Atom,
  "c++": Binary,
  "c#": Binary,
  c: Terminal,
  pascal: FileCode,
  dart: Braces,

  // Frontend
  react: Atom,
  "next.js": Globe,
  nextjs: Globe,
  tailwind: Layers,
  "tailwind css": Layers,
  bootstrap: Layers,

  // Mobile/Desktop
  flutter: MonitorSmartphone,
  "react native": MonitorSmartphone,
  zeb: MonitorSmartphone,

  // Backend/DB
  node: Terminal,
  "node.js": Terminal,
  express: Terminal,
  supabase: Database,
  mongodb: Database,
  postgresql: Database,
  mysql: Database,

  // DevOps
  docker: Wrench,
  vercel: Rocket,
  nginx: Wrench,
  git: GitBranch,

  // Electronics/Robotics
  arduino: Cpu,
  "raspberry pi": CpuCog,
  jetson: CpuCog,
  robotics: Bot,

  // Design / 3D
  blender: Cuboid,
  sketchup: Box,
  solidworks: Box,
  autocad: Box,
  photoshop: PenTool,
  illustrator: PenTool,
  figma: PenTool,
};

export function TechIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const key = name.toLowerCase();
  const Icon = NAME_MAP[key] || Code2;
  return <Icon className={className} />;
}
