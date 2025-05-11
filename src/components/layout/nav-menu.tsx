'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import type { NavLink } from '@/constants';

interface NavMenuProps {
  links: NavLink[];
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export function NavMenu({ links, isMobile = false, onLinkClick }: NavMenuProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center", 
      isMobile ? "flex-col space-y-1 items-start w-full p-4" : "space-x-1 md:space-x-2 lg:space-x-3"
    )}>
      {links.map((link) => {
        const hasDropdown = ['SICAK', 'DİĞER', 'GÜNDEM', 'DÜNYA', 'EKONOMİ', 'SPOR', 'BİLİM TEKNOLOJİ', 'YAŞAM', 'KÜLTÜR SANAT', 'SAĞLIK', 'PROGRAMLAR'].includes(link.label.toUpperCase()); // Match specific labels from image or extend as needed
        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              "text-xs font-semibold uppercase tracking-wide transition-colors flex items-center",
              isMobile 
                ? "py-2.5 px-3 text-base w-full rounded-md text-foreground hover:bg-muted hover:text-primary"
                : "px-1.5 py-2 md:px-2 lg:px-2.5 text-primary-foreground hover:text-primary-foreground/80",
              pathname === link.href && !isMobile ? "text-primary-foreground opacity-100" : !isMobile ? "text-primary-foreground/90" : "",
              pathname === link.href && isMobile ? "bg-muted text-primary font-bold" : ""
            )}
          >
            {link.label}
            {hasDropdown && !isMobile && <ChevronDown size={16} className="ml-0.5" />}
            {hasDropdown && isMobile && <ChevronDown size={20} className="ml-auto" />}
          </Link>
        );
      })}
    </nav>
  );
}
