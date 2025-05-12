'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { summarizeArticle, type SummarizeArticleInput } from '@/ai/flows/summarize-article';
import { Loader2, FileText, BookOpen, AlertCircle, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ArticleSummaryClientProps {
  articleContent: string; // Expect full content
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
          // Ensure the content passed is substantial enough for summarization
          const contentToSummarize = articleContent.length > 50 ? articleContent : "İçerik özetlenemeyecek kadar kısa.";
          if (contentToSummarize === "İçerik özetlenemeyecek kadar kısa.") {
             setSummary(contentToSummarize);
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
    <div className="mt-3">
      <div className="flex flex-wrap gap-2 items-center mb-2">
        <Button onClick={handleToggleSummary} disabled={isPending} variant="outline" size="sm" className="text-xs px-2 py-1 h-auto">
          {isPending ? (
            <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
          ) : showSummary ? (
            <FileText className="mr-1.5 h-3.5 w-3.5" />
          ) : (
            <BookOpen className="mr-1.5 h-3.5 w-3.5" />
          )}
          {isPending ? 'Özetleniyor...' : showSummary ? 'Metni Göster' : 'Haberi Özetle'}
        </Button>
        {sourceUrl && (
           <Button variant="outline" size="sm" asChild className="text-xs px-2 py-1 h-auto">
             <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
               <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
               Kaynağa Git
             </a>
           </Button>
        )}
      </div>

      {showSummary ? (
        summary ? (
          <div className="prose prose-sm max-w-none p-3 bg-muted/30 rounded-md shadow-sm border border-border/50">
            <h4 className="text-sm font-semibold mb-1.5 text-primary">Haber Özeti</h4>
            <p className="text-xs text-foreground">{summary}</p>
          </div>
        ) : isPending ? (
          <div className="flex items-center justify-center p-3 bg-muted/30 rounded-md min-h-[70px]">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <span className="ml-2 text-xs">Özet yükleniyor...</span>
          </div>
        ) : (
           <div className="flex items-center p-3 bg-destructive/10 text-destructive rounded-md text-xs">
             <AlertCircle className="h-4 w-4 mr-1.5" />
             <span>Özet yüklenemedi.</span>
           </div>
        )
      ) : (
        <div className="prose prose-sm max-w-none">
          {/* Displaying truncated content by default */}
          <p className="text-sm text-muted-foreground line-clamp-3 md:line-clamp-4">
             {articleContent.substring(0, 150) + (articleContent.length > 150 ? '...' : '')}
          </p>
        </div>
      )}
    </div>
  );
}
