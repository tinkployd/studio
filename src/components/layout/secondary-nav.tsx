
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Camera, PlaySquare, Info, Target, Podcast as PodcastIcon } from 'lucide-react'; // Using PodcastIcon for clarity
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Foto Galeri', href: '/fotograf-galerileri', icon: Camera }, // Updated label and href
  { label: 'Video Galeri', href: '#', icon: PlaySquare },
  { label: 'İnfografik', href: '#', icon: Info },
  { label: 'İnteraktif', href: '#', icon: Target },
  { label: 'Podcast', href: '/podcast', icon: PodcastIcon }, // Updated href
];

export default function SecondaryNav() {
  const pathname = usePathname();

  // Hide this navigation on podcast and photo gallery pages
  const hideNav = pathname.startsWith('/podcast') || pathname.startsWith('/fotograf-galerileri') || pathname.startsWith('/foto-galeri');

  if (hideNav) {
    return null;
  }

  return (
    <nav className="bg-background border-b border-border/30 mt-2 mb-4 md:mt-3 md:mb-5"> {/* Adjusted margins */}
      <div className="container mx-auto px-2 sm:px-4">
        <ul className="flex items-center justify-end space-x-3 sm:space-x-4 md:space-x-5 h-10 overflow-x-auto"> {/* justify-end for right alignment */}
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-1.5 text-xs sm:text-sm font-bold uppercase text-foreground hover:text-primary transition-colors group py-2 whitespace-nowrap tracking-wide",
                  pathname === item.href && "text-primary" // Highlight active link
                )}
              >
                <item.icon size={16} className={cn("group-hover:text-primary transition-colors flex-shrink-0", pathname === item.href ? "text-primary" : "text-muted-foreground")} /> {/* Adjust icon color */}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
