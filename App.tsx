import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Experience } from './components/Experience.tsx';
import { Skills } from './components/Skills.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;