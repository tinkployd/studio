
'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { summarizeArticle, type SummarizeArticleInput } from '@/ai/flows/summarize-article';
import { Loader2, FileText, BookOpen, AlertCircle, ExternalLink } from 'lucide-react';
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
          const contentToSummarize = articleContent.replace(/<[^>]*>?/gm, '').trim(); // Strip HTML for summarization
          if (contentToSummarize.length < 100) { // Increased minimum length
             setSummary("İçerik özetlenemeyecek kadar kısa veya uygun formatta değil.");
             setShowSummary(true);
             return;
          }

          const input: SummarizeArticleInput = { articleContent: contentToSummarize };
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
          setSummary(null);
          setShowSummary(false);
        }
      });
    } else {
      setShowSummary(!showSummary);
    }
  };

  return (
    <div className="mt-4"> {/* Reduced top margin */}
      <div className="flex flex-wrap gap-2 items-center mb-3">
        <Button onClick={handleToggleSummary} disabled={isPending} variant="default" size="default" className="bg-primary hover:bg-primary/90">
          {isPending ? (
            <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
          ) : showSummary ? (
            <FileText className="mr-1.5 h-4 w-4" />
          ) : (
            <BookOpen className="mr-1.5 h-4 w-4" />
          )}
          {isPending ? 'Özetleniyor...' : showSummary ? 'Özeti Kapat' : 'Haberi Özetle'}
        </Button>
        {sourceUrl && (
           <Button variant="outline" size="sm" asChild className="text-xs px-2 py-1 h-auto border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary">
             <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
               <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
               Kaynağa Git
             </a>
           </Button>
        )}
      </div>

      {showSummary && ( // Always show the container if showSummary is true
        summary ? (
          <div className="prose prose-sm max-w-none p-4 bg-muted/50 rounded-md shadow-sm border border-border/50">
            <h4 className="text-sm font-semibold mb-1.5 text-primary">Haber Özeti</h4>
            <p className="text-sm text-foreground leading-relaxed">{summary}</p>
          </div>
        ) : isPending ? (
          <div className="flex items-center justify-center p-4 bg-muted/50 rounded-md min-h-[80px]">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <span className="ml-2 text-sm text-muted-foreground">Özet yükleniyor...</span>
          </div>
        ) : ( // This case handles if summary is null and not pending (e.g. initial state before button click or error state without toast)
           <div className="flex items-center p-4 bg-destructive/10 text-destructive rounded-md text-sm">
             <AlertCircle className="h-4 w-4 mr-1.5" />
             <span>Özet yüklenemedi veya içerik uygun değil.</span>
           </div>
        )
      )}
      {/* Removed the original content preview from here, as it's part of the main article body */}
    </div>
  );
}
