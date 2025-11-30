"use client"

import { motion } from "framer-motion"

export default function AnimatedPath() {
  const width = 217
  const height = 130
  const path = "M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      {/* Background path */}
      <path d={path} stroke="black" strokeOpacity="0.2" />

      {/* Animated path with gradient */}
      <motion.path
        d={path}
        stroke="url(#pulse-1)"
        strokeLinecap="round"
        strokeWidth="2"
        strokeDasharray={100}
        initial={{ strokeDashoffset: 100 }}
        animate={{ strokeDashoffset: -100 }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <defs>
        <linearGradient id="pulse-1" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop stopColor="#2EB9DF" />
          <stop offset="1" stopColor="#9E00FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
