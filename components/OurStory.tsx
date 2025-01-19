'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OurStory() {
  const events = [
    {
      title: "How We Met",
      date: "January 2020",
      img:"/img13.jpeg",
      description: "Our paths crossed unexpectedly at a mutual friend's birthday party. From the moment we started talking, we knew there was something special between us."
    },
    {
      title: "Our First Date",
      date: "February 2020",
      img:"/img6.jpeg",
      description: "We went for a picnic in the park, and spent hours talking, laughing, and getting to know each other. It was the start of something beautiful."
    },
    {
      title: "The Proposal",
      date: "December 2024",
      img:"/img5.jpeg",
      description: "On a romantic getaway, surrounded by the beauty of nature, Thato got down on one knee and asked Tshego to spend the rest of their lives together. She said yes!"
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

