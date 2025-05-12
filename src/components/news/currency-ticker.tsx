
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface CurrencyItem {
  name: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  symbol?: string; // Optional: like $, €, etc.
}

interface CurrencyTickerProps {
  title: string;
  data: CurrencyItem[];
}

export default function CurrencyTicker({ title, data }: CurrencyTickerProps) {
  const getTrendIcon = (trend: CurrencyItem['trend']) => {
    if (trend === 'up') return <ArrowUpRight className="h-4 w-4 text-green-500" />;
    if (trend === 'down') return <ArrowDownRight className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getTrendColorClass = (trend: CurrencyItem['trend']) => {
    if (trend === 'up') return 'text-green-500';
    if (trend === 'down') return 'text-red-500';
    return 'text-muted-foreground';
  };

  return (
    <Card className="shadow-lg rounded-lg h-full border-border/70">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-2xl font-bold text-primary border-l-4 border-primary pl-3">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={item.name}>
              <div className="flex justify-between items-center py-2">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">{item.name}</span>
                  {item.symbol && <span className="text-xs text-muted-foreground">{item.symbol}</span>}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-base font-bold text-foreground">{item.value}</span>
                  <div className={cn("flex items-center text-xs", getTrendColorClass(item.trend))}>
                    {getTrendIcon(item.trend)}
                    <span className="ml-1">{item.change}</span>
                  </div>
                </div>
              </div>
              {index < data.length - 1 && <Separator className="bg-border/50" />}
            </div>
          ))}
        </div>
        <div className="mt-4 text-right">
            <a href="#" className="text-sm text-primary hover:underline font-medium">
                Tüm Piyasalar &rarr;
            </a>
        </div>
      </CardContent>
    </Card>
  );
}
