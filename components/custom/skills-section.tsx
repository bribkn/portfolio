'use client'
import { Card, CardContent } from '@/components/ui/card'
import { motion, fadeInUp, stagger } from '@/lib/motion-presets'

const SkillBox = ({ children }: { children: React.ReactNode }) => (
  <motion.li
    className="px-5 py-2 rounded-md text-lg font-semibold transition-all duration-200 bg-white/80 text-slate-800 shadow-sm dark:bg-slate-800/80 dark:text-white border border-sky-600 hover:bg-sky-600 hover:shadow-lg dark:hover:bg-sky-600 dark:hover:text-white cursor-pointer"
    variants={fadeInUp}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.97 }}
  >
    {children}
  </motion.li>
)

const skillsData = [
  {
    section: 'Front End',
    skills: [
      'HTML',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Zustand',
      'Turborepo',
      'React Query',
      'TanStack Query',
    ],
  },
  {
    section: 'Styling & Design',
    skills: [
      'CSS',
      'SASS',
      'BootStrap',
      'Tailwind CSS',
      'CSS Module',
      'Figma',
      'Styled-Components',
      'Material UI',
      'Storybook',
      'Framer Motion',
    ],
  },
  {
    section: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Golang', 'C#'],
  },
  {
    section: 'Miscellaneous',
    skills: [
      'Git',
      'CI/CD',
      'Docker',
      'Kubernetes',
      'ElasticSearch',
      'Postman/Bruno',
      'Jira',
      'Confluence',
      'Kibana',
    ],
  },
]

const SkillsSection = () => (
  <section id="skills" className="scroll-mt-24 py-16">
    <motion.h2
      className="text-5xl font-extrabold mb-12 text-center"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Skills
    </motion.h2>
    <motion.div
      className="grid grid-cols-1 gap-8"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {skillsData.map(({ section, skills }) => (
        <motion.div key={section} variants={fadeInUp}>
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-sky-600">{section}</h3>
              <ul className="flex flex-wrap gap-4 mb-2">
                {skills.map((skill) => (
                  <SkillBox key={skill}>{skill}</SkillBox>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </section>
)

export default SkillsSection
