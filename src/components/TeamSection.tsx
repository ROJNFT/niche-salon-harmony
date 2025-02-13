
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Instagram, CircleDot } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  instagram?: string;
  bothLocations?: boolean;
}

export function TeamSection({ showFullList = false }: { showFullList?: boolean }) {
  const navigate = useNavigate();
  
  const team: TeamMember[] = [
    // Manicurists
    { name: "Toni Stevenson", role: "Manicurist" },
    { name: "Kyler Laegar", role: "Manicurist" },
    { name: "Michelle Roe", role: "Manicurist" },
    { name: "Shari George", role: "Manicurist" },
    
    // Estheticians
    { name: "Nancy Beagley", role: "Esthetician" },
    { name: "Caroline Peters", role: "Esthetician" },
    
    // Hairdressers (Both Locations)
    { name: "Rudi Slife", role: "Hairdresser", bothLocations: true, instagram: "rudidoeshair" },
    { name: "Maria Marroquin", role: "Hairdresser", bothLocations: true, instagram: "mariaa_thestylist" },
    { name: "Emily Gomez", role: "Hairdresser", bothLocations: true, instagram: "honey_roee" },
    { name: "Jocelyn Hernandez", role: "Hairdresser", bothLocations: true, instagram: "josscolors" },
    
    // Hairdressers (Single Location)
    { name: "Shannon Ehly", role: "Hairdresser" },
    { name: "Tim Leach", role: "Hairdresser" },
    { name: "Stephanie Milligan", role: "Hairdresser" },
    { name: "Mary Mcafee", role: "Hairdresser" },
    { name: "Toni Oldaker", role: "Hairdresser" },
    { name: "Sophia Ortega", role: "Hairdresser" },
    { name: "June DiMaggio", role: "Hairdresser" },
    { name: "Trinity Vasquez", role: "Hairdresser", instagram: "trins.chair" },
    { name: "Sabrina Chavez", role: "Hairdresser" },
    
    // Spa Only Staff
    { name: "Ashley Zimmerman", role: "Spa Specialist" },
    { name: "Danielle Puente", role: "Spa Specialist" },
    { name: "Vanessa Shaddy", role: "Owner & Spa Specialist" },
    { name: "Robin Enos", role: "Spa Specialist" },
    { name: "Kenny Booker", role: "Spa Specialist" },
    { name: "Beverly", role: "Spa Specialist" },
    { name: "Shelby Udy-Escalera", role: "Spa Specialist" },
    { name: "Kelly Bozarth", role: "Spa Specialist" },
    { name: "Maricela", role: "Spa Specialist" }
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

  const groupedTeam = {
    manicurists: team.filter(member => member.role === "Manicurist"),
    estheticians: team.filter(member => member.role === "Esthetician"),
    hairdressers: team.filter(member => member.role === "Hairdresser"),
    spaSpecialists: team.filter(member => member.role === "Spa Specialist")
  };

  return (
    <div className="space-y-12">
      {Object.entries(groupedTeam).map(([category, members]) => (
        <div key={category}>
          <h2 className="text-2xl font-serif mb-6 capitalize">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div 
                key={member.name} 
                className="p-6 rounded-lg border border-primary/20 bg-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium text-xl">{member.name}</h3>
                  {member.bothLocations && (
                    <span title="Available at both locations">
                      <CircleDot className="h-4 w-4 text-primary" />
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-3">{member.role}</p>
                {member.instagram && (
                  <a 
                    href={`https://instagram.com/${member.instagram}`} 
                    className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>@{member.instagram}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
