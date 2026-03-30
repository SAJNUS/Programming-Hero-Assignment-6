const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
]

function Stats() {
  return (
    <section className="w-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#A21CAF] py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 divide-y divide-white/20 md:grid-cols-3 md:divide-x md:divide-y-0 md:divide-white/30">
          {stats.map((item) => (
            <div key={item.label} className="py-8 text-center md:py-6">
              <h3 className="text-5xl font-bold text-white md:text-6xl">{item.value}</h3>
              <p className="mt-3 text-xl text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
