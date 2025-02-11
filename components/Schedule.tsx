'use client'
import { pinyonScript } from "./ui/fonts"
import { motion } from 'framer-motion'

const events = [
  { time: "10:45am", description: "Guest Arrival" },
  { time: "11:00am ", description: "Traditional Ceremony Begins" },
  { time: "1:00pm ", description: "Photo & Cocktail Hour" },
  { time: "2:15pm", description: "Guest sitted for Ceremony" },
  { time: "2:30pm", description: "White Wedding Ceremony" },
 { time: "3:45pm", description: "Reception" },
  
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">

            <motion.h1
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.8, delay: 0.2 }}
                                  className={`${pinyonScript.className} text-5xl   text-center pt-5 font-extrabold text-slate-800 md:text-8xl lg:text-9xl mb-6`}
                                >
                                   Wedding Day Schedule
                                </motion.h1>
      

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
              <div className="w-34 font-montserrat font-semibold text-right mr-8">{event.time}</div>
              <div className="flex-1">
                
                <div className="font-montserrat">{event.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

