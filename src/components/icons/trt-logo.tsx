import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function TrtHaberLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <span className="bg-primary-foreground text-primary px-2 py-0.5 rounded font-bold text-lg md:text-xl leading-none">
        TRT
      </span>
      <span className="text-primary-foreground font-semibold text-lg md:text-xl ml-1.5 leading-none">
        HABER
      </span>
    </div>
  );
}
