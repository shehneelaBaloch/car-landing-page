import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Testimonials from './components/Testimonials';
import CarGallery from './components/CarGallery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';


export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <Testimonials />
      <CarGallery />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}