'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion, fadeInUp, stagger } from '@/lib/motion-presets'
import { contacts } from '@/utils/contacts'

const ContactCard = ({ contact }: { contact: (typeof contacts)[0] }) => {
  const isExternal = contact.href.startsWith('http')
  const linkProps = {
    href: contact.href,
    className: 'block cursor-pointer',
    ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    ...(contact.download && { download: true }),
  }
  return (
    <motion.a
      {...linkProps}
      variants={fadeInUp}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg ${contact.color}`}>
        <CardContent className="flex items-center gap-4 p-0">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
            <contact.icon size={32} />
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-bold">{contact.label}</span>
            <span className="text-sm opacity-80">{contact.description}</span>
          </div>
        </CardContent>
      </Card>
    </motion.a>
  )
}

const ContactSection = () => (
  <section id="contact" className="scroll-mt-24 py-16">
    <motion.h2
      className="text-5xl font-extrabold mb-12 text-center"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Contact
    </motion.h2>
    <motion.p
      className="text-muted-foreground mb-8 text-center text-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Want to work with me or have any questions? Let&apos;s talk!
    </motion.p>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {contacts.map((contact) => (
        <ContactCard key={contact.label} contact={contact} />
      ))}
    </motion.div>
  </section>
)

export default ContactSection
