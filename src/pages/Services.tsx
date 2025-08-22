export default function Services() {
	const services = [
		{ title: 'Precision Cutting', text: 'CNC & bridge saw cutting to exact measurement templates.' },
		{ title: 'Edge Profiling', text: 'Bevel, half bullnose, full bullnose, chamfer & custom edges.' },
		{ title: 'Polishing & Finishing', text: 'High‑gloss, honed & leather finishes with consistent sheen.' },
		{ title: 'Drilling & Cut‑outs', text: 'Sink, faucet, hob, socket & service openings – clean edges.' },
		{ title: 'On‑Site Fitting', text: 'Professional alignment, joint sealing & final polishing.' },
		{ title: 'Restoration', text: 'Refinishing dull or scratched countertops back to life.' }
	];
	return (
		<div className="mx-auto max-w-6xl px-6 pt-32 pb-24">
			<h1 className="font-display text-4xl font-semibold mb-10">Services</h1>
			<p className="text-slate-400 max-w-2xl mb-12">From raw slab selection to on‑site final fitting, we manage every step with quality control to deliver durable surfaces that stay true and flat.</p>
			<div className="grid md:grid-cols-3 gap-8">
				{services.map(s => (
					<div key={s.title} className="rounded-lg border border-slate-800/60 bg-slate-900/40 p-5">
						<h3 className="font-medium mb-2 text-highlight">{s.title}</h3>
						<p className="text-xs leading-relaxed text-slate-400">{s.text}</p>
					</div>
				))}
			</div>
		</div>
	);
}

