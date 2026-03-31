const badgeStyles = {
  popular: 'badge badge-primary badge-soft',
  new: 'badge badge-success badge-soft',
  'best seller': 'badge badge-warning badge-soft',
}

function ProductCard({ product, iconSrc, addToCart }) {
  const tagClass = badgeStyles[product.tagType] || 'badge badge-neutral badge-soft'
  const periodLabel = product.period === 'monthly' ? '/Mo' : '/One-Time'

  return (
    <article className="card rounded-2xl border border-base-200 bg-base-100 shadow-sm">
      <div className="card-body p-5 md:p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-base-200 bg-base-100">
            <img src={iconSrc} alt={product.name} className="h-8 w-8 object-contain" />
          </div>
          <span className={tagClass}>{product.tag}</span>
        </div>

        <h3 className="text-3xl font-bold text-base-content">{product.name}</h3>

        <p className="mt-3 min-h-16 text-sm leading-relaxed text-base-content/65">{product.description}</p>

        <div className="mt-4 flex items-end gap-1 text-base-content">
          <span className="text-3xl font-bold">${product.price}</span>
          <span className="pb-1 text-sm text-base-content/70">{periodLabel}</span>
        </div>

        <ul className="mt-4 space-y-2 text-base-content/75">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <span className="text-success">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className="btn mt-6 w-full rounded-full normal-case border-none bg-[linear-gradient(90deg,#4F46E5_0%,#6D28D9_50%,#9333EA_100%)] px-6 py-2 text-white shadow-md transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg"
          onClick={() => addToCart(product)}
        >
          Buy Now
        </button>
      </div>
    </article>
  )
}

export default ProductCard
