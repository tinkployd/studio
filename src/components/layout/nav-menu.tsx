'use client';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavMenuProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export function NavMenu({ isMobile = false, onLinkClick }: NavMenuProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", {
      "flex-col space-x-0 space-y-2 items-start": isMobile,
    })}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            "text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary-foreground/80",
            pathname === link.href ? "text-primary-foreground" : "text-primary-foreground/70",
             isMobile ? "py-2 text-lg text-foreground hover:text-primary" : "py-2 hover:border-b-2 hover:border-accent"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
