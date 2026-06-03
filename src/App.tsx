/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-zinc-50 relative bg-[#050505]">
      {/* Abstract Geometric Tech Background - Inspired by Reference */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505] overflow-hidden">
        
        {/* Large Background Shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] border border-emerald-500/10 rotate-45 rounded-xl"></div>
        <div className="absolute top-[15%] right-[10%] w-[150px] h-[150px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rotate-45 rounded-lg blur-sm"></div>
        
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] border border-teal-500/10 rotate-45 rounded-xl"></div>
        <div className="absolute bottom-[25%] left-[5%] w-[80px] h-[80px] bg-gradient-to-tr from-emerald-400/30 to-teal-400/30 rotate-45 rounded-md"></div>

        {/* Diagonal Parallel Lines */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(16, 185, 129, 0.3) 40px, rgba(16, 185, 129, 0.3) 41px)`,
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        ></div>

        {/* Small Accent Diamonds */}
        <div className="absolute top-[40%] left-[20%] w-4 h-4 bg-emerald-500/40 rotate-45"></div>
        <div className="absolute top-[60%] right-[25%] w-6 h-6 border border-teal-500/40 rotate-45"></div>
        <div className="absolute bottom-[40%] right-[15%] w-3 h-3 bg-teal-500/40 rotate-45"></div>

        {/* Ambient Mesh Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>
        
        {/* Noise for Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-12 space-y-32 relative z-10 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
