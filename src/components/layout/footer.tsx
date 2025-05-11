import Link from 'next/link';
import { TrtHaberLogo } from '@/components/icons/trt-logo';
import { FOOTER_LINKS_COL1, FOOTER_LINKS_COL2, TRT_NETWORK_LINKS } from '@/constants';
import { Facebook, Twitter, Instagram, YoutubeIcon as Youtube } from 'lucide-react'; // Renamed to avoid conflict

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        {/* TRT Network Links */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 text-primary">TRT NETWORK</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {TRT_NETWORK_LINKS.map(link => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <TrtHaberLogo className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">Türkiye'nin haber kaynağı.</p>
            <div className="flex space-x-3 mt-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
              <Link href="#" aria-label="Youtube" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Kurumsal</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS_COL1.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Yasal</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS_COL2.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Uygulamalarımız</h4>
            <div className="flex space-x-2">
              <Link href="#" aria-label="App Store">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" data-ai-hint="app store" className="h-10" />
              </Link>
              <Link href="#" aria-label="Google Play">
                 <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" data-ai-hint="google play" className="h-10" />
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Türkiye Radyo Televizyon Kurumu. Her Hakkı Saklıdır.
        </div>
      </div>
    </footer>
  );
}

// Dummy Separator for structure, replace with ShadCN if needed
function Separator({ className }: { className?: string }) {
  return <hr className={`border-border/50 ${className}`} />;
}
