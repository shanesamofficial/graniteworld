import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navItems = [
	{ to: '/', label: 'Home' },
	{ to: '/products', label: 'Products' },
	{ to: '/services', label: 'Services' },
	{ to: '/gallery', label: 'Gallery' },
	{ to: '/about', label: 'About' },
	{ to: '/contact', label: 'Contact' }
];

export default function Navbar() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
		window.addEventListener('keydown', onKey);
		document.body.style.overflow = open ? 'hidden' : '';
		return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
	}, [open]);

	return (
		<header className="fixed inset-x-0 top-0 z-40 backdrop-blur border-b border-slate-800/60 bg-slate-950/70">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				<Link to="/" className="font-display text-lg font-semibold tracking-wide">Granite <span className="text-highlight">World</span></Link>
				<nav className="hidden md:flex gap-8 text-sm">
					{navItems.map(i => (
						<NavLink key={i.to} to={i.to} className={({isActive}) => `hover:text-highlight transition ${isActive?'text-highlight':'text-slate-300'}`}>{i.label}</NavLink>
					))}
				</nav>
				<button aria-label="Menu" onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700/60 px-3 py-2 text-slate-200">
					<span className="i">≡</span>
				</button>
			</div>
			{/* Mobile Panel */}
			{open && (
				<div className="md:hidden fixed inset-0 z-50">
					<div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
					<div className="absolute right-0 top-0 h-full w-72 bg-slate-900 border-l border-slate-700/60 p-6 flex flex-col gap-6 animate-slide-in">
						<div className="flex items-center justify-between">
							<span className="font-display font-semibold">Menu</span>
							<button onClick={() => setOpen(false)} aria-label="Close" className="rounded p-2 hover:bg-slate-800">✕</button>
						</div>
						<div className="flex flex-col gap-4">
							{navItems.map(i => (
								<NavLink key={i.to} to={i.to} onClick={() => setOpen(false)} className={({isActive}) => `text-sm font-medium tracking-wide ${isActive?'text-highlight':'text-slate-200'} hover:text-highlight`}>
									{i.label}
								</NavLink>
							))}
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

