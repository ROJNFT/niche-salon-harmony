
import { LocationCard } from "@/components/LocationCard";
import { HeadSpaSection } from "@/components/HeadSpaSection";
import { TeamSection } from "@/components/TeamSection";

const Index = () => {
  const locations = [
    {
      name: "Niche Beauty Lounge",
      address: "5393 Truxtun Ave, Bakersfield, CA 93309",
      image: "/lovable-uploads/fa9a2cb6-a297-4d0a-bcba-7bf6292529bb.png",
      features: ["Hair Services", "Nail Services", "Esthetician Services"]
    },
    {
      name: "Niche Beauty Spa",
      address: "5060 California Ave STE 110, Bakersfield, CA 93309",
      image: "/lovable-uploads/03cfe203-5dc8-4a7f-bda3-c535b47c837b.png",
      features: ["Hair Services", "Nail Services", "Head Spa Treatments"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-serif mb-6">Welcome to Niche Beauty</h1>
            <p className="text-xl text-muted-foreground">
              Experience luxury hair and beauty services at our two convenient Bakersfield locations.
            </p>
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
