import Logo from "@/components/Logo";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  // Function to create a Google Maps URL from an address
  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  // Address data
  const loungeAddress = "5393 Truxtun Ave, Bakersfield, CA 93309";
  const spaAddress = "5060 California Ave, Bakersfield, CA 93309";

  // Handler for location card click
  const handleLocationClick = (path: string) => {
    navigate(path);
  };

  // Handler for address click
  const handleAddressClick = (e: React.MouseEvent<HTMLAnchorElement>, address: string) => {
    e.stopPropagation(); // Prevent the card click from triggering
    window.open(getGoogleMapsUrl(address), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-12 bg-secondary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 transform translate-x-1/2 translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 text-primary/10">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-primary/10">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <Logo className="h-56 w-auto mx-auto mb-16" />
            
            <div className="grid md:grid-cols-2 gap-8">
              <button
                onClick={() => handleLocationClick('/location/lounge')}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full">
                  <img 
                    src="/lovable-uploads/Front Photo.jpg"
                    alt="Niche Beauty Lounge" 
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif">Niche Beauty Lounge</h3>
                  <a 
                    href="#" 
                    onClick={(e) => handleAddressClick(e, loungeAddress)}
                    className="mt-2 text-sm text-white/80 hover:text-white hover:underline inline-block"
                  >
                    5393 Truxtun Ave, Bakersfield
                  </a>
                </div>
              </button>

              <button
                onClick={() => handleLocationClick('/location/spa')}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full">
                  <img 
                    src="/lovable-uploads/03cfe203-5dc8-4a7f-bda3-c535b47c837b.png"
                    alt="Niche Beauty Spa" 
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif">Niche Beauty Spa</h3>
                  <a 
                    href="#" 
                    onClick={(e) => handleAddressClick(e, spaAddress)}
                    className="mt-2 text-sm text-white/80 hover:text-white hover:underline inline-block"
                  >
                    5060 California Ave, Bakersfield
                  </a>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
