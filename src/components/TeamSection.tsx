
interface TeamMember {
  name: string;
  role: string;
  instagram?: string;
}

export function TeamSection() {
  const team: TeamMember[] = [
    { name: "Ashley", role: "Stylist/Scalp Spa" },
    { name: "Beverly", role: "Stylist" },
    { name: "Danielle", role: "Stylist/Scalp Spa", instagram: "@hairbydeejul" },
    { name: "Emily", role: "Stylist/Scalp Spa", instagram: "@honey_rose" },
    { name: "Jesse", role: "Stylist" },
    { name: "Jocelyn", role: "Stylist/Scalp Spa", instagram: "@joscolors" }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-serif text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <h3 className="font-medium mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
              {member.instagram && (
                <a href={`https://instagram.com/${member.instagram}`} className="text-sm text-primary hover:opacity-80">
                  {member.instagram}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
