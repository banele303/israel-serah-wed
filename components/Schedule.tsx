'use client'

import { motion } from 'framer-motion'

const events = [
  { time: "10:45 AM", description: "Guest Arrival" },
  { time: "11AM - 1PM", description: "Traditional Ceremony Begins" },
  { time: "4:00 PM", description: "Photos & Cocktail Hour" },
  { time: "2:30 PM", description: "White Wedding Ceremony" },
 { time: "3:45 PM", description: "Reception Dinner" },
  { time: "7:00 PM", description: "Dancing and Celebrations" },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-pearl/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-cormorant italic text-5xl md:text-6xl text-center mb-16"
        >
          Wedding Day Schedule
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center mb-8 last:mb-0"
            >
              <div className="w-24 font-montserrat font-semibold text-right mr-8">{event.time}</div>
              <div className="flex-1">
                <div className="h-4 w-4 rounded-full bg-pearl absolute -ml-10 mt-2"></div>
                <div className="font-montserrat">{event.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

