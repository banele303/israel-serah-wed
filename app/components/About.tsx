import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/placeholder.svg" alt="Tshego and Thato" width={500} height={500} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <blockquote className="text-xl italic border-l-4 border-pearl pl-4 py-2 mb-6">
              "My beloved is mine and I am his; he browses among the lilies."
            </blockquote>
            <p className="text-right">- Song of Songs 2:16 NIV</p>
          </div>
        </div>
      </div>
    </section>
  )
}

