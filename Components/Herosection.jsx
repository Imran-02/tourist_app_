import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-[#f7f3ee] overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.03),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center bg-[radial-gradient(circle_at_20%_20%,rgba(13,44,36,0.03),transparent_40%)]">
        {/* LEFT */}
        <div className="container relative z-10 mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#191311] text-[#f6f1e9] text-[10px] font-bold uppercase tracking-[0.25em] mb-10 border border-[#f6f1e9]/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#e6d5a5]" />
            <span style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>
              The Definitive Travel Intelligence
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.05em] leading-[0.95] text-[#191311] mb-10"
            style={{ fontFamily: '"Caveat Brush", cursive' }}
          >
            Travelator,
            <br />
            <span className="font-serif text-4xl md:text-6xl lg:text-7xl italic bg-clip-text text-transparent bg-gradient-to-br from-[#191311] to-[#caa54b] font-normal">
              Learn from the elite
            </span>
          </h1>

          <p
            className="mt-8 text-lg text-[#5b4c45] max-w-md leading-relaxed"
            style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
          >
            Discover journeys, places, and stories through people who have
            actually been there.
          </p>

          <div className="mt-12 flex gap-6">
            <button
              className="
                px-10 py-4 rounded-full
                bg-[#191311] text-[#f6f1e9] text-base font-bold
                transition-all duration-300 ease-out
                hover:bg-[#e6dcc8]
                hover:text-[#191311]
                active:scale-95
                shadow-2xl shadow-[#191311]/20
                w-full sm:w-auto cursor-pointer
              "
              style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
            >
              Explore journeys
            </button>

            <button
              className="
                px-10 py-4 rounded-full
                bg-[#191311] text-[#f6f1e9] text-base font-bold
                border border-white/10
                transition-all duration-300 ease-out
                hover:bg-[#e6dcc8]
                hover:text-[#191311]
                flex items-center gap-2
                w-full sm:w-auto justify-center
                cursor-pointer
              "
              style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
            >
              How it works →
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Travel"
            className="w-full h-[500px] object-cover rounded-[32px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
