
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Pause, Play, ZoomIn } from 'lucide-react';

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
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const handleClick = () => {
    if (allowZoom) {
      setIsZoomed(true);
    }
  };

  const toggleAnimation = () => {
    setIsAnimationPaused(!isAnimationPaused);
  };

  const imageSource = error ? fallback : src;

  return (
    <div className="relative" role="img" aria-label={alt}>
      <img
        src={imageSource}
        alt={alt}
        onError={() => setError(true)}
        onClick={handleClick}
        className={cn(
          'transition-opacity duration-300',
          allowZoom && 'cursor-zoom-in hover:opacity-90',
          isAnimationPaused && 'animate-none',
          className
        )}
        loading="lazy"
        {...props}
      />
      
      {hasMotion && (
        <div 
          className="absolute bottom-2 right-2"
          role="group"
          aria-label="Animation controls"
        >
          <Button
            variant="secondary"
            size="icon"
            onClick={toggleAnimation}
            className="rounded-full bg-background/80 backdrop-blur-sm"
            aria-label={isAnimationPaused ? "Resume animation" : "Pause animation"}
          >
            {isAnimationPaused ? (
              <Play className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Pause className="h-4 w-4" aria-hidden="true" />
            )}
          </Button>
        </div>
      )}

      {allowZoom && (
        <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
          <DialogContent 
            className="max-w-[90vw] max-h-[90vh] p-0"
            aria-label={`Zoomed view of ${alt}`}
          >
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
    </div>
  );
};

export default ImageWithFallback;
