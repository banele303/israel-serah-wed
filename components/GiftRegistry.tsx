"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GiftIcon } from "lucide-react"
import { pinyonScript} from "./ui/fonts"

export default function GiftRegistry() {
  const registries = [
    { name: "Elegant Essentials", url: "#" },
    { name: "Modern Living", url: "#" },
    { name: "Timeless Treasures", url: "#" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="gift-registry">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <GiftIcon className="mx-auto h-16 w-16 text-green-800 mb-4" />

            
                  <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`${pinyonScript.className} text-3xl font-bold text-slate-800 md:text-8xl lg:text-9xl mb-6`}
                          >
                         Gift Registry
                          </motion.h1>
        
          <p className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto">
            Your presence is our greatest gift. However, if you wish to honor us with a present, we've curated
            registries at these wonderful stores:
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {registries.map((registry, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Button
                asChild
                variant="outline"
                className="w-full h-auto py-6 px-4 bg-white hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Link
                  href={registry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-lg flex flex-col items-center"
                >
                  <span className="text-2xl mb-2">🎁</span>
                  {registry.name}
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

