import products from '../data/products.json'
import ProductCard from './ProductCard'

const assetMap = import.meta.glob('../../assets/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
})

function Products({ addToCart, cart }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const iconSrc = assetMap[`../../${product.icon}`]
        const isInCart = cart.some((item) => item.id === product.id)
        return (
          <ProductCard
            key={product.id}
            product={product}
            iconSrc={iconSrc}
            addToCart={addToCart}
            isInCart={isInCart}
          />
        )
      })}
    </div>
  )
}

export default Products
