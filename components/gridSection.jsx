"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import BentoItem from "./bentoItem.jsx"
import style from '@/styles/gridsection.module.css';

// Define the content for each bento item
const items = [
  {
    id: 1,
    title: "Kvalitet som varer",
    description: "Våre kluter er laget av naturlig bambus – et materiale kjent for sin mykhet, slitestyrke og god absorberingsevne. De er OEKO-TEX-sertifiserte, noe som betyr at klutene er helt frie for skadelige stoffer og trygge for deg og miljøet. Når du velger ErgoSmart, får du bærekraftig kvalitet som varer.",
    expandedContent: "This is just a test to see if i can call in extra content."
  },
  {
    id: 2,
    title: "Det skal lønne seg å velge bærekraftig",
    description: "En bedre hverdag skal ikke gå på bekostning av planeten. Derfor lager vi produkter som kombinerer ergonomi og bærekraft. Våre kluter er skapt med respekt for både deg og miljøet.",
  },
  {
    id: 3,
    title: "Enklere stell gir et enklere liv",
    description: "Våre kluter er utstyrt med håndtak som gir et godt grep. De er spesielt utviklet med tanke på personer med nedsatt bevegelighet. Våre kluter reduserer belastningen, og gjør hygiene lettere for både bruker og pleier.",
  },
  
]

export default function GridSelection() {
  const [expandedId, setExpandedId] = useState(null)

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className={`${style.gridBackground}`}>
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
        className={`grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 relative z-10 ${
          expandedId ? "pointer-events-none" : ""
        } ${style.gridSection}`}
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
                  <p className={`text-lg md:text-xl mb-8`}>{items.find((item) => item.id === expandedId)?.description}</p>
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

