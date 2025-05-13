import Link from 'next/link';
import { PLACEHOLDER_GALLERIES } from '@/constants';
import PhotoGalleryCard from '@/components/photo/photo-gallery-card';
import { Separator } from '@/components/ui/separator';

export default function FotografGalerileriPage() {
  const galleries = PLACEHOLDER_GALLERIES;

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary border-l-4 border-primary pl-3">
        FOTO GALERİ
      </h1>

      {galleries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleries.map((gallery) => (
            <PhotoGalleryCard key={gallery.id} gallery={gallery} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">Henüz foto galeri bulunmamaktadır.</p>
      )}

      {/* Example: Pagination or "Load More" can be added here */}
      {/* <div className="mt-8 text-center">
        <Button variant="outline">Daha Fazla Yükle</Button>
      </div> */}
    </div>
  );
}