import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import clubsHero from "@/assets/st.jpg";
import musicClub from "@/assets/music.jpg";
import dramaClub from "@/assets/drama.jpg";
import debateClub from "@/assets/music.jpg";
import scoutsClub from "@/assets/scouts5.jpg";
import computerClub from "@/assets/complab.jpg";
import chessClub from "@/assets/clubs/chess-club.jpg";
import footballClub from "@/assets/schoolteam.jpg";
import redcrossClub from "@/assets/clubs/redcross-club.jpg";
import galleryHero from "@/assets/ruma12.jpeg";
import computerLab from "@/assets/complab.jpg";
import scienceLab from "@/assets/g2.jpg";
import music10 from "@/assets/music10.jpeg";
import music11 from "@/assets/music11.jpeg";
import music12 from "@/assets/music12.jpeg";
import music13 from "@/assets/music13.jpeg";
import music14 from "@/assets/music14.jpeg";
import music15 from "@/assets/music15.jpeg";
import music16 from "@/assets/music 16.jpeg";
import music17 from "@/assets/music 17.jpeg";
import library from "@/assets/drama.jpg";
import primary12 from "@/assets/primary 12.jpeg";
import school11 from "@/assets/school11.jpeg";
import sportsField from "@/assets/schoolteam.jpg";
import swim10 from "@/assets/swim10.jpeg";
import football10 from "@/assets/football10.jpg";
import ruma10 from "@/assets/ruma10.jpeg";
import galfoot1 from "@/assets/schoolteam2.jpg";
import drama10 from "@/assets/drama10.jpeg";
import drama21 from "@/assets/drama21.jpg";
import drama22 from "@/assets/drama22.jpg";
import scout5 from "@/assets/scouts5.jpg";
import scout2 from "@/assets/scouts2.jpg";
import scout3 from "@/assets/scouts3.jpg";
import scout14 from "@/assets/school14.jpeg";
import schoolteam2 from "@/assets/schoolteam2.jpg";
import footpitch from "@/assets/footpitch.jpg";
import gals from "@/assets/gals.jpg";
import boys from "@/assets/boys.jpg";
import pp2 from "@/assets/pp2.jpg";

const clubs = [
  {
    name: "Music Club",
    image: musicClub,
    description: "Develop musical talents through instrumental training, choir performances, and music theory.",
    fullDescription: "Our Music Club provides a comprehensive musical education where students explore various instruments, participate in choirs, and learn music theory. We organize regular performances and concerts.",
    activities: ["Instrumental Training", "Choir Practice", "Music Theory", "Performances & Concerts"],
    achievements: ["Regional Music Festival Winners 2024", "Annual Concert Excellence", "Inter-school Competition Champions", "Talented performers in piano, guitar, and drums"],
    gallery: [music13, music11, music12, music16]
  },
  {
    name: "Drama Club",
    image: dramaClub,
    description: "Express creativity through theater arts, stage performances, and dramatic presentations.",
    fullDescription: "The Drama Club nurtures theatrical talent and creative expression through regular rehearsals, performances, and dramatic arts education. Students develop confidence, public speaking, and acting skills.",
    activities: ["Theater Productions", "Acting Workshops", "Script Writing", "Stage Management"],
    achievements: ["Best School Play Award 2024", "Outstanding Director Recognition", "Regional Drama Competition Finalists", "Multiple successful stage productions"],
    gallery: [dramaClub, drama10, drama21, drama22]
  },

  {
    name: "Football Club",
    image: footballClub,
    description: "Promote teamwork, fitness, and sportsmanship through competitive football training.",
    fullDescription: "The Football Club develops athletic skills, teamwork, and competitive spirit. Students receive professional coaching and participate in inter-school leagues and tournaments.",
    activities: ["Training Sessions", "Inter-school Matches", "Fitness Training", "Tournament Participation"],
    achievements: ["County Champions 2024", "Best Discipline Team Award", "Regional Tournament Semi-Finalists", "Outstanding Goal Scorers"],
    gallery: [footballClub, schoolteam2, footballClub, footballClub]
  },


  {
    name: "Debate Club",
    image: debateClub,
    description: "Enhance critical thinking, public speaking, and argumentation skills through structured debates.",
    fullDescription: "Our Debate Club trains students in the art of persuasive speaking, critical analysis, and logical argumentation. Members participate in inter-school competitions and parliamentary debates.",
    activities: ["Parliamentary Debates", "Public Speaking Training", "Research & Preparation", "Inter-school Competitions"],
    achievements: ["National Debate Champions 2024", "Best Speaker Awards", "Regional Competition Winners", "Oxford Union Virtual Debate Participants"],
    gallery: [debateClub, debateClub, debateClub, debateClub]
  },
  {
    name: "Scouts Club",
    image: scoutsClub,
    description: "Build character, leadership, and outdoor survival skills through scouting activities.",
    fullDescription: "The Scouts Club focuses on character development, outdoor skills, and community service. Students learn camping, first aid, leadership, and environmental conservation.",
    activities: ["Outdoor Camping", "Survival Skills", "Community Service", "Leadership Training"],
    achievements: ["Best Scout Troop Award 2024", "Community Service Excellence", "National Jamboree Participants", "Environmental Conservation Projects"],
    gallery: [scout5, scout14, scout3, scout2]
  },
  {
    name: "Computer Club",
    image: computerClub,
    description: "Explore technology through coding, robotics, and digital innovation projects.",
    fullDescription: "The Computer Club introduces students to programming, web development, robotics, and digital literacy. Members work on innovative projects and participate in coding competitions.",
    activities: ["Programming & Coding", "Robotics", "Web Development", "Digital Literacy"],
    achievements: ["Regional Coding Competition Winners", "Robotics Championship Finalists", "App Development Showcase", "Google Code-In Participants"],
    gallery: [computerClub, computerClub, computerClub, computerClub]
  },
  {
    name: "Chess Club",
    image: chessClub,
    description: "Develop strategic thinking and concentration through competitive chess tournaments.",
    fullDescription: "Our Chess Club trains students in strategic thinking, problem-solving, and concentration. Members participate in tournaments and improve their chess ratings through regular practice.",
    activities: ["Chess Tournaments", "Strategy Training", "Competitive Practice", "Online Chess Matches"],
    achievements: ["Regional Chess Champions 2024", "Multiple National Tournament Qualifiers", "Highest Rated Junior Players", "Inter-school Championship Winners"],
    gallery: [chessClub, chessClub, chessClub, chessClub]
  },
  {
    name: "Skating Club",
    image: footballClub,
    description: "Promote teamwork, fitness, and sportsmanship through competitive football training.",
    fullDescription: "The Football Club develops athletic skills, teamwork, and competitive spirit. Students receive professional coaching and participate in inter-school leagues and tournaments.",
    activities: ["Training Sessions", "Inter-school Matches", "Fitness Training", "Tournament Participation"],
    achievements: ["County Champions 2024", "Best Discipline Team Award", "Regional Tournament Semi-Finalists", "Outstanding Goal Scorers"],
    gallery: [footballClub, footballClub, footballClub, footballClub]
  },
 
];

const Clubs = () => {
  const [selectedClub, setSelectedClub] = useState<typeof clubs[0] | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${clubsHero})` }}
        >
          <div className="absolute inset-0 bg-secondary/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-heading font-semibold text-base sm:text-lg mb-2">Clubs & Societies</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Discover Your Passion
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto opacity-90">
            Join our vibrant clubs and societies to explore your interests, develop new skills, 
            and make lasting friendships
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Clubs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clubs.map((club, index) => (
            <Card key={index} className="border-none shadow-card overflow-hidden group hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={club.image} 
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">
                    {club.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {club.description}
                  </p>
                  <Button 
                    onClick={() => setSelectedClub(club)}
                    variant="outline"
                    className="w-full text-xs sm:text-sm"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="border-none shadow-card bg-muted/30 inline-block max-w-2xl w-full">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-secondary mb-3 sm:mb-4">
                Join a Club Today
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto">
                Interested in joining any of our clubs? Contact us for more information!
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Club Detail Dialog */}
      <Dialog open={!!selectedClub} onOpenChange={() => setSelectedClub(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl sm:text-3xl font-bold text-secondary pr-8">
              {selectedClub?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedClub && (
            <div className="space-y-6">
              {/* Gallery */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {selectedClub.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${selectedClub.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">About</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {selectedClub.fullDescription}
                </p>
              </div>

              {/* Activities */}
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">Activities</h3>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                  {selectedClub.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">Achievements</h3>
                <div className="space-y-2">
                  {selectedClub.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Clubs;
