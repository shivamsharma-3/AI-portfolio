import { ExternalLink, Github, FolderGit2, BarChart3, ArrowUpRight, Activity, Database, Bot, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

const projects = [
  {
    title: 'ARCH Revenues',
    subtitle: 'Revenue Infrastructure Platform',
    description: 'A comprehensive B2B revenue operations platform built for scaling companies. Features include automated outbound systems, CRM integration, and analytics dashboards.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    link: 'https://archrevenues.com',
    github: 'https://github.com/shivamsharma-3/arch-revenues',
    image: 'https://api.microlink.io/?url=https://archrevenues.com&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'RevRecovery',
    subtitle: 'AI & Automation App',
    description: 'An intelligent platform designed to recover lost revenue using AI-driven automation. It streamlines the recovery process with automated outreach, smart follow-ups, and comprehensive analytics features.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'AI'],
    link: 'https://revrecovery.vercel.app',
    github: 'https://github.com/shivamsharma-3/RevRecovery',
    image: 'https://api.microlink.io/?url=https://revrecovery.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'FileVault',
    subtitle: 'UI/UX Project (In Progress)',
    description: 'A modern, secure file management interface focusing on intuitive user experience and clean aesthetics. Built with a mobile-first approach.',
    tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    link: 'https://shivamsharma-3.github.io/FileVault-UI-UX-Project/',
    github: 'https://github.com/shivamsharma-3/FileVault-UI-UX-Project?tab=readme-ov-file',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop', // Digital lock / Security / Vault visual
  },
  {
    title: 'Task Management App',
    subtitle: 'React Application',
    description: 'A fully functional task management dashboard using React. Implemented state management, drag-and-drop features, and local storage persistence.',
    tech: ['React', 'Context API', 'CSS Modules'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop', // To-do list / Planning visual
  },
  {
    title: 'SaaS Landing Page',
    subtitle: 'UI Implementation',
    description: 'A high-converting landing page for a fictional SaaS product. Focused on pixel-perfect implementation from Figma designs.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', // SaaS analytics visual
  }
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex flex-col items-center text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <FolderGit2 className="w-8 h-8 text-emerald-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Work</h2>
        </div>
        <p className="text-zinc-400 max-w-2xl">
          A selection of projects that showcase my passion for building scalable, user-friendly, and visually appealing web applications.
        </p>
      </motion.div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
          >
            <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden relative bg-white/5 border border-white/10 flex-shrink-0">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-500/10 to-teal-600/10 flex flex-col items-center justify-center border border-white/5">
                  <FolderGit2 className="w-12 h-12 text-emerald-500/50 mb-4" />
                  <span className="text-emerald-400/50 font-medium text-lg">Project Preview</span>
                </div>
              )}
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-emerald-400 font-mono text-sm mb-2">{project.subtitle}</p>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">{project.title}</h3>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <p className="text-zinc-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-4 py-2 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-emerald-400 rounded-xl hover:bg-emerald-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                )}
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
