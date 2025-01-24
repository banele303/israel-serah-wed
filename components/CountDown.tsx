import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Clock } from "lucide-react"

const WeddingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date("2025-04-21T00:00:00").getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    // Update countdown every second
    const timer = setInterval(calculateTimeLeft, 1000)
    calculateTimeLeft()

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-green-800/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="w-12 h-12 text-green-300 animate-pulse" />
          </div>
          <CardTitle className="text-3xl font-bold text-green-100">Our Wedding Day Countdown</CardTitle>
          <p className="text-green-200 text-lg">April 21, 2025</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-green-700 shadow-md transition-transform hover:scale-105"
              >
                <span className="text-4xl font-bold text-green-300 mb-2">{value}</span>
                <span className="text-green-200 capitalize">{unit}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-8 text-green-200 space-x-2">
            <Clock className="w-5 h-5" />
            <span>Time until we say "I do"</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default WeddingCountdown

