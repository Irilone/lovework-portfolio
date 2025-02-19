
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  allowZoom?: boolean;
}

const ImageWithFallback = ({
  src,
  alt,
  fallback = '/placeholder.svg',
  className,
  allowZoom = false,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    if (allowZoom) {
      setIsZoomed(true);
    }
  };

  const imageSource = error ? fallback : src;

  return (
    <>
      <img
        src={imageSource}
        alt={alt}
        onError={() => setError(true)}
        onClick={handleClick}
        className={cn(
          'transition-opacity duration-300',
          allowZoom && 'cursor-zoom-in hover:opacity-90',
          className
        )}
        loading="lazy"
        {...props}
      />

      {allowZoom && (
        <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
          <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
            <div className="relative w-full h-full overflow-auto">
              <img
                src={imageSource}
                alt={alt}
                className="w-full h-full object-contain"
                onClick={() => setIsZoomed(false)}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ImageWithFallback;
