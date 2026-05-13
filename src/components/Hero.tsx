import { ArrowRight, Sparkles, Database, Bot, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="hero" className="w-full flex flex-col lg:flex-row items-center justify-between pt-4 pb-20 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl flex flex-col items-start text-left"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Available for new opportunities</span>
        </motion.div>
        
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
          AI Agent & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
            Systems Builder
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10 max-w-xl font-light">
          I build AI systems that generate leads, automate outreach, and recover revenue for businesses. Experienced in designing and deploying multi-step workflows using LLMs, APIs, and automation tools to reduce manual effort and drive measurable outcomes.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-black bg-emerald-400 rounded-xl hover:bg-emerald-300 transition-colors duration-300"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex flex-1 justify-end w-full"
      >
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
          {/* Main Visual: AI System Workflow */}
          <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-teal-500/5 border border-white/5 rounded-3xl backdrop-blur-sm -z-10"></div>
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <motion.path
                d="M 100 100 C 200 100, 200 200, 300 200"
                fill="transparent"
                stroke="rgba(16, 185, 129, 0.2)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 100 300 C 200 300, 200 200, 300 200"
                fill="transparent"
                stroke="rgba(20, 184, 166, 0.2)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Traveling particles */}
              <motion.circle r="4" fill="#10b981">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 100 100 C 200 100, 200 200, 300 200" />
              </motion.circle>
              <motion.circle r="4" fill="#14b8a6">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M 100 300 C 200 300, 200 200, 300 200" />
              </motion.circle>
            </svg>

            {/* Nodes */}
            <div className="absolute top-[50px] left-[50px] flex flex-col items-center gap-2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center shadow-lg relative z-10"
              >
                <Database className="w-8 h-8 text-zinc-400" />
              </motion.div>
              <span className="text-xs text-zinc-500 font-medium">Data Source</span>
            </div>

            <div className="absolute bottom-[50px] left-[50px] flex flex-col items-center gap-2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center shadow-lg relative z-10"
              >
                <Cpu className="w-8 h-8 text-zinc-400" />
              </motion.div>
              <span className="text-xs text-zinc-500 font-medium">Processing</span>
            </div>

            <div className="absolute top-[50%] left-[50%] flex flex-col items-center gap-2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(16,185,129,0)", "0 0 30px rgba(16,185,129,0.2)", "0 0 0 rgba(16,185,129,0)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center shadow-lg relative z-10 backdrop-blur-md"
              >
                <Bot className="w-10 h-10 text-emerald-400" />
              </motion.div>
              <span className="text-xs text-emerald-500/70 font-medium tracking-wide">AI Agent</span>
            </div>

            <div className="absolute top-[50%] right-[50px] flex flex-col items-center gap-2 transform translate-x-1/2 -translate-y-1/2">
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 bg-[#0a0a0a] border border-teal-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.15)] relative z-10"
              >
                <TrendingUp className="w-8 h-8 text-teal-400" />
              </motion.div>
              <span className="text-xs text-teal-500/70 font-medium">Revenue</span>
            </div>
            
          </div>

          {/* Ambient Glow behind everything */}
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full -z-10"></div>
        </div>
      </motion.div>
    </section>
  );
}
