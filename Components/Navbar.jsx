"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { status } = useSession();

  const isLoggedIn = status === "authenticated";

  const navLinks = [
    { label: "Home", href: isLoggedIn ? "/Home" : "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "Stories", href: "/stories" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center">
      <div
        className="
          w-[92%] max-w-7xl
          rounded-tr-4xl rounded-b-3xl
          backdrop-blur-xl
          bg-gradient-to-r from-[#191311]/94 via-[#231a18]/90 to-[#14100f]/94
          border border-white/12
          shadow-[0_18px_60px_-35px_rgba(0,0,0,0.75)]
        "
      >
        <div className="flex h-[72px] items-center justify-between px-6">
          {/* Logo */}
          <Link
            href={isLoggedIn ? "/Home" : "/"}
            className="text-[22px] md:text-[26px] font-semibold tracking-tight text-[#f6f1e9]"
            style={{ fontFamily: '"Caveat Brush", cursive' }}
          >
            Travelator ✈️
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="
                  relative text-[18px] font-medium text-[#f0e9df]/80
                  after:absolute after:left-1/2 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-[#f6f1e9]/70
                  after:-translate-x-1/2
                  after:transition-all after:duration-300
                  hover:text-[#f6f1e9] hover:after:w-full
                "
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div
            className="hidden md:flex items-center gap-4"
            style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
          >
            {!isLoggedIn ? (
              <Link
                href="/Signin"
                className="text-[17px] font-medium text-[#e6d5a5] hover:text-[#f5e9c9] transition"
              >
                Get started →
              </Link>
            ) : (
              <>
                <Link
                  href="/home"
                  className="inline-flex items-center rounded-full
                             bg-[#caa54b] px-4 py-2
                             text-[14px] font-medium text-[#0b1a15]
                             ring-1 ring-[#f0e2c0]/40
                             hover:bg-[#ddb45a] transition"
                >
                  Explore
                </Link>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-sm text-[#cfe6db]/70 hover:text-[#f6f1e9] transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[4px]"
            aria-label="Toggle menu"
          >
            <span className="w-5 h-[2px] bg-[#f6f1e9]" />
            <span className="w-5 h-[2px] bg-[#f6f1e9]" />
            <span className="w-5 h-[2px] bg-[#f6f1e9]" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 rounded-xl bg-[#14100f]/95 border border-white/12 shadow-md overflow-hidden">
            <nav className="flex flex-col divide-y divide-white/10">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 text-[16px] font-medium text-[#f0e9df] hover:bg-white/5"
                >
                  {label}
                </Link>
              ))}

              {!isLoggedIn ? (
                <Link
                  href="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 text-[15px] font-medium text-[#e6d5a5] hover:bg-white/5"
                >
                  Sign in
                </Link>
              ) : (
                <>
                  <Link
                    href="/home"
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-4 text-[15px] font-medium text-[#cfe6db] hover:bg-white/5"
                  >
                    Explore
                  </Link>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="px-6 py-4 text-left text-[15px] font-medium text-[#f3c2b2] hover:bg-white/5"
                  >
                    Logout
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
