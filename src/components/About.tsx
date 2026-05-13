import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="w-full scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-8 sm:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-8">About Me</h2>
        <div className="prose prose-invert max-w-none text-zinc-400 leading-relaxed font-light text-lg">
          <p className="mb-6">
            I build AI systems that generate leads, automate outreach, and recover revenue for businesses. I am experienced in designing and deploying multi-step workflows using LLMs, APIs, and automation tools to reduce manual effort and drive measurable outcomes.
          </p>
          <p>
            With a background in Artificial Intelligence & Data Science, I continuously explore new tools and methodologies, constructing agents and autonomous pipelines using platforms like Zapier, Make, and Supabase.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
