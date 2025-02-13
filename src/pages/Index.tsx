
import Logo from "@/components/Logo";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

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
                onClick={() => navigate('/location/lounge')}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full">
                  <img 
                    src="/lovable-uploads/fa9a2cb6-a297-4d0a-bcba-7bf6292529bb.png"
                    alt="Niche Beauty Lounge" 
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif">Niche Beauty Lounge</h3>
                  <p className="mt-2 text-sm text-white/80">5393 Truxtun Ave, Bakersfield</p>
                </div>
              </button>

              <button
                onClick={() => navigate('/location/spa')}
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
                  <p className="mt-2 text-sm text-white/80">5060 California Ave, Bakersfield</p>
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
