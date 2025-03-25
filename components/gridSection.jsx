"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import BentoItem from "./bentoItem.jsx"

// Define the content for each bento item
const items = [
  {
    id: 1,
    title: "Test 1",
    description: "This is the first test.",
    expandedContent: "This is just a test to see if i can call in extra content."
  },
  {
    id: 2,
    title: "Test 2",
    description: "This is the second test.",
  },
  {
    id: 3,
    title: "Test 3",
    description: "This is the third test.",
  },
  {
    id: 4,
    title: "Test 4",
    description: "This is the fourth test.",
  },
  {
    id: 5,
    title: "Test 5",
    description: "This is the fifth test.",
  },
  {
    id: 6,
    title: "Test 6",
    description: "This is the sixth test.",
  },
]

export default function GridSelection() {
  const [expandedId, setExpandedId] = useState(null)

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="relative">
      {/* Expanded overlay */}
      <AnimatePresence>
        {expandedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setExpandedId(null)}
          />
        )}
      </AnimatePresence>

      {/* Grid layout */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 ${
          expandedId ? "pointer-events-none" : ""
        }`}
      >
        {items.map((item) => (
          <BentoItem key={item.id} item={item} isExpanded={expandedId === item.id} onExpand={handleExpand} />
        ))}
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expandedId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-4 md:inset-12 lg:inset-24 z-50 rounded-xl shadow-2xl overflow-hidden pointer-events-auto bg-[#1a1a1a] text-white"
          >
            {items.find((item) => item.id === expandedId) && (
              <div className="h-full relative">
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => setExpandedId(null)}
                    className="bg-yellow-400 rounded-full p-2 text-black hover:bg-yellow-300 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="h-full flex flex-col p-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {items.find((item) => item.id === expandedId)?.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-8">{items.find((item) => item.id === expandedId)?.description}</p>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xl mb-6">
                        Expanded content for {items.find((item) => item.id === expandedId)?.title}
                      </p>
                      <p className="max-w-2xl mx-auto">
                      {items.find((item) => item.id === expandedId)?.expandedContent}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

