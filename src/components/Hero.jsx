import playIcon from '../../assets/icons/Play.png'
import bannerImage from '../../assets/icons/banner.png'

function Hero() {
  return (
    <section className="bg-base-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="badge badge-outline border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-4xl font-bold leading-tight text-base-content md:text-6xl">
              Supercharge Your Digital Workflow
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-base-content/70 md:text-lg">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating
              faster today.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="btn btn-primary normal-case text-white">Explore Products</button>

              <button className="btn btn-outline normal-case">
                <img src={playIcon} alt="Play" className="h-4 w-4" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src={bannerImage} alt="Digital workflow" className="w-full max-w-[560px] rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero