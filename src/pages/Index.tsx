
import { LocationCard } from "@/components/LocationCard";
import { HeadSpaSection } from "@/components/HeadSpaSection";
import { TeamSection } from "@/components/TeamSection";
import Logo from "@/components/Logo";
import { Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Index = () => {
  const [api, setApi] = useState<any>();
  const backgroundImages = [
    "/lovable-uploads/9adb1708-340c-4a03-b2dc-add6e5523757.png",
    "/lovable-uploads/5b18773a-f96b-4c93-b26b-bee2e2e008e9.png",
    "/lovable-uploads/bec1ec6e-b54f-4693-a90c-fad3586e651b.png"
  ];

  useEffect(() => {
    if (!api) return;

    // Auto-advance carousel every 5 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const locations = [
    {
      name: "Niche Beauty Lounge",
      address: "5393 Truxtun Ave, Bakersfield, CA 93309",
      phone: "(661) 587-7777",
      image: "/lovable-uploads/fa9a2cb6-a297-4d0a-bcba-7bf6292529bb.png",
      features: ["Hair Services", "Nail Services", "Esthetician Services"]
    },
    {
      name: "Niche Beauty Spa",
      address: "5060 California Ave STE 110, Bakersfield, CA 93309",
      phone: "(661) 282-5772",
      image: "/lovable-uploads/03cfe203-5dc8-4a7f-bda3-c535b47c837b.png",
      features: ["Hair Services", "Nail Services", "Head Spa Treatments"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        {/* Background Carousel */}
        <div className="absolute top-0 left-0 right-0 h-[calc(100%-80px)] overflow-hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full h-full"
          >
            <CarouselContent className="h-full">
              {backgroundImages.map((image, index) => (
                <CarouselItem key={index} className="h-full relative">
                  <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
                  <div className="absolute inset-0">
                    <img 
                      src={image} 
                      alt=""
                      className="w-full h-full object-cover opacity-30"
                      style={{ objectPosition: "center 30%" }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 transform translate-x-1/2 translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 text-primary/10">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 text-primary/10">
            <Sparkles className="w-8 h-8" />
          </div>
        </div>
        
        <div className="container py-12 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Logo className="h-56 w-auto mx-auto mb-8" />
            <p className="text-xl text-muted-foreground mb-8">
              Experience luxury hair and beauty services at our two convenient Bakersfield locations.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="w-8 h-px bg-muted-foreground/30" />
              <span>ESTABLISHED 2020</span>
              <span className="w-8 h-px bg-muted-foreground/30" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((location) => (
              <LocationCard key={location.name} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* Head Spa Section */}
      <HeadSpaSection />

      {/* Team Section */}
      <TeamSection />

      {/* Book Now Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-4xl font-serif mb-6">Ready to Experience Niche Beauty?</h2>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
