export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <h3 className="font-display text-lg mb-3">Granite World</h3>
          <p className="text-slate-400 leading-relaxed">Premium fabrication & installation of granite, quartz, and marble countertops for kitchens, baths & commercial spaces.</p>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-slate-200">Showroom</h4>
          <ul className="space-y-2 text-slate-400">
            <li>123 Stonecraft Ave</li>
            <li>Suite 200</li>
            <li>City, ST 00000</li>
            <li>(555) 123-4567</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-slate-200">Hours</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Mon–Fri 8–6</li>
            <li>Sat 9–2</li>
            <li>Sun Closed</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-slate-200">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="/products" className="hover:text-highlight">Products</a></li>
            <li><a href="/gallery" className="hover:text-highlight">Gallery</a></li>
            <li><a href="/about" className="hover:text-highlight">About</a></li>
            <li><a href="/contact" className="hover:text-highlight">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Granite World. All rights reserved.</div>
    </footer>
  );
}
