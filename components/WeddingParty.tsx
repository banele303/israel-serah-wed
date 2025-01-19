'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partyMembers = [
  { name: "Jane Doe", role: "Maid of Honor", image: "/placeholder.svg" },
  { name: "John Smith", role: "Best Man", image: "/placeholder.svg" },
  { name: "Alice Johnson", role: "Bridesmaid", image: "/placeholder.svg" },
  { name: "Bob Williams", role: "Groomsman", image: "/placeholder.svg" },
  // Add more wedding party members here
]

export default function WeddingParty() {
  return (
    <section className="py-20 bg-pearl/10" id="wedding-party">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-cormorant text-5xl md:text-6xl text-center mb-16"
        >
          Our Wedding Party
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-cormorant text-2xl mb-2">{member.name}</h3>
              <p className="font-montserrat text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

