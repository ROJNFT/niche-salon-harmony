
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Instagram, CircleDot, Star } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  instagram?: string;
  bothLocations?: boolean;
  isOwner?: boolean;
  location?: 'lounge' | 'spa';
}

export function TeamSection({ showFullList = false }: { showFullList?: boolean }) {
  const navigate = useNavigate();
  
  const team: TeamMember[] = [
    // Owner
    { name: "Vanessa Shaddy", role: "Owner & Spa Specialist", isOwner: true, location: 'spa' },
    
    // Beauty Lounge Staff
    // Manicurists
    { name: "Toni Stevenson", role: "Manicurist", location: 'lounge' },
    { name: "Kyler Laegar", role: "Manicurist", location: 'lounge' },
    { name: "Michelle Roe", role: "Manicurist", location: 'lounge' },
    { name: "Shari George", role: "Manicurist", location: 'lounge' },
    
    // Estheticians
    { name: "Nancy Beagley", role: "Esthetician", location: 'lounge' },
    { name: "Caroline Peters", role: "Esthetician", location: 'lounge' },
    
    // Hairdressers (Both Locations)
    { name: "Rudi Slife", role: "Hair Stylist", bothLocations: true },
    { name: "Maria Marroquin", role: "Hair Stylist", bothLocations: true, instagram: "mariaa_thestylist" },
    { name: "Emily Gomez", role: "Hair Stylist", bothLocations: true, instagram: "honey_roee" },
    { name: "Jocelyn Hernandez", role: "Hair Stylist", bothLocations: true, instagram: "josscolors" },
    
    // Hairdressers (Lounge)
    { name: "Shannon Ehly", role: "Hair Stylist", location: 'lounge' },
    { name: "Tim Leach", role: "Hair Stylist", location: 'lounge' },
    { name: "Stephanie Milligan", role: "Hair Stylist", location: 'lounge' },
    { name: "Mary Mcafee", role: "Hair Stylist", location: 'lounge' },
    { name: "Toni Oldaker", role: "Hair Stylist", location: 'lounge' },
    { name: "Sophia Ortega", role: "Hair Stylist", location: 'lounge' },
    { name: "June DiMaggio", role: "Hair Stylist", location: 'lounge' },
    { name: "Trinity Vasquez", role: "Hair Stylist", location: 'lounge', instagram: "trins.chair" },
    { name: "Sabrina Chavez", role: "Hair Stylist", location: 'lounge' },
    
    // Spa Only Staff
    { name: "Ashley Zimmerman", role: "Spa Specialist", location: 'spa' },
    { name: "Danielle Puente", role: "Spa Specialist", location: 'spa' },
    { name: "Robin Enos", role: "Spa Specialist", location: 'spa' },
    { name: "Kenny Booker", role: "Spa Specialist", location: 'spa' },
    { name: "Beverly", role: "Spa Specialist", location: 'spa' },
    { name: "Shelby Udy-Escalera", role: "Spa Specialist", location: 'spa' },
    { name: "Kelly Bozarth", role: "Spa Specialist", location: 'spa' },
    { name: "Maricela", role: "Spa Specialist", location: 'spa' }
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

  // First, get the owner
  const owner = team.find(member => member.isOwner);
  
  // Then group the rest by location and role
  const loungeStaff = team.filter(member => member.location === 'lounge' || member.bothLocations);
  const spaStaff = team.filter(member => member.location === 'spa' && !member.isOwner);

  const groupByRole = (staff: TeamMember[]) => {
    return staff.reduce((groups, member) => {
      const role = member.role.replace(' Specialist', '').replace(' Stylist', '');
      if (!groups[role]) {
        groups[role] = [];
      }
      groups[role].push(member);
      return groups;
    }, {} as Record<string, TeamMember[]>);
  };

  return (
    <div className="space-y-12">
      {/* Legend */}
      <div className="bg-secondary/50 p-4 rounded-lg flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" />
          <span>Owner</span>
        </div>
        <div className="flex items-center gap-2">
          <CircleDot className="h-4 w-4 text-primary" />
          <span>Available at both locations</span>
        </div>
      </div>

      {/* Owner Section */}
      {owner && (
        <div className="bg-primary/10 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-medium text-xl">{owner.name}</h3>
            <Star className="h-4 w-4 text-primary" />
          </div>
          <p className="text-muted-foreground">{owner.role}</p>
        </div>
      )}

      {/* Beauty Lounge Staff */}
      <div>
        <h2 className="text-2xl font-serif mb-8">Niche Beauty Lounge Team</h2>
        {Object.entries(groupByRole(loungeStaff)).map(([role, members]) => (
          <div key={role} className="mb-12">
            <h3 className="text-xl font-serif mb-6">{role}s</h3>
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

      {/* Spa Staff */}
      <div>
        <h2 className="text-2xl font-serif mb-8">Niche Beauty Spa Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaStaff.map((member) => (
            <div 
              key={member.name} 
              className="p-6 rounded-lg border border-primary/20 bg-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium text-xl">{member.name}</h3>
              </div>
              <p className="text-muted-foreground mb-3">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
