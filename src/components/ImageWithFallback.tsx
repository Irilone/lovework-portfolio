
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  allowZoom?: boolean;
  hasMotion?: boolean;
}

const ImageWithFallback = ({
  src,
  alt,
  fallback = '/placeholder.svg',
  className,
  allowZoom = false,
  hasMotion = false,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  };

  const handleClick = () => {
    if (allowZoom) {
      setIsZoomed(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (allowZoom && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setIsZoomed(true);
    }
  };

  const imageSource = error ? fallback : src;

  const ImageComponent = hasMotion ? motion.img : 'img';

  return (
    <div className="relative" role="img" aria-label={alt}>
      <ImageComponent
        src={imageSource}
        alt={alt}
        onError={handleError}
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        tabIndex={allowZoom ? 0 : undefined}
        className={cn(
          'transition-transform duration-300',
          allowZoom && 'cursor-zoom-in',
          className
        )}
        {...props}
      />

      {allowZoom && (
        <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
          <DialogContent className="max-w-[90vw] max-h-[90vh] p-0" aria-label={`Zoomed view of ${alt}`}>
            <div className="relative w-full h-full overflow-auto" role="presentation">
              <img
                src={imageSource}
                alt={alt}
                className="w-full h-full object-contain"
                onClick={() => setIsZoomed(false)}
                onKeyDown={e => {
                  if (e.key === 'Escape') {
                    setIsZoomed(false);
                  }
                }}
                tabIndex={0}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ImageWithFallback;
