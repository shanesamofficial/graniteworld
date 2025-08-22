import { useState } from 'react';

interface FormState {
	name: string;
	mobile: string;
	projectType: string;
	material: string;
	details: string;
}

const INITIAL: FormState = {
	name: '',
	mobile: '',
	projectType: 'Kitchen Countertops',
	material: 'Granite',
	details: ''
};

export default function Contact() {
	const [form, setForm] = useState<FormState>(INITIAL);
	const [submitting, setSubmitting] = useState(false);

	const update = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm(f => ({ ...f, [key]: value }));

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!/^[0-9+\s-]{8,15}$/.test(form.mobile.trim())) {
			alert('Please enter a valid mobile number.');
			return;
		}
		setSubmitting(true);
		const phone = '919526000677'; // WhatsApp destination (country code + number, no leading +)
		const lines = [
			'Granite World Inquiry',
			'--------------------------',
			`Name: ${form.name}`,
			`Mobile: ${form.mobile}`,
			`Project Type: ${form.projectType}`,
			`Material: ${form.material}`,
			form.details ? `Details: ${form.details}` : '',
			'--------------------------',
			'Please respond with next steps.'
		].filter(Boolean);
		const text = encodeURIComponent(lines.join('\n'));
		const url = `https://wa.me/${phone}?text=${text}`;
		// Redirect to WhatsApp
		window.location.href = url;
		// Optionally reset
		setTimeout(() => setSubmitting(false), 2000);
	};

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
					<div className="text-xs text-slate-500 leading-relaxed">
						After you submit, WhatsApp will open with your details pre‑filled. Just press send.
					</div>
				</div>
				<div className="lg:col-span-2">
					<form onSubmit={handleSubmit} className="grid gap-6 rounded-lg border border-slate-800/60 bg-slate-900/40 p-6">
						<div>
							<label className="block text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">Name</label>
							<input
								type="text"
								required
								value={form.name}
								onChange={e => update('name', e.target.value)}
								className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-highlight"
							/>
						</div>
						<div>
							<label className="block text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">Mobile Number</label>
							<input
								type="tel"
								required
								inputMode="tel"
								placeholder="e.g. 9876543210"
								value={form.mobile}
								onChange={e => update('mobile', e.target.value)}
								className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-highlight"
							/>
						</div>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label className="block text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">Project Type</label>
								<select
									value={form.projectType}
									onChange={e => update('projectType', e.target.value)}
									className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-highlight"
								>
									<option>Kitchen Countertops</option>
									<option>Bathroom Vanity</option>
									<option>Outdoor Kitchen</option>
									<option>Commercial</option>
									<option>Flooring / Stairs</option>
									<option>Kallara / Utility</option>
									<option>Meezan / Board</option>
									<option>Other</option>
								</select>
							</div>
							<div>
								<label className="block text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">Material</label>
								<select
									value={form.material}
									onChange={e => update('material', e.target.value)}
									className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-highlight"
								>
									<option>Granite</option>
									<option>Kadappa</option>
									<option>Nano White</option>
									<option>Marble</option>
									<option>Quartzite</option>
									<option>Quartz</option>
									<option>Undecided</option>
								</select>
							</div>
						</div>
						<div>
							<label className="block text-xs font-medium uppercase tracking-wide text-slate-400 mb-2">Details</label>
							<textarea
								rows={5}
								value={form.details}
								onChange={e => update('details', e.target.value)}
								className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-highlight"
								placeholder="Dimensions, timeline, finish, edge profile, etc."
							/>
						</div>
						<button
							type="submit"
							disabled={submitting}
							className="bg-highlight text-slate-900 font-medium px-6 py-3 rounded-md shadow hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed transition"
						>
							{submitting ? 'Preparing WhatsApp…' : 'Send via WhatsApp'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

