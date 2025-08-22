export default function Products() {
	const categories = [
		{ title: 'Granite Slabs', text: 'Wide colour range, durable polished, honed, flamed & leather finishes.' },
		{ title: 'Kadappa Stone', text: 'Economical dense limestone for steps, utility, exterior cladding.' },
		{ title: 'Nano White', text: 'Uniform white engineered surface – bright modern premium finish.' },
		{ title: 'Marble & Quartzite', text: 'Premium natural patterns for luxury interiors & focal surfaces.' },
		{ title: 'Quartz Surfaces', text: 'Low‑maintenance engineered slabs for hygiene & stain resistance.' },
		{ title: 'Custom Pieces', text: 'Sink cut‑outs, hob cut‑outs, edge profiling, skirting, staircase treads.' }
	];
	return (
		<div className="mx-auto max-w-6xl px-6 pt-32 pb-24">
			<h1 className="font-display text-4xl font-semibold mb-10">Products</h1>
			<p className="text-slate-400 max-w-2xl mb-12">We stock & fabricate a curated selection of stones chosen for stability, finish quality and long‑term performance. Every slab is inspected before processing.</p>
			<div className="grid md:grid-cols-3 gap-8">
				{categories.map(c => (
					<div key={c.title} className="rounded-lg border border-slate-800/60 bg-slate-900/40 p-5">
						<h3 className="font-medium mb-2 text-highlight">{c.title}</h3>
						<p className="text-xs leading-relaxed text-slate-400">{c.text}</p>
					</div>
				))}
			</div>
		</div>
	);
}

