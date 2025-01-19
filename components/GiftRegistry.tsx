'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function GiftRegistry() {
  return (
    <section className="py-20 bg-white" id="gift-registry">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-cormorant text-5xl md:text-6xl text-center mb-8"
        >
          Gift Registry
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-montserrat text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following stores:
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8">
          <Button asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" className="font-montserrat">
              Registry 1
            </a>
          </Button>
          <Button asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" className="font-montserrat">
              Registry 2
            </a>
          </Button>
          <Button asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" className="font-montserrat">
              Registry 3
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

