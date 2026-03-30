import products from '../data/products.json'
import ProductCard from './ProductCard'

const assetMap = import.meta.glob('../../assets/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
})

function Products() {
  return (
    <section className="bg-base-100 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-base-content md:text-5xl">Premium Digital Tools</h2>
          <p className="mt-4 text-sm leading-relaxed text-base-content/60 md:text-base">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => {
            const iconSrc = assetMap[`../../${product.icon}`]
            return <ProductCard key={product.id} product={product} iconSrc={iconSrc} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
