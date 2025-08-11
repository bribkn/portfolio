import FadeIn from '@/components/custom/fade-in'

import AboutSection from '@/components/custom/about-section'
import AboutMeSection from '@/components/custom/about-me-section'
import SkillsSection from '@/components/custom/skills-section'
import ProjectsSection from '@/components/custom/projects-section'
import ContactSection from '@/components/custom/contact-section'
import Footer from '@/components/custom/footer'
export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-6xl px-6 md:px-16">
      <FadeIn>
        <AboutSection />
        <ProjectsSection />
        <AboutMeSection />
        <SkillsSection />
        <ContactSection />
      </FadeIn>
      <Footer />
    </main>
  )
}
