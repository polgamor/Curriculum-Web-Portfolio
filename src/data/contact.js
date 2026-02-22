import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const contactDetails = [
  {
    icon: Mail,
    labelKey: 'contact.email',
    value: 'polgarciamoreno392@gmail.com',
    href: 'mailto:polgarciamoreno392@gmail.com'
  },
  {
    icon: Phone,
    labelKey: 'contact.phone',
    value: '+34 633 297 540',
    href: 'tel:+34633297540'
  },
  {
    icon: MapPin,
    labelKey: 'contact.location',
    value: 'Barcelona, Spain',
    href: '#'
  }
];

export const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/polgamor',
    label: 'GitHub',
    rotate: 5,
    isExternal: true
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/pol-garcía-moreno-1ab3a9205',
    label: 'LinkedIn',
    rotate: -5,
    isExternal: true
  },
  {
    icon: Mail,
    href: 'mailto:polgarciamoreno392@gmail.com',
    label: 'Email',
    rotate: 5,
    isExternal: false
  }
];
