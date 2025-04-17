
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'TensorFlow / PyTorch', level: 90 },
    { name: 'GCP / Azure / AWS', level: 85 },
    { name: 'NLP / LLMs', level: 90 },
    { name: 'Docker / Kubernetes', level: 80 },
    { name: 'SQL / Tableau / Power BI', level: 80 },
  ];

  return (
    <div className={\`\${darkMode ? 'bg-gray-900 text-white' : 'bg-beige-100 text-gray-900'} min-h-screen transition-all duration-500\`}>
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Youssef Alan Franci</h1>
        <button
          className="text-sm border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle Mode
        </button>
      </header>

      <main className="px-6 md:px-20 lg:px-40 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Machine Learning Engineer | AI Policy Advocate</h2>
            <p className="text-lg leading-relaxed max-w-2xl">
              Driving innovation at the intersection of machine learning, cognitive science, and ethical AI governance. Currently completing a Master's in Engineering with Management at King's College London, and certified by Google Cloud & Microsoft Azure.
            </p>
            <div className="mt-6 space-x-4">
              <a href="mailto:yousseffranci@outlook.com" className="underline">Email</a>
              <a href="https://www.linkedin.com/in/yfranci" target="_blank" className="underline">LinkedIn</a>
              <a href="/resume.pdf" className="underline">Download Resume</a>
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ width: 0 }}
                  animate={{ width: \`\${skill.level}%\` }}
                  transition={{ duration: 1 + index * 0.3 }}
                  className="bg-blue-600 h-6 rounded-full text-white text-sm px-3 flex items-center shadow-md"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-semibold mb-4">Featured Research</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold mb-2">AI-enabled Low Carbon Reconstruction in Conflict Zones</h4>
              <p className="mb-4">
                This MSc thesis presents an AI-driven framework for post-conflict reconstruction using deep learning, remote sensing, and generative models to accelerate recovery efforts in the Gaza Strip. It integrates sustainable practices like Net-Zero Carbon Emissions (NZCE) and optimizes damage assessment, debris analysis, and architectural layout planning.
              </p>
              <a href="/thesis.pdf" target="_blank" className="underline text-blue-600 dark:text-blue-400">
                Read the full thesis
              </a>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">About Me</Link></li>
              <li><Link href="/experience" className="hover:underline">Experience</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/publications" className="hover:underline">Publications</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </section>
        </motion.div>
      </main>

      <footer className="text-center p-6 border-t">
        <p>&copy; {new Date().getFullYear()} Youssef Alan Franci. Built with Next.js + Tailwind CSS.</p>
      </footer>
    </div>
  );
}
