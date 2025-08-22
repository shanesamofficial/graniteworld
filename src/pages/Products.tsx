export default function Products() {
  const categories = [
    { name: 'Granite', desc: 'Natural stone slabs with unique veining and durability.' },
    { name: 'Quartz', desc: 'Engineered stone with consistent patterns and low maintenance.' },
    { name: 'Marble', desc: 'Elegant natural stone ideal for vanities and specialty applications.' },
    { name: 'Quartzite', desc: 'Harder-than-granite natural stone with exotic looks.' },
    { name: 'Sinks & Edges', desc: 'Undermount sinks and custom edge profiles to finish your project.' },
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
      <p className="mt-12 text-slate-400 text-sm max-w-2xl leading-relaxed">Looking for something rare? We maintain relationships with multiple regional slab yards. If you need a specific color or exotic stone, we can source it quickly.</p>
    </div>
  );
}
