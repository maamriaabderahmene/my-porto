"use client";

import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes: Array<{ value: "dark" | "light" | "auto"; icon: React.ReactNode; label: string }> = [
    { value: "dark", icon: <Moon className="w-4 h-4" />, label: "Dark" },
    { value: "light", icon: <Sun className="w-4 h-4" />, label: "Light" },
    { value: "auto", icon: <Monitor className="w-4 h-4" />, label: "Auto" },
  ];

  return (
    <div className="flex items-center gap-2 glass rounded-full p-1">
      {themes.map((t) => (
        <motion.button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            theme === t.value
              ? "gradient-cyan text-white"
              : "text-foreground/70 hover:text-foreground"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.icon}
          <span className="hidden sm:inline">{t.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
