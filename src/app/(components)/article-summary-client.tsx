'use client';

import { useState, useEffect, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { summarizeArticle, type SummarizeArticleInput } from '@/ai/flows/summarize-article';
import { Loader2, FileText, FileJson, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ArticleSummaryClientProps {
  articleContent: string;
  sourceUrl?: string;
}

export default function ArticleSummaryClient({ articleContent, sourceUrl }: ArticleSummaryClientProps) {
  const [showSummary, setShowSummary] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleToggleSummary = () => {
    if (!showSummary && !summary) {
      startTransition(async () => {
        try {
          const input: SummarizeArticleInput = { articleContent };
          const result = await summarizeArticle(input);
          setSummary(result.summary);
          setShowSummary(true);
        } catch (error) {
          console.error('Error summarizing article:', error);
          toast({
            title: "Özetleme Hatası",
            description: "Makale özeti alınırken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",
            variant: "destructive",
          });
          setSummary(null); // Clear summary on error
          setShowSummary(false); // Revert to original content view
        }
      });
    } else {
      setShowSummary(!showSummary);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2 items-center mb-4">
        <Button onClick={handleToggleSummary} disabled={isPending} variant="outline" size="sm">
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : showSummary ? (
            <FileText className="mr-2 h-4 w-4" />
          ) : (
            <FileJson className="mr-2 h-4 w-4" />
          )}
          {isPending ? 'Özetleniyor...' : showSummary ? 'Orjinal Metni Göster' : 'Haberi Özetle'}
        </Button>
        {sourceUrl && (
           <Button variant="outline" size="sm" asChild>
             <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
               <ExternalLinkIcon className="mr-2 h-4 w-4" />
               Kaynak
             </a>
           </Button>
        )}
      </div>

      {showSummary ? (
        summary ? (
          <div className="prose prose-sm max-w-none p-4 bg-muted/50 rounded-md shadow">
            <h3 className="text-lg font-semibold mb-2 text-primary">Haber Özeti</h3>
            <p>{summary}</p>
          </div>
        ) : isPending ? (
          <div className="flex items-center justify-center p-4 bg-muted/50 rounded-md min-h-[100px]">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <span className="ml-2">Özet yükleniyor...</span>
          </div>
        ) : (
           <div className="flex items-center p-4 bg-destructive/10 text-destructive rounded-md">
             <AlertCircle className="h-5 w-5 mr-2" />
             <span>Özet yüklenemedi. Lütfen orijinal metni okuyun.</span>
           </div>
        )
      ) : (
        <div className="prose prose-sm max-w-none">
          <p>{articleContent}</p>
        </div>
      )}
    </div>
  );
}

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  )
}
