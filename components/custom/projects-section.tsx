'use client'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { motion, fadeInUp, stagger } from '@/lib/motion-presets'

const projects = [
  {
    title: 'Talleres de Bolsillo',
    image: '/tdb-mockup.png',
    madeWith: [
      { name: 'TypeScript', color: 'text-sky-500' },
      { name: 'Next.js', color: 'text-sky-500' },
      { name: 'React', color: 'text-sky-500' },
      { name: 'GCP', color: 'text-sky-500' },
      { name: 'PostgreSQL', color: 'text-sky-500' },
      { name: 'TailwindCSS', color: 'text-sky-500' },
    ],
    description:
      'Live workshops that inspire and foster curiosity and the joy of learning, featuring renowned figures from culture and knowledge. The platform offers interactive sessions, community engagement, and a curated selection of topics to spark lifelong learning.',
    liveUrl: 'https://talleresdebolsillo.cl',
  },
]

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <motion.div
    className="flex flex-col md:flex-row items-center gap-8 mb-16"
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
  >
    <div className="md:w-1/2 w-full flex justify-center align-top">
      <Card className="rounded-2xl border-2 border-sky-500/80 shadow-lg overflow-hidden w-full max-w-md mx-auto">
        <CardContent className="p-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 bg-neutral-900 p-8 object-contain"
          />
        </CardContent>
      </Card>
    </div>
    <div className="md:w-1/2 w-full flex flex-col items-start">
      <h3 className="text-4xl font-bold mb-4 leading-tight">{project.title}</h3>
      <div className="mb-2 text-lg font-medium flex flex-wrap gap-2">
        <span className="text-black dark:text-white">Made with:</span>
        {project.madeWith.map((tech) => (
          <span key={tech.name} className={tech.color + ' font-semibold'}>
            {tech.name}
          </span>
        ))}
      </div>
      <p className="mb-6 text-lg text-black dark:text-slate-300 max-w-xl">{project.description}</p>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 border-2 border-sky-500 text-sky-500 font-semibold rounded-lg hover:bg-sky-500 hover:text-white transition-colors duration-200"
        >
          <ExternalLink size={20} className="-ml-1" />
          Live
        </a>
      )}
    </div>
  </motion.div>
)

const ProjectsSection = () => (
  <section id="projects" className="scroll-mt-24 py-16">
    <motion.h2
      className="text-5xl font-extrabold mb-12 text-center"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Projects
    </motion.h2>
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </motion.div>
  </section>
)

export default ProjectsSection
