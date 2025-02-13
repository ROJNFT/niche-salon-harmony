
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeadSpaSection() {
  const services = [
    {
      title: "60 min Scalp Spa",
      description: "Therapeutic scalp treatment designed to cleanse, nourish and rejuvenate the scalp.",
      image: "/lovable-uploads/b92d305d-bae7-4f5c-9ca0-426b2d26a14c.png"
    },
    {
      title: "Scalp Spa + Facial",
      description: "Combines scalp care with a gentle facial cleansing process for total relaxation.",
      image: "/lovable-uploads/61ef72a6-2e0e-4a06-84b9-4d913e7ab2c4.png"
    },
    {
      title: "Dry Scalp Spa",
      description: "Perfect for extension clients who want to remove extra hair or those who are on the go.",
      image: "/lovable-uploads/241d20ae-b62f-42b8-aeb4-a753a83adb44.png"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Head Spa Experience</h2>
          <p className="text-muted-foreground">
            Exclusive to our Niche Beauty Spa location, our head spa treatments offer a unique blend of relaxation and hair therapy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-serif mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <Link to="/scalp-spa">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/scalp-spa">
            <Button variant="outline" className="bg-white hover:bg-accent border-primary/20 text-primary font-serif px-8">
              Learn More About Our Scalp Spa Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
