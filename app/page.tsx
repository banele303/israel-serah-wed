
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
      <WeddingParty />
      <Schedule />
      <Venue />
      <GiftRegistry />
      <RSVP />
      <Footer />
    </main>
  )
}

