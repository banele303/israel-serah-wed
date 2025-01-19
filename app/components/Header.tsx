import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white bg-opacity-90 fixed w-full z-10">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-8">
          <li><Link href="#home" className="text-gray-800 hover:text-pearl transition duration-300">Home</Link></li>
          <li><Link href="#about" className="text-gray-800 hover:text-pearl transition duration-300">About</Link></li>
          <li><Link href="#details" className="text-gray-800 hover:text-pearl transition duration-300">Details</Link></li>
          <li><Link href="#rsvp" className="text-gray-800 hover:text-pearl transition duration-300">RSVP</Link></li>
        </ul>
      </nav>
    </header>
  )
}

