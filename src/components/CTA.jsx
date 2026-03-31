function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-600 to-pink-600 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl lg:whitespace-nowrap">
            Ready To Transform Your Workflow?
          </h2>
          <p className="mt-6 text-lg text-purple-100">
            Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Explore Products
            </button>
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View Pricing
            </button>
          </div>

          <p className="mt-8 text-sm text-purple-100">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA
