export default function DestinationTeaser() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl font-semibold">
            Popular destinations
          </h2>
          <span className="text-sm text-gray-500">
            Curated from real journeys
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {[
            {
              name: "Iceland",
              img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            },
            {
              name: "Bali",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            },
            {
              name: "Paris",
              img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
            },
          ].map((d, i) => (
            <div
              key={i}
              className="group relative h-80 rounded-2xl overflow-hidden"
            >
              <img
                src={d.img}
                alt={d.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
              <span className="absolute bottom-6 left-6 text-white text-xl font-medium">
                {d.name}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
