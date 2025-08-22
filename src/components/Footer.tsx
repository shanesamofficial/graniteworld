import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="mt-24 border-t border-slate-800/60 bg-slate-950/80 py-16 text-sm">
			<div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
				<div>
					<h3 className="font-display text-lg font-semibold mb-3">Granite <span className="text-highlight">World</span></h3>
					<p className="text-slate-400 text-xs leading-relaxed">Precision fabrication of Granite, Kadappa, Nano White, Marble & Quartz surfaces – cutting, polishing, drilling & edge profiling.</p>
				</div>
				<div>
					<h4 className="mb-3 font-medium text-slate-200">Navigation</h4>
					<ul className="space-y-2 text-slate-400">
						<li><Link to="/products" className="hover:text-highlight">Products</Link></li>
						<li><Link to="/services" className="hover:text-highlight">Services</Link></li>
						<li><Link to="/gallery" className="hover:text-highlight">Gallery</Link></li>
						<li><Link to="/about" className="hover:text-highlight">About</Link></li>
						<li><Link to="/contact" className="hover:text-highlight">Contact</Link></li>
					</ul>
				</div>
				<div>
					<h4 className="mb-3 font-medium text-slate-200">Contact</h4>
					<ul className="space-y-2 text-slate-400 text-xs">
						<li>Madiyur, Kalpetta<br/>Kerala 673121</li>
						<li><a href="tel:+919526000677" className="hover:text-highlight">+91 95260 00677</a></li>
						<li><a href="tel:+917907868313" className="hover:text-highlight">+91 79078 68313</a></li>
						<li>Mon–Sat 9:00 am – 6:30 pm<br/>Sunday Closed</li>
					</ul>
				</div>
				<div>
					<h4 className="mb-3 font-medium text-slate-200">Materials</h4>
					<p className="text-slate-400 text-xs leading-relaxed">Granite · Kadappa · Nano White · Marble · Quartzite · Quartz</p>
				</div>
			</div>
			<div className="mt-10 text-center text-[11px] text-slate-600">© {new Date().getFullYear()} Granite World. All rights reserved.</div>
		</footer>
	);
}

