'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/img4.jpeg"
          alt="Tshego and Thato"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cormorant text-6xl md:text-8xl lg:text-9xl mb-6"
        >
          Israel & Serah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-montserrat text-xl md:text-2xl mb-8"
        >
          21 April 2025
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-montserrat text-lg md:text-xl max-w-2xl mx-auto"
        >
          Join us as we celebrate our love and begin our journey together
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

