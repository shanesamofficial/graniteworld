export default function Services() {
  const services = [
    {
      name: 'Custom Slab Cutting',
      desc: 'Precise cutting of Granite, Kadappa, Nano White and other stones to exact customer measurements using professional equipment.'
    },
    {
      name: 'Edge Moulding & Profiling',
      desc: 'Bullnose, bevel, ogee, chamfer and custom edge profiles finished with smooth polishing.'
    },
    {
      name: 'Surface Polishing',
      desc: 'Professional polishing and re‑polishing to restore natural shine or match finish across pieces.'
    },
    {
      name: 'Drilling & Cut‑outs',
      desc: 'Sink cut‑outs, hob openings, tap & accessory holes drilled with accuracy and clean finish.'
    },
    {
      name: 'Kitchen Countertops',
      desc: 'Design and fabrication of durable, attractive kitchen worktops and backsplashes.'
    },
    {
      name: 'Flooring & Stairs',
      desc: 'Granite and Kadappa stone installation for floors, steps and risers with slip‑resistant finishing options.'
    },
    {
      name: 'Kallara / Utility Surfaces',
      desc: 'Custom stone work for utility, wash & storage areas built for strength and hygiene.'
    },
    {
      name: 'Meezan & Boards',
      desc: 'Fabrication of weighing/meezan platforms and chopping / working boards in long‑lasting stone.'
    }
  ];

  const materials = [
    { name: 'Granite', text: 'Wide variety of colours & natural vein patterns. High durability.' },
    { name: 'Kadappa', text: 'Strong limestone option ideal for utility areas & economical flooring.' },
    { name: 'Nano White', text: 'Premium engineered white surface with consistent finish and brightness.' }
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-28">
      <h1 className="font-display text-4xl font-semibold mb-8">Services</h1>
      <p className="text-slate-300 max-w-3xl leading-relaxed mb-14 text-sm md:text-base">
        We provide end‑to‑end stone fabrication and installation. From raw slab selection to onsite fitting, every
        stage is handled with accuracy so the finished work matches your exact requirement and lasts for years.
      </p>
      <h2 className="font-display text-2xl font-semibold mb-6">What We Do</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
        {services.map(s => (
          <div key={s.name} className="rounded-lg border border-slate-800/60 bg-slate-900/40 p-5">
            <h3 className="text-highlight font-medium mb-2 text-sm md:text-base">{s.name}</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <h2 className="font-display text-2xl font-semibold mb-6">Materials</h2>
      <div className="grid md:grid-cols-3 gap-7">
        {materials.map(m => (
          <div key={m.name} className="rounded-lg border border-slate-800/60 bg-slate-900/40 p-5">
            <h3 className="text-highlight font-medium mb-2 text-sm md:text-base">{m.name}</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
