
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Camera, PlaySquare, Info, Target, Podcast as PodcastIcon, Video } from 'lucide-react'; // Using PodcastIcon for clarity, added Video
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Foto Galeri', href: '/fotograf-galerileri', icon: Camera },
  { label: 'Video Galeri', href: '/videolar', icon: Video }, // Updated icon and href
  { label: 'İnfografik', href: '#', icon: Info },
  { label: 'İnteraktif', href: '#', icon: Target },
  { label: 'Podcast', href: '/podcast', icon: PodcastIcon },
];

export default function SecondaryNav() {
  const pathname = usePathname();

  // Hide this navigation on podcast, photo gallery listing/detail, and video listing/detail pages
  const hideNavPatterns = [
    '/podcast',
    '/fotograf-galerileri',
    '/foto-galeri/',
    '/videolar', // Matches /videolar and /videolar/*
  ];

  const hideNav = hideNavPatterns.some(pattern => pathname.startsWith(pattern));


  if (hideNav) {
    return null;
  }

  return (
    <nav className="bg-background border-b border-border/30 mt-2 mb-4 md:mt-3 md:mb-5">
      <div className="container mx-auto px-2 sm:px-4">
        <ul className="flex items-center justify-end space-x-3 sm:space-x-4 md:space-x-5 h-10 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-1.5 text-xs sm:text-sm font-bold uppercase text-foreground hover:text-primary transition-colors group py-2 whitespace-nowrap tracking-wide",
                  pathname === item.href && "text-primary" 
                )}
              >
                <item.icon size={16} className={cn("group-hover:text-primary transition-colors flex-shrink-0", pathname === item.href ? "text-primary" : "text-muted-foreground")} /> 
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
