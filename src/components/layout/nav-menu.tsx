
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
        const hasDropdown = !!link.isDropdown;
        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              "text-xs font-semibold uppercase tracking-wide transition-all duration-200 ease-in-out flex items-center", // Base styles, changed transition
              isMobile 
                ? [ // Mobile specific styles
                    "py-2.5 px-3 text-base w-full rounded-md text-foreground hover:bg-muted hover:text-primary",
                    pathname === link.href && "bg-muted text-primary font-bold"
                  ]
                : [ // Desktop specific styles
                    "px-1.5 py-2 md:px-2 lg:px-2.5 rounded-md", // Base padding and ensure rounded-md for hover/active
                    pathname === link.href 
                      ? "bg-primary-foreground text-primary shadow-lg" // Active state: white bg, red text, shadow
                      : "text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:shadow-lg", // Inactive state with new hover
                    pathname !== link.href && !isMobile && "text-primary-foreground/90", // Opacity for inactive non-mobile text
                  ]
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

