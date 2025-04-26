"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

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
      className={`bg-[#ffffff7e] rounded-4xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow relative z-20 ${
        isExpanded ? "pointer-events-none" : "pointer-events-auto"
      }`}
      onClick={() => onExpand(item.id)}
      style={{
        height: "700px",
        transform: isExpanded ? "scale(0.95)" : "scale(1)",
        opacity: isExpanded && !isExpanded ? 0.6 : 1,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      <div className="p-6 h-full flex flex-col text-black relative">
        <div className="absolute top-4 right-4">
          <div className="hidden rounded-full p-2 text-black">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
        <div className="">
          <h3 className="text-4xl lg:text-4xl max-w-2xs h-52 flex items-center mx-auto font-bold mb-2 text-center">{item.title}</h3>
          <div className="w-full flex justify-center mb-12 h-24">

            <Image 
            src={item.src}
            alt={'vector files'}
            width={100}
            height={100}
            /> 
          </div>
          <p className="text-lg text-black text-center">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

