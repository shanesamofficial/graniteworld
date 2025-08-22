import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on ESC & lock scroll when mobile menu open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    const body = document.body;
    const prevOverflow = body.style.overflow;
    if (open) body.style.overflow = 'hidden'; else body.style.overflow = prevOverflow || '';
    return () => {
      window.removeEventListener('keydown', onKey);
      body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
  <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-slate-900/70 border-b border-slate-800/50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-semibold tracking-wide">
          <span className="text-highlight">Granite</span> World
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `transition-colors hover:text-highlight ${isActive ? 'text-highlight' : 'text-slate-200'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden relative h-10 w-10 inline-flex items-center justify-center rounded-md text-slate-200 hover:bg-slate-800/60 transition"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          {[0,1,2].map(i => (
            <span
              key={i}
              className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                i===0 ? (open ? 'translate-y-0 rotate-45' : '-translate-y-2') :
                i===1 ? (open ? 'opacity-0' : 'opacity-100') :
                i===2 ? (open ? 'translate-y-0 -rotate-45' : 'translate-y-2') : ''
              }`}
            />
          ))}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <>
            {/* Dim background */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black md:hidden" onClick={() => setOpen(false)}
            />
            <motion.nav
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 max-w-[80%] z-50 md:hidden bg-slate-900 border-l border-slate-800 flex flex-col shadow-xl"
            >
              <div className="h-20 flex items-center px-6 border-b border-slate-800/60">
                <span className="font-display font-semibold tracking-wide text-slate-100"><span className="text-highlight">Granite</span> World</span>
              </div>
              <ul className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
                {navItems.map(item => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => `block rounded-md px-4 py-3 text-sm font-medium tracking-wide transition-colors ${isActive ? 'bg-slate-800/70 text-highlight' : 'text-slate-200 hover:bg-slate-800/50'}`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="px-5 pb-6 text-[11px] text-slate-500">© {new Date().getFullYear()} Granite World</div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
