import products from '../data/products.json'
import ProductCard from './ProductCard'

const assetMap = import.meta.glob('../../assets/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
})

function Products({ addToCart }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => {
        const iconSrc = assetMap[`../../${product.icon}`]
        return <ProductCard key={product.id} product={product} iconSrc={iconSrc} addToCart={addToCart} />
      })}
    </div>
  )
}

export default Products
