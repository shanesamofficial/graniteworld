import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reviews from '../components/Reviews.tsx';

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#334155,transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:pb-32">
          <div className="grid gap-16 lg:gap-10 lg:grid-cols-2 items-center">
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
            <div className="relative group rounded-2xl overflow-hidden border border-slate-800/60 bg-slate-900/40 shadow-xl ring-1 ring-black/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-slate-900/20 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1280&q=75"
                alt="Modern granite kitchen countertop installation"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 backdrop-blur-sm bg-slate-950/40 text-xs text-slate-300 flex items-center justify-between gap-4">
                <span className="font-medium tracking-wide text-slate-200">Premium Granite Countertop</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase tracking-wide text-slate-400">Fabrication • Polishing • Fitting</span>
              </div>
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
