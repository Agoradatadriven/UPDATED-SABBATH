import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import OurStory from './pages/OurStory';
import SpaGallery from './pages/SpaGallery';
import Policies from './pages/Policies';
import Preloader from './components/Preloader';

export default function App() {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          
          {/* About Us */}
          <Route path="about/story" element={<OurStory />} />
          <Route path="about/gallery" element={<SpaGallery />} />
          <Route path="about/policies" element={<Policies />} />
          
          {/* Our Offerings */}
          <Route path="offerings/massages" element={<GenericPage title="Massages & Reflexology" subtitle="Restore your body and mind" image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600" />} />
          <Route path="offerings/body-scrubs" element={<GenericPage title="Body Scrubs & Treatments" subtitle="Renew your skin's natural glow" image="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=1600" />} />
          <Route path="offerings/nail-salon" element={<GenericPage title="Le Nail Salon" subtitle="Impeccable care for hands and feet" image="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1600" />} />
          <Route path="offerings/wellness-suites" element={<GenericPage title="Wellness Suites & Packages" subtitle="Curated experiences for ultimate relaxation" image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600" />} />
          <Route path="offerings/memberships" element={<GenericPage title="Memberships & Gatherings" subtitle="Join our community of wellness" image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1600" />} />
          
          {/* Sabasu */}
          <Route path="sabasu/ramyeon" element={<GenericPage title="Ramyeon Noodle Bar" subtitle="Authentic flavors to warm your soul" image="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1600" />} />
          <Route path="sabasu/coffee-tea" element={<GenericPage title="Coffee, Tea & Refreshments" subtitle="Artisanal beverages for every moment" image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1600" />} />
          <Route path="sabasu/hearty-meals" element={<GenericPage title="Hearty Meals" subtitle="Nourishing dishes crafted with care" image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1600" />} />
          <Route path="sabasu/light-bites" element={<GenericPage title="Light Bites & Sweets" subtitle="Delightful treats to savor" image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600" />} />
          
          {/* Contact */}
          <Route path="contact" element={<GenericPage title="Contact Us" subtitle="We are here to assist you" image="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1600" />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
