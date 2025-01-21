'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  { src: "/img18.jpeg", alt: "Israel and Serah" },
  { src: "/img6.jpeg", alt: "Israe and Serah" },

  { src: "/img14.jpeg", alt: "Israel and Ser" },
  { src: "/img19.jpeg", alt: "Israel and Ser" },
  { src: "/img16.jpeg", alt: "Israel and Ser" },
  { src: "/img10.jpeg", alt: "Israel and Ser" },
  { src: "/img11.jpeg", alt: "Israel and Ser" },
  { src: "/img15.jpeg", alt: "Israel and Ser" },

  // Add more images here
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-cormorant text-5xl md:text-6xl text-center mb-16"
        >
          Our Moments
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

