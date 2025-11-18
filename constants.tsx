
import React from 'react';
import type { NavLinkItem, Service, SocialLinkItem } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export const WHATSAPP_LINK = 'https://wa.me/254727016585';

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/16i3UwvYeC/?mibextid=wwXIfr',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ecocastconstruction?igsh=MWhseGJoemVhOGw5cg%3D%3D&utm_source=qr',
    icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.75-9.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
        </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    ),
  },
];


export const SERVICES_DATA: Service[] = [
  {
    image: '/WhatsApp Image 2025-11-13 at 04.49.09_baee5378.jpg',
    title: 'Eco-Friendly Construction',
    description: 'Sustainable materials, low-carbon processes.',
    details: 'We prioritize the planet by using locally sourced, renewable materials and implementing energy-efficient building practices to minimize environmental impact from foundation to finish.'
  },
  {
    image: '/WhatsApp Image 2025-11-12 at 23.53.03_23b6a509.jpg',
    title: 'Precast Concrete Solutions',
    description: 'Durable, efficient building systems.',
    details: 'Our precast concrete solutions offer superior strength, faster construction times, and reduced on-site waste, making them a cornerstone of modern, sustainable building.'
  },
  {
    image: '/WhatsApp Image 2025-11-12 at 23.52.59_94d12b60.jpg',
    title: 'Architectural Design',
    description: 'Green design consulting and planning.',
    details: 'Our design team specializes in creating beautiful, functional spaces that harmonize with nature. We focus on passive design, water conservation, and integrating green spaces.'
  },
  {
    image: 'https://img.freepik.com/premium-photo/engineer-people-architect-blueprint-planning-construction-team-strategy-brainstorming-site-happy-contractor-teamwork-project-plan-collaboration-industrial-architecture_590464-194169.jpg',
    title: 'Project Management',
    description: 'Efficient, transparent, and eco-conscious oversight.',
    details: 'We manage every project with meticulous attention to detail, ensuring timelines are met, budgets are respected, and sustainable practices are upheld throughout the construction lifecycle.'
  }
];

