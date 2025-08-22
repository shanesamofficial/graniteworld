import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import Services from './pages/Services.tsx';
import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>        
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
  <Route path="services" element={<Services />} />
  <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
