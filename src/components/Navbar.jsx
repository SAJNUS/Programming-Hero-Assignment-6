import cartIcon from '../../assets/products/shopping-cart.png'

const navItems = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']

function Navbar() {
  return (
    <header className="border-b border-base-200 bg-base-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button className="btn btn-ghost bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text px-0 text-3xl font-bold normal-case text-transparent hover:bg-transparent">
            DigiTools
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-base font-medium text-base-content/80 transition hover:text-primary">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button className="btn btn-ghost btn-circle">
              <img src={cartIcon} alt="Cart" className="h-5 w-5" />
            </button>
            <button className="btn normal-case rounded-full border-none bg-gradient-to-r from-purple-600 to-pink-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Login
            </button>
            <button className="btn normal-case rounded-full border-none bg-gradient-to-r from-purple-600 to-pink-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
          </div>

          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] mt-3 w-64 rounded-box border border-base-200 bg-base-100 p-3 shadow"
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#" className="text-base font-medium text-base-content/80 hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <button className="btn w-full justify-start normal-case rounded-full border-none bg-gradient-to-r from-purple-600 to-pink-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Login
                </button>
              </li>
              <li className="mt-1">
                <button className="btn w-full normal-case rounded-full border-none bg-gradient-to-r from-purple-600 to-pink-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar