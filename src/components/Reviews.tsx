import { useEffect, useState, useRef } from 'react';

interface Review { author: string; text: string; rating: number; time: string; profilePhoto?: string; }
interface ReviewsResponse { name: string; rating: number; total: number; reviews: Review[]; }

const FALLBACK: ReviewsResponse = {
	name: 'Granite World', rating: 4.9, total: 120,
	reviews: [
		{ author: 'Ramesh K', rating: 5, time: '2 weeks ago', text: 'Excellent cutting precision and fast delivery. My kitchen counter fits perfectly.', profilePhoto: '' },
		{ author: 'Anita P', rating: 5, time: '1 month ago', text: 'Great finish on Nano White slabs. Polishing quality is top notch.', profilePhoto: '' },
		{ author: 'Sajith', rating: 5, time: '3 months ago', text: 'Professional team – drilled sink & hob cut-outs exactly as requested.', profilePhoto: '' },
	]
};

export default function Reviews() {
	const [data, setData] = useState<ReviewsResponse | null>(null);
	const [index, setIndex] = useState(0);
	const timerRef = useRef<number | null>(null);

	useEffect(() => {
		fetch('/reviews')
			.then(r => r.ok ? r.json() : Promise.reject(r.statusText))
			.then((json: ReviewsResponse) => { setData(json.reviews?.length ? json : FALLBACK); })
			.catch(() => setData(FALLBACK));
	}, []);

	useEffect(() => {
		timerRef.current && window.clearTimeout(timerRef.current);
		timerRef.current = window.setTimeout(() => {
			setIndex(i => {
				const length = (data || FALLBACK).reviews.length;
				return (i + 1) % length;
			});
		}, 6000);
		return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
	}, [index, data]);

	const display = data || FALLBACK;
	const reviews = display.reviews;
	const active = reviews[index];

	return (
		<section className="mx-auto max-w-5xl px-6 py-20">
			<div className="flex items-center gap-3 mb-8">
				<h2 className="font-display text-3xl font-semibold">Customer Reviews</h2>
				<span className="text-sm text-slate-400">({display.rating.toFixed(1)} ★ / {display.total}+)</span>
			</div>
			<div className="relative rounded-xl border border-slate-800/60 bg-slate-900/40 p-8 overflow-hidden">
				<div className="flex flex-col md:flex-row gap-8 items-start">
					<div className="flex-1">
						<p className="text-slate-300 leading-relaxed text-base md:text-lg">“{active.text}”</p>
						<div className="mt-6 flex items-center gap-4 text-sm">
							{active.profilePhoto && <img src={active.profilePhoto} alt={active.author} className="h-10 w-10 rounded-full object-cover" />}
							<div>
								<div className="font-medium text-slate-100">{active.author}</div>
								<div className="text-slate-400 text-xs flex items-center gap-2">
									<span className="text-yellow-400">{'★'.repeat(active.rating)}{'☆'.repeat(5-active.rating)}</span>
									<span>{active.time}</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex md:flex-col gap-3 md:w-48 w-full md:items-stretch items-center justify-center">
						{reviews.map((r, i) => (
							<button
								key={i}
								onClick={() => setIndex(i)}
								className={`group flex-1 md:flex-none md:w-full rounded-md border px-3 py-2 text-left transition hover:border-highlight/70 ${i===index ? 'border-highlight bg-highlight/10' : 'border-slate-700/60 bg-slate-800/40'}`}
								aria-label={`Show review from ${r.author}`}
							>
								<div className="text-xs font-medium truncate text-slate-200 group-hover:text-highlight">{r.author}</div>
								<div className="text-[10px] text-slate-400">{'★'.repeat(r.rating)}</div>
							</button>
						))}
					</div>
				</div>
				<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
			</div>
			<p className="mt-4 text-xs text-slate-500">Live data fetched from Google (falls back to sample). Configure env vars in Cloudflare Pages.</p>
		</section>
	);
}

