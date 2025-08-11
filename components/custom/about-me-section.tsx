'use client'
import { Card, CardContent } from '@/components/ui/card'
import { motion, fadeInUp, stagger } from '@/lib/motion-presets'

const timeline = [
  {
    title: 'Past',
    align: 'right',
    text: `My passion for programming began at the early age of 12, when I discovered the world of video games. I was fascinated by Flash games and spent countless hours not only playing, but also learning how they were made. This curiosity led me to experiment with code, create my own simple games, and realize the endless possibilities that technology could offer.`,
  },
  {
    title: 'Present',
    align: 'left',
    text: `Today, I work as a full stack developer at the University of Chile, where I help build digital solutions for the academic community. I am also the CTO of SmartSide, a company dedicated to solving real-world problems through innovative technology. My daily work is driven by a desire to create impactful products and lead teams towards meaningful results.`,
  },
  {
    title: 'Future',
    align: 'right',
    text: `Looking ahead, I hope to keep growing as a person and as a professional. I want to improve my skills, embrace new challenges, and continue learning from every experience. My goal is to contribute to projects that make a difference and to inspire others to pursue their own passions in technology.`,
  },
]

const AboutMeSection = () => (
  <section id="about-me" className="scroll-mt-24 py-10 px-2 sm:px-4">
    <motion.h2
      className="text-4xl sm:text-5xl font-extrabold mb-10 sm:mb-16 text-sky-600 text-center w-full"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      About My
    </motion.h2>
    <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-600/60 via-sky-400/30 to-transparent dark:from-sky-400/40 dark:via-sky-600/20 dark:to-transparent rounded-full pointer-events-none"
        style={{ minHeight: '340px' }}
      />
      <motion.div
        className="flex flex-col gap-12 w-full"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {timeline.map((item, idx) => (
          <motion.div
            key={item.title}
            className={`relative flex flex-col md:flex-row items-center w-full ${idx === 1 ? 'mb-14 md:mb-12' : 'mb-4 md:mb-12'}`}
            variants={fadeInUp}
          >
            {item.align === 'right' ? (
              <>
                <div className="md:w-1/2 w-full md:pr-12 flex mb-0 md:mb-0">
                  <Card className="w-full max-w-md mx-auto">
                    <CardContent className="p-6">
                      <h3
                        className={`text-2xl font-bold text-sky-500 mb-2 ${item.align === 'right' ? 'md:text-right' : ''}`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed text-justify">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col items-center md:items-center md:w-0 w-full md:mx-0 mx-auto mt-4 md:mt-0">
                  <span className="hidden md:inline-block w-6 h-6 bg-sky-500 border-4 border-white dark:border-neutral-900 rounded-full z-10 shadow-lg" />
                </div>
                <div className="md:w-1/2 hidden md:flex" />
              </>
            ) : (
              <>
                <div className="md:w-1/2 hidden md:flex" />
                <div className="flex flex-col items-center md:items-center md:w-0 w-full md:mx-0 mx-auto mt-4 md:mt-0">
                  <span className="hidden md:inline-block w-6 h-6 bg-sky-500 border-4 border-white dark:border-neutral-900 rounded-full z-10 shadow-lg" />
                </div>
                <div className="md:w-1/2 w-full md:pl-12 flex justify-start md:justify-start">
                  <Card className="w-full max-w-md mx-auto">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-sky-500 mb-2">{item.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed text-justify">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

export default AboutMeSection
