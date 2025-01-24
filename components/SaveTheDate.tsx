import Image from 'next/image';
import Head from 'next/head';
import { motion } from "framer-motion"

export default function SaveTheDate() {
  return (
    <div className="bg-white   px-3">
      <Head>
        <title>Save The Date</title>
      </Head>

      <div className="text-center py-10 ">
        <h1 className="text-4xl font-header">SAVE THE DATE</h1>
        <h2 className="text-2xl italic py-4">Traditional and White Wedding</h2>
        <p className="mt-4 text-md py-3 bg-green-800 max-w-[10rem] text-white font-bold rounded-md mx-auto">21 April 2025</p>
      </div>

      <div className="text-center py-4">

      </div>

      <div className="relative w-full h-full ">
        <Image
          src="/img18.jpeg" // Replace with actual path or URL
          alt="Israel and Serah"
          layout="fill"
          objectFit="cover"
          className='rounded-md'
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-cormorant text-center pt-5 italic text-5xl md:text-8xl lg:text-9xl mb-6"
      >
        Israel & Serah
      </motion.h1>
      <div className="mx-auto mt-6 max-w-3xl px-4">
        <p className='text-xl leading-7'>
          Join us for a day where two hearts, and two cultures intertwine in a celebration of love.
          On this special day, we invite you to witness the beautiful union of two families, as we honor tradition
          with the presentation of the bride price and the heartfelt moment when the bride is handed over to her husband and his family.
        </p>
        <p className='text-xl pt-4'>
          Thereafter, we will come together, hand in hand, before the Lord to pledge our eternal vows, and seal this God-written love story. This day, filled with joy, faith, and deep connection, will mark the beginning of our journey together — a love story that transcends time, culture, and distance.
        </p>
        <p className="font-semibold text-xl pt-4">
          We would love you to celebrate with us as we step into this fulfilled destiny.
        </p>
      </div>

      <div className="flex justify-between px-[2rem] bg-green-800 flex-col items-center mx-4 mt-8 border-t pt-4">
        <div>
          <p className="text-md text-white text-center font-bold ">Theme: White, Cream, Ivory, and a touch of African print</p>
        </div>
        <div className="text-right pt-4">
          <p className="text-md text-white font-bold pb-3">Pretoria | 10AM Till 10:45</p>

        </div>
      </div>

      <footer className="text-center mt-8 pb-6">
      #IzzyToLove
      </footer>
    </div>
  );
}