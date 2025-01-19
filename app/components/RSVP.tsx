import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RSVP() {
  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">RSVP</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Full Name" className="w-full" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Email" className="w-full" />
          </div>
          <div className="mb-4">
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="">Number of Guests</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <Button type="submit" className="w-full bg-pearl hover:bg-pearl-dark text-white">
            Send RSVP
          </Button>
        </form>
      </div>
    </section>
  )
}

