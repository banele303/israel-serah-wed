
"use client"

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SaveTheDate from '@/components/SaveTheDate'
import OurStory from '@/components/OurStory'
import Gallery from '@/components/Gallery'
import Schedule from '@/components/Schedule'
import Venue from '@/components/Venue'
import RSVP from '@/components/RSVP'
import Footer from '@/components/Footer'
import WeddingParty from '@/components/WeddingParty'
import GiftRegistry from '@/components/GiftRegistry'
import WeddingCountdown from '@/components/CountDown'

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
      <iframe 
  src="https://docs.google.com/forms/d/e/1FAIpQLSexrpUzfu2Wo47tOwxlGJQAX1hx2IiXoDP2Bt-w0zAUvpBtFA/viewform?embedded=true" 
  width="440" 
  height="1260" 
  frameBorder="0" 

>
  Loading…
</iframe>

    
      <Footer />
    </main>
  )
}

