export default function AfterHero() {
  return (
    <section className="relative bg-white">
      {/* HARD VISUAL BREAK FROM HERO */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />

      {/* HOW TRAVELATOR HELPS */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#191311]"
          style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
        >
          How{" "}
          <span className="font-semibold" style={{ fontFamily: '"Caveat Brush", cursive' }}>
            Travelator✈️
          </span>{" "}
          helps you travel better
        </h2>

        <p
          className="mt-4 text-center text-[#5b4c45] max-w-2xl mx-auto"
          style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
        >
          Real journeys, practical insights, and clarity — all in one place.
        </p>

        {/* BOX GRID */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Explore real journeys 🌍",
              desc: "Learn from people who’ve already experienced the destination.",
            },
            {
              title: "Understand smarter planning 🧭",
              desc: "Know what timing, choices, and locations truly matter.",
            },
            {
              title: "Travel with confidence 🌅",
              desc: "Plan clearly without relying on guesswork or trends.",
            },
            {
              title: "Insider strategies 🗺️",
              desc: "How experienced travellers plan without packaged tours.",
            },
            {
              title: "Expert conversations 🎙️",
              desc: "Insights from planners and professionals in travel.",
            },
            {
              title: "Budget clarity 💰",
              desc: "Understand costs, seasons, and where overspending happens.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                bg-[radial-gradient(circle_at_20%_20%,#efe3d2_0%,transparent_45%),radial-gradient(circle_at_80%_30%,#d9cfc1_0%,transparent_50%),linear-gradient(180deg,#f9f4ed_0%,#f0e7dc_100%)]
                border border-[#191311]/10
                p-8
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <h3 className="text-lg font-semibold text-[#191311]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-[#5b4c45] leading-relaxed max-w-[30ch]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST + FINAL CTA */}
      <div className="bg-gradient-to-r from-[#191311]/95 via-[#231a18]/92 to-[#14100f]/95">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            {/* LEFT — narrative */}
            <div className="md:col-span-7">
              <h2
                className="text-4xl md:text-5xl font-semibold leading-tight text-[#f6f1e9]"
                style={{ fontFamily: '"Caveat Brush", cursive' }}
              >
                Travel smarter,
                <br />
                <span className="text-[#caa54b]">not harder.</span>
              </h2>

              <ul
                className="mt-10 space-y-4 text-[#f0e9df]/80 text-[16px]"
                style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
              >
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#f6f1e9]" />
                  Built on insights from real travellers and experts
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#f6f1e9]" />
                  Practical knowledge you can actually use
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#f6f1e9]" />
                  Better decisions, less stress
                </li>
              </ul>
            </div>

            {/* RIGHT — CTA CARD */}
            <div className="md:col-span-5">
              <div
                className="
                  rounded-2xl
                  bg-white/10
                  backdrop-blur
                  border border-white/10
                  p-8
                "
                style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
              >
                <p className="text-sm text-[#f0e9df]/80 leading-relaxed mb-8">
                  Join a community of travellers who value clarity over noise.
                  Start planning your next meaningful journey today.
                </p>

                <a
                  href="/Signin"
                  className="
                    w-full inline-flex items-center justify-center gap-2
                    px-6 py-4
                    rounded-xl
                    bg-[#f6f1e9]
                    text-[#191311]
                    font-semibold text-sm
                    transition-all duration-300 ease-out
                    hover:bg-[#e6dcc8]
                    hover:text-[#191311]
                    active:scale-95
                    shadow-2xl shadow-[#191311]/20
                  "
                >
                  Get started
                  <span>→</span>
                </a>

                <p className="mt-4 text-xs text-[#f0e9df]/50 text-center">
                  No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
