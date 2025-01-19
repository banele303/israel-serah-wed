'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add form submission logic here
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  return (
    <section id="rsvp" className="py-20 bg-pearl/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="font-cormorant text-5xl md:text-6xl text-center mb-8">RSVP</h2>
          <p className="font-montserrat text-center text-gray-600 mb-12">
            Please let us know if you'll be joining us on our special day
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="name" className="font-montserrat">Full Name</Label>
              <Input id="name" required placeholder="Enter your full name" className="font-montserrat" />
            </div>

            <div className="space-y-4">
              <Label htmlFor="email" className="font-montserrat">Email</Label>
              <Input id="email" type="email" required placeholder="Enter your email" className="font-montserrat" />
            </div>

            <div className="space-y-4">
              <Label className="font-montserrat">Will you be attending?</Label>
              <RadioGroup defaultValue="yes">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-montserrat">Yes, I'll be there</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-montserrat">Sorry, I can't make it</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label htmlFor="guests" className="font-montserrat">Number of Guests</Label>
              <Select>
                <SelectTrigger className="font-montserrat">
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label htmlFor="dietary" className="font-montserrat">Dietary Requirements</Label>
              <Input id="dietary" placeholder="Any dietary requirements?" className="font-montserrat" />
            </div>

            <Button
              type="submit"
              className="w-full font-montserrat"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send RSVP'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

