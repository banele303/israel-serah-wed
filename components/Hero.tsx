"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { greatVibes,pinyonScript, alexBrush } from "./ui/fonts"

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/img8.jpeg" alt="Wedding Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center text-white px-4 text-shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${alexBrush.className} text-6xl md:text-8xl lg:text-9xl mb-6`}
        >
          Israel & Serah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-8"
        >
          21 April 2025
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className={`${pinyonScript.className} text-3xl md:text-xl max-w-2xl mx-auto`}
        >
        Join us to celebrate our God written love story
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12"
        >
          <a
            href="#rsvp"
            className="font-montserrat inline-block bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-pearl transition-colors duration-300"
          >
            RSVP Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

