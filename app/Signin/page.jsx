"use client";

import { useEffect } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  console.log(status);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/Home");
    }
  }, [status, router]);

  if (status === "loading") return null;

  return (
<section className=" w-full bg-[#f7f3ee] px-4 py-12 sm:px-6 pt-24 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative grid overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)] md:grid-cols-2"
        >
          {/* Left: Visual */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#e7d8c2_0%,transparent_45%),radial-gradient(circle_at_80%_30%,#c7d3cc_0%,transparent_50%),linear-gradient(180deg,#f8f2ea_0%,#efe8df_100%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[20px] font-semibold tracking-widest text-black/70" style={{ fontFamily: '"Caveat Brush", cursive' }}>
                Travelator ✈️
              </div>
              <div style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>
                <h2 className="text-3xl font-semibold leading-tight text-[#1e1a16]">
                  Make every login feel like the start of a journey.
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/60">
                  Sign in to pick up where you left off. Save routes, keep notes, and explore
                  more thoughtfully.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-black/50">
                <span className="inline-block h-2 w-2 rounded-full bg-[#2f6b5f]" />
                Secure, private, and yours.
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative z-10 p-6 sm:p-10" style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>
            <div className="mb-8" >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
                Welcome back
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-[#1e1a16]">
                Sign in to continue
              </h1>
            </div>

            <button
              onClick={() => signIn("google")}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-black/10 bg-white py-2.5 text-sm font-medium text-[#1e1a16] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-black/10" />
              <span className="text-xs font-medium uppercase tracking-widest text-black/40">
                or
              </span>
              <div className="h-px flex-1 bg-black/10" />
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-black/50">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-black/10 bg-[#faf7f2] px-4 py-2.5 text-sm text-[#1e1a16] placeholder-black/40 outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-black/50">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-black/10 bg-[#faf7f2] px-4 py-2.5 text-sm text-[#1e1a16] placeholder-black/40 outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-black/60">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-black" />
                  Remember me
                </label>
                <Link href="#" className="hover:text-black">
                  Forgot password?
                </Link>
              </div>

              <button className="w-full rounded-xl bg-[#1e1a16] py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black">
                Sign in
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-black/60">
              Don’t have an account?{" "}
              <Link href="/signup" className="font-semibold text-black hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
