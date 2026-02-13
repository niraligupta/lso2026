import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SupportedBy from '@/components/SupportedBy';
import About from '@/components/About';
import Topics from '@/components/Topics';
import Speakers from '@/components/Speakers';
import Program from '@/components/Program';
import Registration from '@/components/Registration';
import Venue from '@/components/Venue';
import Organizers from '@/components/Organizers';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <SupportedBy /> */}
      <About />
      <Topics />
      <Speakers />
      <Program />
      <Registration />
      <Venue />
      <Organizers />
      <Footer />
    </div>
  );
};

export default Index;
