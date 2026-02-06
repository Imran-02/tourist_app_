export default function Footer() {
  return (
    <footer className="py-10 text-[#f0e9df]/90 bg-gradient-to-r from-[#191311]/94 via-[#231a18]/90 to-[#14100f]/94 border-t border-white/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3
            className="text-[#f6f1e9] text-3xl font-bold mb-4"
            style={{ fontFamily: '"Caveat Brush", cursive' }}
          >
            Travelator ✈️
          </h3>
          <p className="text-[#f0e9df]/80">
            Explore the world with our curated, eco-conscious travel experiences.
          </p>
        </div>

        <div style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>
          <h4 className="text-[#f6f1e9] font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-[#f0e9df]/80">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>
          <h4 className="text-[#f6f1e9] font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-[#f0e9df]/80">
            <li>Contact</li>
            <li>FAQs</li>
            <li>Terms & Policies</li>
          </ul>
        </div>

        <div style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}>
          <h4 className="text-[#f6f1e9] font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-[#f0e9df]/80">
            <span>🌐</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>
      </div>

      <div
        className="text-center mt-10 text-[#f0e9df]/60 text-sm"
        style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
      >
        © {new Date().getFullYear()} Travelator. All rights reserved.
      </div>
    </footer>
  );
}
