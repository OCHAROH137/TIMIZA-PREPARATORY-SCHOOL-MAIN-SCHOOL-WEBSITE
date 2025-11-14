import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  Award, 
  Shield, 
  Heart, 
  Target,
  Music,
  Laptop,
  Trophy,
  BookOpen
} from "lucide-react";
import heroImage from "@/assets/admin.jpg";
import computerLab from "@/assets/complab.jpg";
import scienceLab from "@/assets/labpic.jpg";
import transport from "@/assets/bus.jpg";
import sportsField from "@/assets/schoolteam.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <p className="font-heading text-primary text-lg md:text-xl mb-4 animate-fade-in">
            Discover Your Best !
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Nurturing Excellence from<br />Playgroup to Junior School
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Building a strong foundation for academic excellence, character development, and lifelong success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/admissions/preschool">Apply for Admission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
              <Link to="/contact">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Academic Excellence",
                description: "Comprehensive curriculum aligned with CBC standards for holistic development"
              },
              {
                icon: Users,
                title: "Qualified Facilitators",
                description: "Experienced and dedicated Facilitators committed to learners' success"
              },
              {
                icon: Shield,
                title: "Safe Environment",
                description: "Secure campus with round-the-clock security and modern facilities"
              },
              {
                icon: Heart,
                title: "Character Building",
                description: "Nurturing values of discipline, empathy, and trustworthiness"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-secondary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Students" },
              { number: "25+", label: "Qualified Facilitators" },
              { number: "10+", label: "Active Students Clubs" },
              { number: "5+", label: "Years of Excellence" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-heading text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold mb-2">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
              Building Bright Futures for Your Children
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide a nurturing environment where every child can discover their potential and develop the skills needed for future success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Target, label: "Discipline" },
              { icon: Award, label: "Excellence" },
              { icon: Users, label: "Teamwork" },
              { icon: Heart, label: "Empathy" },
              { icon: BookOpen, label: "Creativity" },
              { icon: Shield, label: "Trustworthiness" }
            ].map((value, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary shadow-card hover:shadow-elevated transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-heading font-semibold text-secondary">{value.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold mb-2">Our Facilities</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              World-Class Learning Environment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { image: computerLab, title: "ICT Laboratory", description: "A modern ICT laboratory fully equipped with advanced computers, reliable internet access, and updated learning software to support research, creativity, and digital competency" },
              { image: scienceLab, title: "Science Laboratory", description: "A fully equipped science laboratory that allows learners to explore, experiment, and discover scientific concepts through practical, real-world experiences." },
              { image: transport, title: "School Transport", description: "A safe, comfortable, and dependable transport system offering convenient travel across multiple routes for all learners." },
              { image: sportsField, title: "Sports Fields", description: "Well-developed sports grounds that support a wide range of athletic activities, training, and competitions." }
            ].map((facility, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-secondary mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/facilities">View All Facilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clubs Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold mb-2">Clubs & Societies</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Discover Your Passion
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Laptop, name: "Computer Club", color: "bg-blue-500" },
              { icon: Music, name: "Music Club", color: "bg-purple-500" },
              { icon: Trophy, name: "Football Club", color: "bg-green-500" },
              { icon: Award, name: "Drama Club", color: "bg-pink-500" }
            ].map((club, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${club.color} flex items-center justify-center`}>
                    <club.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-secondary">{club.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link to="/clubs">Explore All Clubs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join Timiza?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Begin your child's journey to excellence. Apply now and become part of our growing family.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0">
            <Link to="/admissions/preschool">Apply for Admission</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
