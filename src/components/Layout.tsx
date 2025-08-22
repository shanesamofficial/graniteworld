import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<main className="flex-1">{children}</main>
			<Footer />
			<WhatsAppButton />
		</div>
	);
}

