'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OurStory() {
  const events = [
    {
      title: "How We Met",
      date: "August 2023",
      img:"/img13.jpeg",
      description: "August 2023 We met on an Uber ride, and quickly discovered that we went to the same church, a moment that felt like fate bringing us together. A few weeks later, Israel invited Serah out, eagar to spend time with her and get to know  her"},
    {
      title: "Our First Date",
      date: "September 2023",
      img:"/img6.jpeg",
      description: "We shared an ice cream date in Pretoria, spending hours talking and discovering more about each other. It was the beginning of something truly special."
    },
    {
      title: "The Proposal",
      date: "August 2024",
      img:"/img5.jpeg",
      description: "With the help of family and friends, Israel planned a thoughtful and surprising proposal at a botanical garden – a place where he and Serah had shared their favourite picnic date. Surrounded by natures beauty, he asked her to spend forever with him, creating a moment both heartfelt and unforgettable."
    }
  ]

  return (
    <section id="our-story" className="py-20 bg-pearl/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-cormorant text-5xl md:text-6xl text-center mb-16"
        >
          Our Love Story
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center mb-16 last:mb-0"
            >
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <Image
                  src={event.img}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-cormorant text-3xl mb-2">{event.title}</h3>
                <p className="font-montserrat text-gray-600 mb-4">{event.date}</p>
                <p className="font-montserrat">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

