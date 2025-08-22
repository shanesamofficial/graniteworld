export default function Gallery() {
  const items = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    img: `https://picsum.photos/seed/granite-${i}/600/400`
  }));
  return (
    <div className="mx-auto max-w-7xl px-6 py-28">
      <h1 className="font-display text-4xl font-semibold mb-10">Gallery</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <figure key={item.id} className="group relative overflow-hidden rounded-lg border border-slate-800/60 bg-slate-900/40">
            <img src={item.img} alt={item.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            <figcaption className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-sm font-medium tracking-wide">{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
