"use client";

import { motion } from "framer-motion";

const skillData = [
  { name: "React", value: 90 },
  { name: "Next.js", value: 88 },
  { name: "Flutter", value: 75 },
  { name: "C++", value: 82 },
  { name: "Arduino", value: 87 },
  { name: "Robotics", value: 92 },
  { name: "Design", value: 68 },
];

function getCoordinates(angle: number, value: number, max = 100, radius = 70) {
  const angleRad = ((angle - 90) * Math.PI) / 180;
  const scaled = (value / max) * radius;
  return [
    100 + scaled * Math.cos(angleRad),
    100 + scaled * Math.sin(angleRad),
  ];
}

export default function SkillChart() {
  const count = skillData.length;
  const max = 100;
  const angles = skillData.map((_, i) => (360 / count) * i);
  const points = angles
    .map((a, i) => getCoordinates(a, skillData[i].value))
    .map((p) => p.join(",")).join(" ");

  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <svg
        viewBox="0 0 200 200"
        width="350"
        height="350"
        className="glass rounded-2xl backdrop-blur-3xl drop-shadow-xl dark:bg-black/30 bg-white/40"
      >
        {/* Guide polygons */}
        {[20, 40, 60, 80, 100].map((v) => (
          <polygon
            key={v}
            points={angles.map((a) => getCoordinates(a, v).join(",")).join(" ")}
            fill="none"
            stroke="#8884"
            strokeWidth="1"
          />
        ))}
        {/* Main area */}
        <motion.polygon
          points={points}
          fill="url(#chartgrad)"
          strokeWidth={3}
          stroke="#67e8f9"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
        />
        {/* Dots and skill labels */}
        {skillData.map((s, i) => {
          const [x, y] = getCoordinates(angles[i], s.value);
          const [lx, ly] = getCoordinates(angles[i], 110);
          return (
            <g key={s.name}>
              <circle cx={x} cy={y} r="5" fill="#06b6d4" stroke="#fff" strokeWidth={2} />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                fill="#fff"
                fontSize={16}
                fontWeight={600}
                className="drop-shadow-md"
              >
                {s.name}
              </text>
            </g>
          );
        })}
        {/* Gradient fill */}
        <defs>
          <linearGradient id="chartgrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4cc" />
            <stop offset="100%" stopColor="#8b5cf6cc" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

