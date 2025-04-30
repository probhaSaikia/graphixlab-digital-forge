
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import { Autoplay } from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

interface CarouselSlide {
  image: string;
  tagline: string;
  description: string;
}

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const slides: CarouselSlide[] = [
    {
      image: "/lovable-uploads/e38798ec-862c-40b4-a391-0c252302dbb2.png",
      tagline: "Build Together",
      description: "Collaborate with our team to create innovative digital solutions"
    },
    {
      image: "/lovable-uploads/eb4f8430-eab5-4fce-8166-fa5c6338973b.png",
      tagline: "Code Excellence",
      description: "Expert development across multiple languages and frameworks"
    },
    {
      image: "/lovable-uploads/d0359efa-bc3e-4d0a-a1ad-efa075324d9b.png",
      tagline: "Digital Craftsmanship",
      description: "Creating beautiful, functional websites with precision and care"
    },
    {
      image: "/lovable-uploads/d38ac88d-d681-4b4a-84c4-15db6ce0fbff.png",
      tagline: "Modern Solutions",
      description: "Implementing cutting-edge technologies for your digital needs"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setActiveSlide(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-deep-black overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Digital <span className="text-electric-blue">Expertise</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our creative process and technological capabilities
          </motion.p>
        </div>
        
        <div className="relative mt-10 mb-20 px-4">
          <Carousel 
            opts={{ loop: true, align: "center" }}
            plugins={[
              Autoplay({ delay: 5000, stopOnInteraction: false }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="md:basis-2/3 lg:basis-3/5">
                  {({ isSelected }) => (
                    <div className={cn(
                      "relative overflow-hidden rounded-xl transition-all duration-500 transform",
                      isSelected ? "scale-100 opacity-100" : "scale-90 opacity-70"
                    )}>
                      <div className="aspect-[16/9] relative overflow-hidden rounded-xl group">
                        <motion.div
                          initial={{ scale: 1.1 }}
                          animate={{ scale: isSelected ? 1 : 1.05 }}
                          transition={{ duration: 0.8 }}
                          className="absolute inset-0 bg-black"
                        >
                          <img
                            src={slide.image}
                            alt={slide.tagline}
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        </motion.div>
                        
                        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                          <AnimatePresence mode="wait">
                            {isSelected && (
                              <>
                                <motion.h3
                                  className="text-2xl font-bold mb-2 neon-text"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.4 }}
                                >
                                  {slide.tagline}
                                </motion.h3>
                                <motion.p
                                  className="text-sm md:text-base text-gray-200"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                  {slide.description}
                                </motion.p>
                              </>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-4 bg-black/50 text-white hover:bg-electric-blue/80 border-electric-blue/30" />
            <CarouselNext className="hidden md:flex -right-4 bg-black/50 text-white hover:bg-electric-blue/80 border-electric-blue/30" />
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeSlide === index 
                    ? "w-6 bg-electric-blue" 
                    : "bg-gray-600 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
