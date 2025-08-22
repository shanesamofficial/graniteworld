export default function Gallery() {
	const images = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/granite-${i}/600/400`);
	return (
		<div className="mx-auto max-w-6xl px-6 pt-32 pb-24">
			<h1 className="font-display text-4xl font-semibold mb-10">Gallery</h1>
			<p className="text-slate-400 max-w-2xl mb-12">Recent fabrication & installation highlights. (Replace with your real project photos.)</p>
			<div className="grid md:grid-cols-3 gap-6">
				{images.map(src => (
					<div key={src} className="relative overflow-hidden rounded-lg border border-slate-800/60 bg-slate-900/40">
						<img src={src} alt="Granite project" className="h-full w-full object-cover transition hover:scale-105" loading="lazy" />
					</div>
				))}
			</div>
		</div>
	);
}

