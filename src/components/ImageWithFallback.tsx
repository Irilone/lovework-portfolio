
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  sources?: Array<{
    srcSet: string;
    media?: string;
    type?: string;
  }>;
}

const ImageWithFallback = ({
  src,
  alt,
  fallback = '/placeholder.svg',
  className,
  sources,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  return (
    <picture>
      {sources?.map((source, index) => (
        <source key={index} {...source} />
      ))}
      <img
        src={error ? fallback : src}
        alt={alt}
        onError={() => setError(true)}
        className={cn('transition-opacity duration-300', className)}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

export default ImageWithFallback;
