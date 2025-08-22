export default function Products() {
  const categories = [
    { name: 'Granite', desc: 'Wide selection of colours, grain and natural veining. High hardness and heat resistance.' },
    { name: 'Kadappa', desc: 'Dense, durable limestone suited for utility areas, kallara, meezan platforms and economical flooring.' },
    { name: 'Nano White', desc: 'Premium engineered white surface offering uniform brightness and easy maintenance.' },
    { name: 'Quartz', desc: 'Engineered stone for consistent design patterns and low maintenance countertops.' },
    { name: 'Marble', desc: 'Classic luxury stone—ideal for vanities, wall cladding and décor surfaces.' },
    { name: 'Quartzite', desc: 'Natural stone combining beauty of marble with strength exceeding granite.' },
    { name: 'Sinks & Edges', desc: 'Undermount and top-mount sink options plus custom edge profiles: bullnose, bevel, chamfer, ogee.' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-28">
      <h1 className="font-display text-4xl font-semibold mb-10">Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(c => (
          <div key={c.name} className="rounded-lg border border-slate-800/60 bg-slate-900/40 p-6">
            <h3 className="text-lg font-medium text-highlight mb-2">{c.name}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
  <p className="mt-12 text-slate-400 text-sm max-w-2xl leading-relaxed">Need a special size? We provide precision cutting, drilling for sinks / hobs / taps, and professional profiling & polishing so every piece fits perfectly. Looking for something rare? We work with multiple regional suppliers to source exotic stones quickly.</p>
    </div>
  );
}
