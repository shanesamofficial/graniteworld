import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reviews from '../components/Reviews.tsx';

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#334155,transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-32">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Granite, Kadappa & Nano White Solutions
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Custom cutting, edge moulding, polishing and drilling for countertops, flooring, stairs, kallara, meezan boards & more. Fabricated exactly to your measurements with durable finishing.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="bg-highlight text-slate-900 font-medium px-6 py-3 rounded-md shadow hover:brightness-110 transition">Explore Products</Link>
              <Link to="/contact" className="border border-slate-600 hover:border-slate-400 text-slate-200 px-6 py-3 rounded-md transition">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>
  <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: 'Premium Materials', text: 'Sourced from trusted quarries and leading engineered stone brands.' },
            { title: 'Precision Fabrication', text: 'Laser templating, CNC cutting, and hand finishing for perfect fit.' },
            { title: 'Lifetime Value', text: 'Durable, low-maintenance surfaces that add lasting property value.' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-slate-800/60 bg-slate-900/40 p-6 backdrop-blur">
              <h3 className="font-medium text-lg mb-2 text-highlight">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
  </section>
  <Reviews />
    </div>
  );
}
