import { Github, Linkedin } from 'lucide-react';

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-4xl bg-black/80 backdrop-blur-md border border-emerald-500/30 rounded-2xl px-8 py-4 flex items-center justify-between shadow-[0_0_15px_rgba(16,185,129,0.15)]">
        <a href="#" className="font-bold text-white tracking-wide hover:text-emerald-400 transition-colors text-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Shivam Sharma
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-5 pl-6 border-l border-white/10">
          <a href="https://github.com/shivamsharma-3" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/shivam-sharma1203/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </div>
  );
}
