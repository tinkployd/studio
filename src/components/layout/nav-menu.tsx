
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
      isMobile ? "flex-col space-y-1 items-start w-full p-4" : "space-x-0.5 md:space-x-1 lg:space-x-1.5" // Reduced spacing for desktop
    )}>
      {links.map((link) => {
        const hasDropdown = !!link.isDropdown;
        // For mobile menu, check if the current path starts with the link's href if it's a top-level category like /podcast
        const isActive = isMobile 
          ? (link.href === '/podcast' ? pathname.startsWith(link.href) : pathname === link.href)
          : pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              "font-bold uppercase tracking-wider transition-all duration-200 ease-in-out flex items-center", 
              isMobile 
                ? [ 
                    "py-3 px-3 text-sm w-full rounded-md text-foreground hover:bg-muted hover:text-primary", 
                    isActive && "bg-muted text-primary" 
                  ]
                : [ 
                    "px-2 py-2 md:px-2.5 lg:px-3 rounded-md text-xs md:text-sm", // Adjusted font size for desktop
                    isActive
                      ? "bg-primary-foreground text-primary shadow-md" 
                      : "text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:shadow-md", 
                    !isActive && !isMobile && "text-primary-foreground/90",
                  ]
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
            {hasDropdown && !isMobile && <ChevronDown size={14} className="ml-0.5" />}
            {hasDropdown && isMobile && <ChevronDown size={18} className="ml-auto" />}
          </Link>
        );
      })}
    </nav>
  );
}
