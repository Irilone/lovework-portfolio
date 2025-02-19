
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';

/**
 * ImageWithFallback Component
 * 
 * A responsive image component that provides fallback handling, zoom functionality,
 * and motion effects while maintaining accessibility standards.
 *
 * @component
 * @param {string} src - The primary image source URL
 * @param {string} alt - Descriptive alt text for accessibility
 * @param {string} [fallback='/placeholder.svg'] - Fallback image URL if primary source fails
 * @param {string} [className] - Additional CSS classes
 * @param {boolean} [allowZoom=false] - Enable zoom functionality
 * @param {boolean} [hasMotion=false] - Enable motion effects
 */
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

  return (
    <div 
      className="relative" 
      role="img" 
      aria-label={alt}
    >
      <div
        className={cn(
          'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded-lg',
          allowZoom && 'cursor-zoom-in'
        )}
      >
        <img
          src={imageSource}
          alt={alt}
          onError={() => setError(true)}
          onClick={handleClick}
          onKeyDown={handleKeyPress}
          tabIndex={allowZoom ? 0 : -1}
          role={allowZoom ? 'button' : 'img'}
          aria-haspopup={allowZoom ? 'dialog' : undefined}
          aria-expanded={isZoomed}
          className={cn(
            'transition-opacity duration-300 max-w-full rounded-lg',
            hasMotion && 'transition-transform duration-500',
            allowZoom && 'hover:opacity-90',
            className
          )}
          loading="lazy"
          {...props}
        />
      </div>

      {allowZoom && (
        <Dialog 
          open={isZoomed} 
          onOpenChange={setIsZoomed}
        >
          <DialogContent 
            className="max-w-[90vw] max-h-[90vh] p-0"
            aria-label={`Zoomed view of ${alt}`}
          >
            <div 
              className="relative w-full h-full overflow-auto"
              role="presentation"
            >
              <img
                src={imageSource}
                alt={alt}
                className="w-full h-full object-contain"
                onClick={() => setIsZoomed(false)}
                onKeyDown={(e) => {
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
