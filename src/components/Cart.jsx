import { toast } from 'react-toastify'

const assetMap = import.meta.glob('../../assets/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
})

function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    toast.info('Removed from cart', { position: 'top-right', autoClose: 3000 })
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    setCart([])
    toast.success('Checkout successful', { position: 'top-right', autoClose: 3000 })
  }

  if (cart.length === 0) {
    return (
      <div className="rounded-2xl border border-base-200 bg-base-100 p-8 text-center shadow-sm">
        <p className="text-lg font-medium text-base-content/70">No items in cart</p>
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
          className="btn w-full rounded-full normal-case border-none bg-[linear-gradient(to_right,#2563eb_0%,#2563eb_78%,#4f46e5_90%,#7c3aed_100%)] text-white shadow-md transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg"
          onClick={handleCheckout}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
