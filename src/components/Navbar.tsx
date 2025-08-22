import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-slate-900/70 border-b border-slate-800/50">
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
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800/60"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="i ph-list text-2xl"/>
          <div className="sr-only">Menu</div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-800/50"
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `py-2 border-b border-slate-800/60 last:border-none transition-colors hover:text-highlight ${isActive ? 'text-highlight' : 'text-slate-200'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
