import { useState } from 'react'
import { toast } from 'react-toastify'
import Cart from '../components/Cart'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import Products from '../components/Products'
import Stats from '../components/Stats'
import Steps from '../components/Steps'

function Home() {
  const [activeTab, setActiveTab] = useState('products')
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const isDuplicate = cart.some((item) => item.id === product.id)
    
    if (isDuplicate) {
      toast.info('Item already in cart', { position: 'top-right', autoClose: 3000 })
      return
    }
    
    setCart((prevCart) => [...prevCart, product])
    toast.success('Added to cart', { position: 'top-right', autoClose: 3000 })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Hero />
      <Stats />

      <section className="bg-base-100 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-base-content md:text-5xl">Premium Digital Tools</h2>
            <p className="mt-4 text-sm leading-relaxed text-base-content/60 md:text-base">
              Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
            </p>

            <div className="mt-7 flex items-center justify-center gap-3">
              <button
                className={`btn normal-case rounded-full border-none transition-all duration-300 ${
                  activeTab === 'products'
                    ? 'bg-[linear-gradient(90deg,#4F46E5_0%,#6D28D9_50%,#9333EA_100%)] px-6 py-2 text-white shadow-md hover:scale-105 hover:brightness-110 hover:shadow-lg'
                    : 'border border-[#6D28D9] bg-transparent px-6 py-2 text-[#6D28D9] shadow-none hover:scale-105'
                }`}
                onClick={() => setActiveTab('products')}
              >
                Products
              </button>
              <button
                className={`btn normal-case rounded-full border-none transition-all duration-300 ${
                  activeTab === 'cart'
                    ? 'bg-[linear-gradient(90deg,#4F46E5_0%,#6D28D9_50%,#9333EA_100%)] px-6 py-2 text-white shadow-md hover:scale-105 hover:brightness-110 hover:shadow-lg'
                    : 'border border-[#6D28D9] bg-transparent px-6 py-2 text-[#6D28D9] shadow-none hover:scale-105'
                }`}
                onClick={() => setActiveTab('cart')}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>

          <div className="mt-12">
            {activeTab === 'products' ? (
              <Products addToCart={addToCart} cart={cart} />
            ) : (
              <Cart cart={cart} setCart={setCart} />
            )}
          </div>
        </div>
      </section>

      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
