"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Inter, Rubik } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const rubik = Rubik({ subsets: ["latin"], weight: ["500", "700"] });

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Feil under sending:", error);
      setStatus("error");
    }
  };

  return (
    <div className={`min-h-screen bg-gray-100 text-gray-800 relative transition-all duration-300 ease-in-out ${inter.className}`}>
      <Header />
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center py-12"
      >
        <h1 className={`text-4xl md:text-5xl font-bold mb-8 mt-16 ${rubik.className}`}>Kontakt Oss</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white bg-opacity-70 p-8 rounded-3xl shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Navn</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ditt navn"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">E-post</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Din e-postadresse"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-2">Emne</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Emne for din henvendelse"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Melding</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Skriv din melding her"
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-lime-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
          >
            Send henvendelse
          </button>
          {status === "submitting" && <p className="mt-4 text-gray-500">Sender...</p>}
          {status === "success" && <p className="mt-4 text-green-600">Takk for din henvendelse!</p>}
          {status === "error" && <p className="mt-4 text-red-600">Noe gikk galt, prøv igjen senere.</p>}
        </form>
      </motion.div>
      
    </div>
  );
}
