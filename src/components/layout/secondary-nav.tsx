'use client';

import Link from 'next/link';
import { Camera, PlaySquare, Info, Target, Podcast as PodcastIcon } from 'lucide-react'; // Using PodcastIcon for clarity

const navItems = [
  { label: 'Foto Fokus', href: '#', icon: Camera },
  { label: 'Video Galeri', href: '#', icon: PlaySquare },
  { label: 'İnfografik', href: '#', icon: Info },
  { label: 'İnteraktif', href: '#', icon: Target },
  { label: 'Podcast', href: '#', icon: PodcastIcon },
];

export default function SecondaryNav() {
  return (
    <nav className="bg-secondary border-y border-border/50">
      <div className="container mx-auto px-2 sm:px-4">
        <ul className="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4 md:space-x-6 h-12 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="flex items-center space-x-1.5 text-sm font-medium text-secondary-foreground hover:text-primary transition-colors group py-2 whitespace-nowrap">
                <item.icon size={18} className="text-primary group-hover:text-primary transition-colors" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
