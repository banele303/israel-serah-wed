
"use client"

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SaveTheDate from '@/components/SaveTheDate'
import OurStory from '@/components/OurStory'
import Gallery from '@/components/Gallery'
import Schedule from '@/components/Schedule'
import Venue from '@/components/Venue'

import Footer from '@/components/Footer'

import WeddingCountdown from '@/components/CountDown'
import GoogleForm from '@/components/GoogleForm'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />    
      <Hero />
      <SaveTheDate />
      <WeddingCountdown/>
      <OurStory />
      <Gallery />
      
      <Schedule />
      <Venue />
      
     <GoogleForm/>

    
      <Footer />
    </main>
  )
}

