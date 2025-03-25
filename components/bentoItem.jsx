"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function BentoItem({ item, isExpanded, onExpand }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: item.id * 0.05,
        layout: { type: "spring", damping: 20, stiffness: 300 },
      }}
      className={`bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow relative z-20 ${
        isExpanded ? "pointer-events-none" : "pointer-events-auto"
      }`}
      onClick={() => onExpand(item.id)}
      style={{
        height: "180px",
        transform: isExpanded ? "scale(0.95)" : "scale(1)",
        opacity: isExpanded && !isExpanded ? 0.6 : 1,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      <div className="p-6 h-full flex flex-col text-white relative">
        <div className="absolute top-4 right-4">
          <div className="bg-yellow-400 rounded-full p-2 text-black">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-300">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

