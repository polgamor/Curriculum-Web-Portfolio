import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatSection from './components/ChatSection';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main>
          <Hero />
          <ChatSection />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
