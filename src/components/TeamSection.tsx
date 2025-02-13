
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  instagram?: string;
}

export function TeamSection({ showFullList = false }: { showFullList?: boolean }) {
  const navigate = useNavigate();
  const team: TeamMember[] = [
    { name: "Ashley", role: "Stylist/Scalp Spa" },
    { name: "Beverly", role: "Stylist" },
    { name: "Danielle", role: "Stylist/Scalp Spa", instagram: "@hairbydeejul" },
    { name: "Emily", role: "Stylist/Scalp Spa", instagram: "@honey_rose" },
    { name: "Jesse", role: "Stylist" },
    { name: "Jocelyn", role: "Stylist/Scalp Spa", instagram: "@joscolors" }
  ];

  if (!showFullList) {
    return (
      <section className="py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-6">Our Expert Team</h2>
            <p className="text-muted-foreground mb-8">
              Meet our talented team of beauty professionals
            </p>
            <Button 
              onClick={() => navigate('/team')}
              className="inline-flex items-center gap-2"
            >
              Meet Our Team
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member) => (
        <div key={member.name} className="text-center p-6 bg-secondary rounded-lg">
          <h3 className="font-medium text-xl mb-2">{member.name}</h3>
          <p className="text-muted-foreground mb-3">{member.role}</p>
          {member.instagram && (
            <a 
              href={`https://instagram.com/${member.instagram}`} 
              className="text-sm text-primary hover:opacity-80 inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {member.instagram}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
