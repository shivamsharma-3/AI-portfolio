import { motion } from 'motion/react';
import { Layout, Terminal, Zap, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & Systems',
    icon: <Sparkles className="w-6 h-6" />,
    skills: ['LLM APIs (OpenAI, Claude)', 'Prompt Engineering', 'Agent Workflows', 'RAG', 'LangChain', 'Python', 'Vector DBs (Pinecone)'],
    colorWrapper: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    title: 'Automation & Backend',
    icon: <Zap className="w-6 h-6" />,
    skills: ['Zapier', 'Make.com', 'Supabase', 'Node.js', 'REST APIs', 'Multi-step Workflows'],
    colorWrapper: 'bg-teal-500/10 text-teal-400',
  },
  {
    title: 'Frontend Development',
    icon: <Layout className="w-6 h-6" />,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Next.js'],
    colorWrapper: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    title: 'Tools & Ecosystem',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Git & GitHub', 'Vercel', 'Netlify', 'Cursor AI', 'Lead Generation Systems'],
    colorWrapper: 'bg-teal-500/10 text-teal-400',
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Technical Arsenal</h2>
        <p className="text-zinc-400 max-w-2xl">
          A comprehensive overview of my technical skills, tools, and the technologies I use to build modern web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${category.colorWrapper}`}>
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-zinc-300 bg-black/30 border border-white/5 rounded-xl"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
