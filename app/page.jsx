import Hero from '../components/Hero';
import Features from '../components/Features';
import Destinations from '../components/Destinations';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="destinations" className="py-24"> {/* Increased spacing */}
        <Destinations />
      </div>
      <div id="pricing" className="py-24"> {/* Increased spacing */}
        <Pricing />
      </div>
      <div id="contact" className="py-24"> {/* Increased spacing */}
        <Contact />
      </div>
    </>
  );
}
