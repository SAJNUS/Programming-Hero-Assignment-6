const assetMap = import.meta.glob('../../assets/icons/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
})

function Steps() {
  const steps = [
    {
      id: 1,
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: 'user.png',
    },
    {
      id: 2,
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: 'package.png',
    },
    {
      id: 3,
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: 'rocket.png',
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-base-content md:text-5xl">Get Started In 3 Steps</h2>
          <p className="mt-4 text-base text-base-content/60">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const iconSrc = assetMap[`../../assets/icons/${step.icon}`]
            return (
              <div
                key={step.id}
                className="group relative rounded-2xl border border-base-200 bg-base-100 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
              >
                <div className="flex justify-center">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100">
                    <img src={iconSrc} alt={step.title} className="h-12 w-12" />
                    <div className="absolute right-0 top-0 flex h-8 w-8 -translate-y-1/4 translate-x-1/4 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-xs font-bold text-white">
                      0{step.id}
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 text-center text-2xl font-bold text-base-content">{step.title}</h3>
                <p className="mt-3 text-center text-base text-base-content/60">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Steps
