import { toast } from 'react-toastify'

const assetMap = import.meta.glob('../../assets/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
})

function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    toast.error('Removed from cart', { position: 'top-right', autoClose: 3000, icon: '❌' })
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    setCart([])
    toast.success('Checkout successful', { position: 'top-right', autoClose: 3000 })
  }

  if (cart.length === 0) {
    return (
      <div className="rounded-2xl border border-base-200 bg-base-100 p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-base-200 bg-base-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-14 w-14 text-black opacity-60"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386a1.5 1.5 0 0 1 1.464 1.17l.383 1.723m0 0 1.46 6.57a1.5 1.5 0 0 0 1.465 1.174h8.572a1.5 1.5 0 0 0 1.465-1.174l1.058-4.761a1.125 1.125 0 0 0-1.099-1.369H5.483m0 0L4.5 3.75M8.25 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm9 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        <p className="text-lg font-medium text-base-content/70">No items in the cart</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm md:p-8">
      <h3 className="text-2xl font-bold text-base-content">Your Cart</h3>

      <div className="mt-6 space-y-4">
        {cart.map((item) => {
          const iconSrc = assetMap[`../../${item.icon}`]
          return (
            <div key={item.id} className="flex items-center gap-4 border-b border-base-200 pb-4 last:border-b-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-base-50">
                <img src={iconSrc} alt={item.name} className="h-6 w-6 object-contain" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-base-content">{item.name}</h4>
                <p className="text-sm text-base-content/60">${item.price}</p>
              </div>
              <button
                className="text-sm font-medium text-red-500 hover:text-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          )
        })}
      </div>

      <div className="mt-6 border-t border-base-200 pt-6">
        <div className="mb-6 flex items-center justify-between text-xl">
          <span className="font-medium text-base-content/70">Total:</span>
          <span className="text-2xl font-bold text-base-content">${total}</span>
        </div>
        <button
          className="btn w-full rounded-full normal-case border-none bg-[linear-gradient(90deg,#4F46E5_0%,#6D28D9_50%,#9333EA_100%)] px-6 py-2 text-white shadow-md transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg"
          onClick={handleCheckout}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
