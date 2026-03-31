function Pricing() {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for getting started',
      price: 0,
      period: '/Month',
      button: 'Get Started Free',
      features: [
        'Access to 10 free tools',
        'Basic templates',
        'Community support',
        '1 project per month',
      ],
      highlighted: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Best for professionals',
      price: 29,
      period: '/Month',
      button: 'Start Pro Trial',
      badge: 'Most Popular',
      features: [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Cloud sync',
        'Advanced analytics',
      ],
      highlighted: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For teams and businesses',
      price: 99,
      period: '/Month',
      button: 'Contact Sales',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom branding',
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="bg-base-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-base-content md:text-5xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-base text-base-content/60">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex h-full flex-col rounded-3xl border transition-all duration-300 ${
                plan.highlighted
                  ? 'border-transparent bg-gradient-to-br from-purple-600 to-purple-700 shadow-lg shadow-purple-200'
                  : 'border-base-200 bg-white shadow-sm hover:shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-1 text-sm font-semibold text-base-900">
                  {plan.badge}
                </div>
              )}

              <div className={`p-8 ${plan.highlighted ? 'text-white' : ''}`}>
                <h3 className="text-3xl font-bold">{plan.name}</h3>
                <p className={`mt-1 text-sm ${plan.highlighted ? 'text-purple-100' : 'text-base-content/60'}`}>
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={plan.highlighted ? 'text-purple-100' : 'text-base-content/60'}>{plan.period}</span>
                </div>
              </div>

              <div className={`flex flex-1 flex-col border-t px-8 py-8 ${plan.highlighted ? 'border-purple-500/30' : 'border-base-200'}`}>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                          plan.highlighted ? 'text-purple-100' : 'text-emerald-500'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={`text-sm ${plan.highlighted ? 'text-purple-50' : 'text-base-content'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <button
                    className="w-full rounded-full border-none bg-[linear-gradient(to_right,#2563eb_0%,#2563eb_78%,#4f46e5_90%,#7c3aed_100%)] py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg"
                  >
                    {plan.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
