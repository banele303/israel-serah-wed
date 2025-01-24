import { Dancing_Script, Great_Vibes } from "next/font/google"
import localFont from "next/font/local"

// Google Font options
export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
})

export const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

// Custom font option - similar to the image
export const signatureFont = localFont({
  src: "./fonts/Autography.woff2",
  display: "swap",
})

