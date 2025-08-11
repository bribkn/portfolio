'use client'
import Image from 'next/image'
const AboutSection = () => (
  <section id="about" className="scroll-mt-24 py-10 px-2 sm:px-4 flex flex-col relative">
    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 mt-0 w-full max-w-4xl mx-auto">
      <div className="flex-1 flex flex-col justify-start items-start w-full mt-4 md:mt-16 space-y-2 sm:space-y-1">
        <div className="flex flex-col sm:block w-full">
          <span className="text-2xl sm:text-4xl font-bold mb-0 sm:mb-2">
            Hello! I am <span className="block sm:inline">Brian Bastías</span>
          </span>
        </div>
        <p className="text-lg sm:text-2xl mb-2 sm:mb-6 text-sky-600 font-semibold">
          Software Engineer
        </p>
        <p className="text-black dark:text-gray-300 text-base sm:text-xl leading-relaxed">
          I&apos;m a software engineer passionate about creating digital products with Next.js,
          React, and modern technologies. I specialize in building clean and functional interfaces,
          prioritizing user experience and performance.
        </p>
        <div className="mt-4 sm:mt-6 flex flex-row gap-3">
          <a
            href="/CV_eng.pdf"
            target="_blank"
            rel="noopener"
            className="inline-block rounded-lg px-4 sm:px-6 py-2 font-semibold border-2 border-sky-600 text-sky-600 bg-white dark:bg-black dark:text-sky-400 dark:border-sky-400 shadow transition-all duration-200 hover:shadow-lg hover:bg-sky-50 dark:hover:bg-sky-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Get my resume
          </a>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-block rounded-lg px-4 sm:px-6 py-2 font-semibold border-2 border-sky-600 text-sky-600 bg-white dark:bg-black dark:text-sky-400 dark:border-sky-400 shadow transition-all duration-200 hover:shadow-lg hover:bg-sky-50 dark:hover:bg-sky-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center w-full mt-4 md:mt-0">
        <div className="relative group w-64 h-64 sm:w-48 sm:h-48 md:w-64 md:h-64 max-w-full">
          <div className="absolute -inset-2 rotate-3 rounded-2xl bg-primary/10 shadow-lg z-0 group-hover:rotate-6 transition-transform duration-500" />
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border-2 border-border bg-card rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500 w-full h-full">
            <Image
              src="/profile-brian.jpg"
              alt="Brian Bastías"
              width={256}
              height={256}
              className="w-full h-full object-cover object-top select-none"
              draggable={false}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection
