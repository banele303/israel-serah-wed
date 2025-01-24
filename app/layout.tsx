import './globals.css'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'

const cormorant = Cormorant_Garamond({ 
  weight: '400', // Specify the weight here
  subsets: ['latin'], 
  variable: '--font-cormorant' 
})
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat' 
})

export const metadata = {
  title: 'Israel & Serah - Our Wedding Celebration',
  description: 'Join us in celebrating our love and union',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        cormorant.variable,
        montserrat.variable,
        "font-sans bg-cream text-gray-800 antialiased"
      )}>
        {children}
      </body>
    </html>
  )
}
