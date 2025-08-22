import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-6 py-28">
      <h1 className="font-display text-4xl font-semibold mb-8">Request a Quote</h1>
      <div className="grid lg:grid-cols-3 gap-12 mb-12">
        <div className="space-y-8 lg:col-span-1">
          <div>
            <h2 className="text-lg font-medium mb-3 text-highlight">Contact</h2>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>Madiyur, Kalpetta, Kerala 673121</li>
              <li><a href="tel:+919526000677" className="hover:text-highlight">+91 95260 00677</a></li>
              <li><a href="tel:+917907868313" className="hover:text-highlight">+91 79078 68313</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-3 text-highlight">Hours</h2>
            <ul className="text-slate-300 text-xs space-y-1">
              <li>Mon–Sat 9:00 am – 6:30 pm</li>
              <li>Sunday Closed</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-3 text-highlight">Materials</h2>
            <p className="text-slate-400 text-xs leading-relaxed">Granite • Kadappa • Nano White • Marble • Quartzite • Quartz. Custom cutting, drilling, polishing & edge profiling for countertops, flooring, stairs, kallara and meezan boards.</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          {submitted ? (
        <div className="rounded-lg border border-green-700/50 bg-green-900/30 p-6">
          <h2 className="font-medium mb-2 text-green-400">Thank you!</h2>
          <p className="text-sm text-slate-300 leading-relaxed">We've received your request. A project specialist will reach out shortly.</p>
          <button onClick={() => setSubmitted(false)} className="mt-4 text-xs underline text-slate-400 hover:text-highlight">Submit another</button>
        </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="grid gap-6 rounded-lg border border-slate-800/60 bg-slate-900/40 p-6"
            >
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">Name</label>
            <input type="text" required className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-highlight" />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">Email</label>
            <input type="email" required className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-highlight" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">Project Type</label>
              <select className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-highlight">
                <option>Kitchen Countertops</option>
                <option>Bathroom Vanity</option>
                <option>Outdoor Kitchen</option>
                <option>Commercial</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">Material Interest</label>
              <select className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-highlight">
                <option>Granite</option>
                <option>Quartz</option>
                <option>Marble</option>
                <option>Quartzite</option>
                <option>Undecided</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">Details</label>
            <textarea rows={5} className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-highlight" placeholder="Tell us about dimensions, timeline, and any special considerations" />
          </div>
              <button type="submit" className="bg-highlight text-slate-900 font-medium px-6 py-3 rounded-md shadow hover:brightness-110 transition">Send Request</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
