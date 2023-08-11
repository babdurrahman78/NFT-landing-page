import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brand from './components/Brand'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand />
    </div>

  )
}
