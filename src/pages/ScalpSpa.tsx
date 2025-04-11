import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ScalpSpa = () => {
  const faceSpaImages = [
    "/lovable-uploads/facespa1.webp",
    "/lovable-uploads/facespa2.webp",
    "/lovable-uploads/facespa3.webp",
    "/lovable-uploads/facespa4.webp",
  ];

  const services = [
    {
      title: "60 min Scalp Spa",
      description: "Therapeutic scalp treatment designed to cleanse, nourish, and rejuvenate the scalp. The service will include using a scope to assess the health of the scalp and follicles before beginning a deep cleanse, hydration treatment using mists and serums, a massage to promote blood circulation, relieve tension, and encourage health hair growth, and much more.",
      icon: "/lovable-uploads/Spaicon1.svg"
    },
    {
      title: "Scalp Spa + Facial",
      description: "In this service we provide the same routine as listed in the 60-minute scalp spa service, and add a treatment that combines scalp care with a gentle lymphatic drainage technique to promote overall wellness, relaxation, and rejuvenation. We follow a gentle facial cleansing process that prepares the skin for hydration and nourishment.",
      icon: "/lovable-uploads/spaicon2.svg"
    },
    {
      title: "Dry Scalp Spa",
      description: "A dry scalp spa includes dry brushing to break up oils, build up, and dead skin cells. We add therapeutic scalp drops that help promote hair growth, sooth irritation, and balance scalp health, all while being free from sulfates, parabens, and harsh chemicals. This service is perfect for extension clients who do not want to remove the extra hair or those who are on the go!",
      icon: "/lovable-uploads/spaicon3.svg"
    },
    {
      title: "Blow Out",
      description: "Enhance the overall experience by adding a soothing conclusion to the scalp spa session. After the scalp has been deeply cleansed, nourished, and hydrated, a blow out will give your hair a smooth, voluminous, and styled finish.",
      icon: "/lovable-uploads/spaicon4.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/50">
      <div className="container py-20">
        <Link to="/location/spa" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Beauty
        </Link>
        
        <h1 className="text-5xl font-serif mb-12 text-center">All About the Scalp Spa</h1>
        
        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-16">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={service.icon} 
                alt={service.title} 
                className="w-24 h-24 mb-6 mx-auto"
              />
              <h2 className="text-2xl font-serif mb-4">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Facial Spa Image Carousel */}
        <div className="max-w-4xl mx-auto mt-16 mb-8">
          <h2 className="text-3xl font-serif mb-8 text-center">Experience Our Facial Spa</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Carousel className="w-full">
              <CarouselContent>
                {faceSpaImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-80 md:h-96 lg:h-[450px] w-full overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`Facial Spa ${index + 1}`} 
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
          </div>
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            Our premium facial spa treatments are designed to rejuvenate your skin and provide a relaxing, 
            therapeutic experience. Combining advanced skincare techniques with luxurious products, 
            we create a customized treatment for your specific needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScalpSpa;
