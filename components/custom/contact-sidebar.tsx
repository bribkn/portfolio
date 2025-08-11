import { contacts } from '@/utils/contacts'

export default function ContactSidebar() {
  return (
    <div className="fixed bottom-6 left-6 z-50 hidden md:flex flex-col items-center gap-4">
      {contacts
        .filter((c) => c.label !== 'Resume')
        .map((contact) => {
          const isExternal = contact.href.startsWith('http')
          const linkProps = {
            href: contact.href,
            className: 'group',
            ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
            ...(contact.download && { download: true }),
          }
          return (
            <a key={contact.label} {...linkProps}>
              <span className={`flex items-center justify-center w-10 h-10`}>
                <contact.icon size={22} />
              </span>
            </a>
          )
        })}
      <div className="w-px h-12 mt-2 bg-black/30 dark:bg-white/30" />
    </div>
  )
}
