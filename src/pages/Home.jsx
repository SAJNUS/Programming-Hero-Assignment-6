import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  )
}

export default Home
