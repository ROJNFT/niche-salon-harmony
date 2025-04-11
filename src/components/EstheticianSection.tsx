import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function EstheticianSection() {
  const estheticianImages = [
    "/lovable-uploads/esthetician1.jpg",
    "/lovable-uploads/esthetician2.jpg",
    "/lovable-uploads/esthetician4.jpg",
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif mb-4">Esthetician Services</h2>
            <p className="text-muted-foreground">
              Our skilled estheticians at Niche Beauty Lounge provide a range of specialized skincare treatments.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="relative rounded-lg mb-6 overflow-hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {estheticianImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-80 md:h-96 lg:h-[450px] w-full overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`Esthetician Services ${index + 1}`} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Professional Skincare</h3>
              
              <p className="text-muted-foreground">
                Experience personalized skincare treatments designed to enhance your natural beauty and promote 
                healthy, glowing skin. Our estheticians combine expertise with premium products to deliver 
                exceptional results.
              </p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li>• Customized facial treatments</li>
                <li>• Professional skin analysis</li>
                <li>• Advanced skincare techniques</li>
                <li>• Relaxing spa environment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
