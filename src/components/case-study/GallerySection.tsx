
interface GallerySectionProps {
  title: string;
  images: string[];
}

const GallerySection = ({ title, images }: GallerySectionProps) => {
  return (
    <section id="gallery" className="scroll-mt-24 animate-fade-up [animation-delay:600ms]">
      <h2 className="text-3xl font-semibold mb-8">Visual Journey</h2>
      <div className="space-y-8">
        {images.map((image, index) => (
          <figure key={index} className="space-y-4">
            <img
              src={image}
              alt={`${title} - Design phase ${index + 1}`}
              className="w-full rounded-2xl shadow-lg"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              Phase {index + 1} of the design process
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
