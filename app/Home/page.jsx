"use client";

import { motion } from "framer-motion";
import Link from "next/link";


const stories = [
  {
    id: 1,
    place: "Kerala",
    read: "6 min read",
    title: "The days I stopped checking the time",
    excerpt:
      "I arrived with a plan, but the rain changed everything. Mornings stretched longer, conversations felt deeper, and leaving became harder than expected…",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    place: "Kyoto",
    read: "7 min read",
    title: "A slow winter that taught me patience",
    excerpt:
      "Temple bells, quiet alleys, and one small cafe where time moved like steam. I stayed an extra week and never regretted it.",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    place: "Lisbon",
    read: "5 min read",
    title: "The city that kept changing the plan",
    excerpt:
      "Every morning began with a list. Every night ended with a new one. The city kept rewriting the itinerary — and it was better for it.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  },
];

const storyIdeas = [
  "A trip delayed by rain",
  "Getting stuck somewhere unexpected",
  "Finding calm in bad weather",
  "Conversations during a wait",
];

const trendingThemes = ["Slow travel", "Solo journeys", "Staying longer", "First trips"];
const travelSmarter = [
  "Saving money on local transport",
  "Avoiding tourist traps",
  "Staying like a local",
  "Best times to visit places",
];

export default function CreateAndDiscover() {
  return (
    <main
      className="min-h-screen bg-[#f7f3ee] text-[#191311]"
      style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-12 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(202,165,75,0.12),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(35,26,24,0.10),transparent_40%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-start">
            {/* LEFT: SEARCH + CONTEXT */}
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-[#191311]/10 bg-[#f9f4ed] px-4 py-1 text-[16px] tracking-[0.24em] text-[#5b4c45]"
                style={{ fontFamily: '"Caveat Brush", cursive' }}
              >
                Travelator Library
                <span className="h-1 w-1 rounded-full bg-[#caa54b]" />
                Curated
              </span>

              <h1 className="mt-5 text-3xl md:text-4xl leading-tight text-[#191311]">
                Your travel library
              </h1>

              <p className="mt-3 text-[15px] leading-relaxed text-[#5b4c45]">
                New stories, trusted notes, and journeys worth saving.
              </p>

              <div className="mt-6">
                <label htmlFor="story-search" className="sr-only">
                  Search stories
                </label>
                <input
                  id="story-search"
                  type="search"
                  placeholder="Search destinations, themes, or writers"
                  className="w-full rounded-full border border-[#191311]/10 bg-[#f9f4ed] px-4 py-3 text-sm text-[#191311] placeholder:text-[#9a8f84] shadow-[0_16px_40px_-30px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#5b4c45]">
                <span className="rounded-full border border-[#191311]/10 bg-[#f9f4ed] px-3 py-1">
                  Saved 12
                </span>
                <span className="rounded-full border border-[#191311]/10 bg-[#f9f4ed] px-3 py-1">
                  Unread 5
                </span>
                <span className="rounded-full border border-[#191311]/10 bg-[#f9f4ed] px-3 py-1">
                  New this week 3
                </span>
              </div>
            </div>

            {/* RIGHT: PRIMARY ACTION + FEATURE */}
            <div className="flex flex-col gap-4">
              <Link
                href="/write"
                className="rounded-full bg-[#191311] px-6 py-3 text-sm font-medium text-[#f6f1e9] shadow-[0_14px_40px_-20px_rgba(0,0,0,0.55)] transition hover:bg-[#231a18] text-center"
              >
                Write your story
              </Link>

              <div className="rounded-2xl border border-[#191311]/10 bg-[#f9f4ed] p-5 shadow-[0_40px_110px_-90px_rgba(0,0,0,0.45)]">
                <p className="uppercase tracking-[0.2em] text-[10px] text-[#8a7a6e]">
                  Collection of the week
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80"
                    alt="Collection cover"
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-[#191311] font-medium leading-snug">
                      Rain‑washed stays
                    </p>
                    <p className="text-xs text-[#5b4c45]">
                      4 stories · slow itineraries
                    </p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-xs text-[#5b4c45] underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
                >
                  View collection
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 COLUMN LAYOUT */}
      <section className="px-6 pb-32 pt-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_240px] gap-16">
          {/* LEFT */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-10 text-sm">
              <div>
                <p className="uppercase tracking-[0.2em] text-[10px] text-[#8a7a6e] mb-3">
                  Why this works
                </p>
                <p className="text-[#5b4c45] leading-relaxed">
                  Every story comes from someone who already made the trip — the
                  right calls, the wrong turns, and the lessons that usually cost
                  time or money.
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[10px] text-[#8a7a6e] mb-3">
                  Story ideas
                </p>
                <ul className="space-y-2 text-[#5b4c45]">
                  {storyIdeas.map((idea) => (
                    <li key={idea}>• {idea}</li>
                  ))}
                </ul>
              </div>

              <div
                className="italic text-[#7a6f65]"
                style={{ fontFamily: '"Caveat Brush", cursive' }}
              >
                These are prompts — your story decides the direction.
              </div>
            </div>
          </aside>

          {/* CENTER */}
          <div id="stories" className="space-y-20 max-w-3xl">
            {stories.map((story) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="group border-b border-[#191311]/10 pb-16"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#8a7a6e]">
                  {story.place} · {story.read}
                </p>

                <h3 className="mt-2 text-2xl leading-snug text-[#191311]">
                  {story.title}
                </h3>

                <p className="mt-4 text-[17px] leading-[1.75] text-[#5b4c45]">
                  {story.excerpt}
                </p>

                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#191311] underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
                >
                  Continue reading
                  <span aria-hidden>→</span>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* RIGHT */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-10 text-sm">
              <div>
                <p className="uppercase tracking-[0.2em] text-[10px] text-[#8a7a6e] mb-3">
                  What you’ll find here
                </p>
                <p className="text-[#5b4c45] leading-relaxed">
                  Practical advice, local insights, money-saving hacks, and
                  honest warnings — shared by travelers who learned them the hard
                  way.
                </p>
              </div>

              <div className="rounded-xl border border-[#191311]/10 bg-[#f9f4ed] p-4 shadow-[0_26px_60px_-50px_rgba(0,0,0,0.35)]">
                <p className="uppercase tracking-[0.2em] text-[10px] text-[#8a7a6e] mb-2">
                  Featured
                </p>
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                  alt="Featured story"
                  className="h-28 w-full rounded-md object-cover"
                />
                <p className="mt-3 text-[#5b4c45] font-medium leading-snug">
                  A quiet winter in a mountain village
                </p>
                <Link
                  href="#"
                  className="mt-2 inline-flex items-center gap-2 text-xs text-[#5b4c45] underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
                >
                  Read
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[10px] text-[#8a7a6e] mb-3">
                  Trending themes
                </p>
                <ul className="space-y-2 text-[#5b4c45]">
                  {trendingThemes.map((theme) => (
                    <li key={theme}>• {theme}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[10px] text-[#8a7a6e] mb-3">
                  Travel smarter
                </p>
                <ul className="space-y-2 text-[#5b4c45]">
                  {travelSmarter.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[10px] text-[#8a7a6e] mb-3">
                  Travel notes
                </p>
                <p className="text-[#5b4c45] leading-relaxed">
                  Some regions reveal their best side only during specific
                  seasons — fewer crowds, lower prices, and places that rarely
                  show up on Instagram.
                </p>
              </div>

              <div
                className="italic text-[#7a6f65]"
                style={{ fontFamily: '"Caveat Brush", cursive' }}
              >
                Some stories take time — they’re written slowly, and read the
                same way.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
