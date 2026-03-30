import { useState } from 'react'
import Cart from '../components/Cart'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Stats from '../components/Stats'

function Home() {
  const [activeTab, setActiveTab] = useState('products')
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />

      <section className="bg-base-100 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-base-content md:text-5xl">Premium Digital Tools</h2>
            <p className="mt-4 text-sm leading-relaxed text-base-content/60 md:text-base">
              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>

            <div className="mt-7 flex items-center justify-center gap-3">
              <button
                className={`btn normal-case ${activeTab === 'products' ? 'btn-primary text-white' : 'btn-ghost'}`}
                onClick={() => setActiveTab('products')}
              >
                Products
              </button>
              <button
                className={`btn normal-case ${activeTab === 'cart' ? 'btn-primary text-white' : 'btn-ghost'}`}
                onClick={() => setActiveTab('cart')}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>

          <div className="mt-12">
            {activeTab === 'products' ? <Products addToCart={addToCart} /> : <Cart />}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
