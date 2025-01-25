'use client'
import { pinyonScript} from "./ui/fonts"
import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock } from 'lucide-react'

export default function Venue() {
  return (
    <section id="venue" className="py-20 bg-white">
      <div className="container mx-auto px-4">

          <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className={`${pinyonScript.className} text-5xl text-center font-bold text-slate-800 md:text-8xl lg:text-9xl mb-6`}
                        >
                         Venue & Details
                         </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Calendar className="w-6 h-6 text-pearl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-cormorant text-2xl font-semibold mb-2">Date</h3>
                <p className="font-montserrat">21 April 2025</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-pearl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-cormorant text-2xl font-semibold mb-2">Time</h3>
                <p className="font-montserrat">10:45am prompt.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-pearl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-cormorant text-2xl font-semibold mb-2">Location</h3>
                <p className="font-montserrat">The Glass Venue</p>
                <p className="font-montserrat leading-8"> 21 April 2025 • The Glass Venue, 151 A Baard Rd, Raslouw, Centurion</p>
             
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.5885067075436!2d28.1234567!3d-25.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ1JzU1LjYiUyAyOMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

