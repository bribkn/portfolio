import { Mail, Github, Linkedin, FileText } from 'lucide-react'
export const contacts = [
  {
    label: 'Email',
    href: 'mailto:brianbastias@hotmail.com',
    icon: Mail,
    color: 'bg-sky-600 text-white',
    description: 'brianbastias@hotmail.com',
  },
  {
    label: 'Github',
    href: 'https://github.com/bribkn',
    icon: Github,
    color: 'bg-neutral-900 text-white',
    description: 'github.com/bribkn',
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/brian-bastias/',
    icon: Linkedin,
    color: 'bg-sky-800 text-white',
    description: 'linkedin.com/in/brian-bastias',
  },
  {
    label: 'Resume',
    href: '/CV_eng.pdf',
    icon: FileText,
    color: 'bg-white text-sky-700 border border-sky-400',
    description: 'Download CV',
    download: true,
  },
]
