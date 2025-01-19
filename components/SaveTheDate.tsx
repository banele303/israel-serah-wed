import Image from 'next/image';
import Head from 'next/head';

export default function SaveTheDate() {
  return (
    <div className="bg-white   px-3">
      <Head>
        <title>Save The Date</title>
      </Head>

      <div className="text-center py-10 ">
        <h1 className="text-4xl font-header">The Wedding Story</h1>
        <h2 className="text-lg italic pt-2">Traditional and White Wedding</h2>
        <p className="mt-4 text-sm">26 April 2025</p>
      </div>

      <div className="text-center py-4">
        <h3 className="text-2xl italic">SAVE THE DATE</h3>
      </div>

      <div className="relative w-full h-96 ">
        <Image
          src="/img18.jpeg" // Replace with actual path or URL
          alt="Israel and Serah"
          layout="fill"
          objectFit="cover"
          className='rounded-md'
        />
      </div>

      <div className="text-center mt-6">
        <h4 className="text-2xl font-bold">Israel and Serah</h4>
      
      </div>

      <div className="mx-auto mt-6 max-w-3xl px-4">
        <p className='text-xl'>
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

      <div className="flex justify-between flex-col items-center mx-4 mt-8 border-t pt-4">
        <div>
          <p className="text-sm text-green-800">Theme: White, Cream, Ivory, and a touch of African print</p>
        </div>
        <div className="text-right pt-4">
          <p className="text-sm">Pretoria | 10AM Till Late</p>
     
        </div>
      </div>

      <footer className="text-center mt-8 pb-6">
        <p className="italic">Easy to Love</p>
      </footer>
    </div>
  );
}