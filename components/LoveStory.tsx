'use client'

import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'
import { Heart } from 'lucide-react'
import Image from 'next/image'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function LoveStory() {
  const timelineEvents = [
    {
      date: "First Meeting",
      title: "Where It All Began",
      description: "Our paths crossed in the most unexpected way...",
    },
    {
      date: "First Date",
      title: "The Beginning of Forever",
      description: "We knew there was something special from the very start...",
    },
    {
      date: "The Proposal",
      title: "She Said Yes!",
      description: "Under a starlit sky, surrounded by loved ones...",
    },
  ]

  return (
    <section className="py-20 bg-pearl/10" id="story">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${playfair.className} text-4xl md:text-5xl mb-4`}>Our Love Story</h2>
          <Heart className="w-8 h-8 mx-auto text-pearl" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-pearl/50" />
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
                index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <span className="text-pearl font-semibold">{event.date}</span>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
              <div className={`hidden md:block ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

