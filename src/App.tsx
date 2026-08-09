import { BlockchainBg } from './components/BlockchainBg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { FeaturedContent } from './components/FeaturedContent';
import { StatsAchievements } from './components/StatsAchievements';
import { Skills } from './components/Skills';
// import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const sections = [
  'home',
  'about',
  'projects',
  'content',
  'achievements',
  'skills',
  // 'testimonials',
  'contact',
];

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden selection:bg-brand-purple/45 selection:text-white">
      {/* Premium Blockchain Background */}
      <BlockchainBg />

      {/* Sticky Navigation Bar */}
      <Navbar sections={sections} />

      {/* Main Sections Assembly */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <FeaturedContent />
        <StatsAchievements />
        <Skills />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
