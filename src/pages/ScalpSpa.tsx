
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ScalpSpa = () => {
  const services = [
    {
      title: "60 min Scalp Spa",
      description: "Therapeutic scalp treatment designed to cleanse, nourish, and rejuvenate the scalp. The service will include using a scope to assess the health of the scalp and follicles before beginning a deep cleanse, hydration treatment using mists and serums, a massage to promote blood circulation, relieve tension, and encourage health hair growth, and much more.",
      icon: "🕯️"
    },
    {
      title: "Scalp Spa + Facial",
      description: "In this service we provide the same routine as listed in the 60-minute scalp spa service, and add a treatment that combines scalp care with a gentle lymphatic drainage technique to promote overall wellness, relaxation, and rejuvenation. We follow a gentle facial cleansing process that prepares the skin for hydration and nourishment.",
      icon: "💆‍♀️"
    },
    {
      title: "Dry Scalp Spa",
      description: "A dry scalp spa includes dry brushing to break up oils, build up, and dead skin cells. We add therapeutic scalp drops that help promote hair growth, sooth irritation, and balance scalp health, all while being free from sulfates, parabens, and harsh chemicals. This service is perfect for extension clients who do not want to remove the extra hair or those who are on the go!",
      icon: "🌸"
    },
    {
      title: "Blow Out",
      description: "Enhance the overall experience by adding a soothing conclusion to the scalp spa session. After the scalp has been deeply cleansed, nourished, and hydrated, a blow out will give your hair a smooth, voluminous, and styled finish.",
      icon: "💨"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/50">
      <div className="container py-20">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl font-serif mb-12 text-center">All About the Scalp Spa</h1>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-serif mb-4">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScalpSpa;
