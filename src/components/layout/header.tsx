'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, Menu as MenuIcon, X as XIcon, CloudSun, ChevronDown, Briefcase, Users, Edit3, FileText, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { TrtHaberLogo } from '@/components/icons/trt-logo';
import { NavMenu } from './nav-menu';
import { NAV_LINKS } from '@/constants'; // Import NAV_LINKS for mobile menu

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentTemperature, setCurrentTemperature] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState<string>("Ankara");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching weather data
    setCurrentTemperature("12.5°C");
  }, []);

  const mainNavLinks = NAV_LINKS.filter(link => !['Diğer Kategoriler', 'Yazarlar', 'Video', 'Foto Galeri'].includes(link.label));
  const otherLinks = NAV_LINKS.filter(link => ['Diğer Kategoriler', 'Yazarlar', 'Video', 'Foto Galeri'].includes(link.label));


  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary text-primary-foreground shadow-md">
      {/* Main Header */}
      <div className="container mx-auto flex h-16 items-center justify-between px-2 sm:px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <TrtHaberLogo className="h-7 md:h-8" />
          </Link>
          <div className="hidden lg:flex">
            <NavMenu links={mainNavLinks} />
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-3">
          <Link href="#" className="hidden md:flex items-center space-x-1 text-sm font-medium hover:opacity-90">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-primary-foreground animate-pulse"></div>
            <span>CANLI</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/10 h-8 w-8 md:h-9 md:w-9"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Aramayı aç/kapat"
          >
            <Search size={20} />
          </Button>
          {isSearchOpen && (
            <Input
              type="search"
              placeholder="Ara..."
              className="hidden md:block h-9 w-48 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/70 border-primary-foreground/20 focus:bg-primary-foreground/20"
            />
          )}
           <div className="hidden md:flex items-center space-x-1 text-sm">
            <CloudSun size={20} />
            <span>{currentTemperature || '--.-°C'}</span>
            <button className="flex items-center hover:opacity-90">
              <span>{currentLocation}</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 h-9 w-9">
                  <MenuIcon size={24} />
                  <span className="sr-only">Menüyü aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[360px] bg-background text-foreground p-0 flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <TrtHaberLogo className="h-7 text-primary" /> {/* Logo with primary color text on light bg */}
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon"> <XIcon size={24} /> </Button>
                  </SheetClose>
                </div>
                
                <div className="p-4 border-b">
                    <div className="relative">
                    <Input
                        type="search"
                        placeholder="Haberlerde ara..."
                        className="h-10 pr-10 bg-muted text-foreground placeholder-muted-foreground"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary h-8 w-8"
                        aria-label="Ara"
                    >
                        <Search size={20} />
                    </Button>
                    </div>
                </div>

                <div className="flex-grow overflow-y-auto">
                    <NavMenu links={NAV_LINKS} isMobile onLinkClick={() => setIsMobileMenuOpen(false)} />
                </div>
                
                <div className="p-4 border-t">
                    <Link href="#" className="flex items-center justify-center space-x-2 text-sm font-medium text-primary-foreground bg-primary py-2.5 rounded-md hover:bg-primary/90 w-full">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-primary-foreground animate-pulse"></div>
                        <span>CANLI YAYIN</span>
                    </Link>
                     <div className="flex items-center space-x-2 text-sm mt-4 text-muted-foreground justify-center">
                        <CloudSun size={18} />
                        <span>{currentTemperature || '--.-°C'}</span>
                        <span>{currentLocation}</span>
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
