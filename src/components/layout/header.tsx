'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, PlayCircle, Menu as MenuIcon, X as XIcon, CalendarDays, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { TrtHaberLogo } from '@/components/icons/trt-logo';
import { NavMenu } from './nav-menu';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(format(new Date(), "d MMMM yyyy, EEEE HH:mm", { locale: tr }));
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); // Update every minute
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-secondary/50 text-secondary-foreground py-1">
        <div className="container mx-auto flex items-center justify-between px-4 text-xs">
          <div className="flex items-center space-x-2">
            <CalendarDays size={14} />
            <span>{currentDateTime.split(',')[0]}, {currentDateTime.split(',')[1]}</span>
            <Clock size={14} className="ml-1"/>
            <span>{currentDateTime.split(',')[2]}</span>
          </div>
          <div className="hidden md:flex space-x-3">
            <Link href="#" className="hover:text-primary transition-colors">TRT İZLE</Link>
            <Link href="#" className="hover:text-primary transition-colors">TRT DİNLE</Link>
            <Link href="#" className="hover:text-primary transition-colors">TRT ARŞİV</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <TrtHaberLogo className="text-primary-foreground h-8 w-auto" />
          </Link>

          <div className="hidden md:flex flex-grow items-center justify-center">
            <NavMenu />
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative hidden md:block">
              {isSearchOpen && (
                <Input
                  type="search"
                  placeholder="Haberlerde ara..."
                  className="h-9 pr-8 bg-background text-foreground placeholder-muted-foreground"
                />
              )}
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10 h-9 w-9"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Aramayı aç/kapat"
              >
                <Search size={20} />
              </Button>
            </div>
            <Button variant="destructive" className="bg-accent hover:bg-accent/90 h-9 hidden md:flex">
              <PlayCircle size={20} className="mr-2" />
              CANLI YAYIN
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 h-9 w-9">
                    <MenuIcon size={24} />
                    <span className="sr-only">Menüyü aç</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background p-6">
                  <div className="flex justify-between items-center mb-6">
                     <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <TrtHaberLogo className="h-8 w-auto" />
                     </Link>
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon"> <XIcon size={24} /> </Button>
                    </SheetClose>
                  </div>
                  <div className="relative mb-4">
                    <Input
                      type="search"
                      placeholder="Haberlerde ara..."
                      className="h-10 pr-10 bg-muted"
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
                  <NavMenu isMobile onLinkClick={() => setIsMobileMenuOpen(false)} />
                  <Button variant="destructive" className="w-full mt-6 bg-accent hover:bg-accent/90">
                    <PlayCircle size={20} className="mr-2" />
                    CANLI YAYIN
                  </Button>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
