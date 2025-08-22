import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import WhatsAppButton from './WhatsAppButton.tsx';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">        
        <Outlet />
      </main>
  <Footer />
  <WhatsAppButton />
    </div>
  );
};
