import { CalendarDays, MapPin, Clock } from 'lucide-react'

export default function Details() {
  return (
    <section id="details" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Wedding Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <CalendarDays className="w-12 h-12 mx-auto mb-4 text-pearl" />
            <h3 className="text-2xl font-semibold mb-2">Date</h3>
            <p>21 April 2025</p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-pearl" />
            <h3 className="text-2xl font-semibold mb-2">Venue</h3>
            <p>The Glass Venue</p>
            <p>151A Baard Road, Raslouw</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-pearl" />
            <h3 className="text-2xl font-semibold mb-2">Time</h3>
            <p>Ceremony: 3:00 PM</p>
            <p>Reception: 5:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

