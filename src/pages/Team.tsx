
import { TeamSection } from "@/components/TeamSection";

const Team = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-serif text-center mb-16">Our Team</h1>
        <div className="max-w-4xl mx-auto">
          <TeamSection showFullList={true} />
        </div>
      </div>
    </div>
  );
};

export default Team;
