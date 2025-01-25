"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GiftIcon } from "lucide-react"
import { pinyonScript } from "./ui/fonts"

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
            Your presence at our wedding is the greatest present. However, if you would still like to give us a gift, please bring it to our wedding.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

