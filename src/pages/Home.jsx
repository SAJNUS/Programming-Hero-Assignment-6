import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Stats from '../components/Stats'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Products />
    </div>
  )
}

export default Home
