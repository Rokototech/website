export interface SocialItem {
  icon: string
  href: string
  label: string
}

export const contact = {
  email: 'hola@volkanext.com',
  phone: '+51 981 658 221',
  phoneHref: 'tel:+51981658221',
  location: 'Arequipa, Perú — Alcance Global',
}

export const socials: SocialItem[] = [
  { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
  { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'fa-brands fa-x-twitter', href: '#', label: 'X' },
  { icon: 'fa-brands fa-instagram', href: '#', label: 'Instagram' },
]
