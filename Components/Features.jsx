import Link from "next/link";


export default function FeaturedStory() {
  return (
    <section className="py-36 bg-gradient-to-b from-white to-transparent">
      <div className="max-w-4xl mx-auto px-6" >

        {/* Section label */}
        <p className="text-xs uppercase tracking-widest text-gray-600 mb-6">
          Inside the platform
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#0d2c24]" style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>
          How experienced travellers plan iconic trips —
          <span className="text-[#0d2c24]/60"> without overspending</span>
        </h2>

        {/* Sub meta */}
        <p className="mt-4 text-sm text-gray-500" style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>
          A glimpse into the kind of conversations shared on Wanderly
        </p>

        {/* Editorial divider */}
        <div className="mt-10 h-px w-24 bg-gradient-to-r from-cyan-300 to-transparent" />

        {/* Preview body */}
        <div className="relative mt-10 space-y-6 text-lg text-gray-700 leading-relaxed" style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>

          <p>
            On Travelator 🌅, travel stories go beyond beautiful photos and viral reels.
            They focus on <span className="font-medium">decision-making</span> —
            how people actually plan, budget, and experience destinations in a smarter way.
          </p>

          <p>
            Conversations often feature seasoned travel professionals, founders,
            and long-time planners who have spent years understanding what truly
            makes a trip memorable — and where most people unknowingly overspend.
          </p>

          {/* Fade-out teaser */}
          <div className="relative">
            <p>
              From choosing the right time to travel, to booking locations that offer
              better value than luxury hotspots, these stories break down travel
              planning in a way that students, families, and first-time travellers
              can realistically follow.
            </p>

            {/* Fade mask */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>

        {/* Insight highlights */}
        <div className="mt-12 border-l border-gray-200 pl-6 space-y-3 text-gray-700" style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>
          <p>• Planning international trips on realistic budgets</p>
          <p>• Identifying seasons when flight and hotel prices drop drastically</p>
          <p>• Choosing locations that maximize experience, not just status</p>
        </div>

        {/* CTA */}
        <div className="mt-14" style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>
          <button className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-900">
            <Link href="/Signin" >
              Read featured stories
            </Link>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
