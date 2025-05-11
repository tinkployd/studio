import type { SVGProps } from 'react';

export function TrtHaberLogo(props: SVGProps<SVGSVGElement>) {
  return (
    // Using a simple text representation for the logo
    // For an actual SVG logo, replace this with the <svg>...</svg> element
    <div className="font-bold text-2xl md:text-3xl tracking-tight flex items-center" {...props}>
      <span className="text-primary">TRT</span>
      <span className="text-foreground">HABER</span>
    </div>
  );
}
