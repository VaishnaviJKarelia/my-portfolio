// src/app/page.tsx
'use client';
import { motion } from 'framer-motion';
import { portfolioData } from './data';

export default function Home() {
  // Animation settings for the whole page
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-100">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        className="h-[70vh] flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-blue-600 mb-4">
          {portfolioData.name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl">
          {portfolioData.title}
        </p>
        <div className="mt-10 flex gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
            View Work
          </button>
          <button className="border border-slate-300 px-8 py-3 rounded-full font-medium hover:bg-slate-50 transition-all">
            Contact Me
          </button>
        </div>
      </motion.section>

      {/* 2. ABOUT SECTION */}
      <motion.section 
        className="max-w-4xl mx-auto py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-4">About</h2>
        <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed font-medium">
          {portfolioData.about}
        </p>
      </motion.section>

      {/* 3. PROJECTS SECTION (The Dynamic Cards) */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EXPERIENCE SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] text-blue-400 font-bold mb-12">Experience</h2>
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row md:justify-between border-b border-slate-800 pb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-blue-400 text-lg">{exp.company}</p>
                </div>
                <p className="text-slate-500 mt-2 md:mt-0 font-mono">{exp.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-slate-400 text-sm">
        © 2026 {portfolioData.name}. Built with Next.js & Framer Motion.
      </footer>
    </main>
  );
}