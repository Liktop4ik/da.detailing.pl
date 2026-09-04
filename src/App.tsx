import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Locations from '@/components/Locations';
import WhyUs from '@/components/WhyUs';
import Services from '@/components/Services';
import Membership from '@/components/Membership';
import Repairs from '@/components/Repairs';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import CtaBanner from '@/components/CtaBanner';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Locations />
        <WhyUs />
        <Services />
        <Membership />
        <Repairs />
        <Testimonials />
        <HowItWorks />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
