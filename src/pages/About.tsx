import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Heart, BookOpen, Shield } from "lucide-react";
import aboutHero from "@/assets/boys.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/65 to-secondary/55" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-primary font-heading font-semibold text-lg mb-2">About Timiza School</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nurturing Excellence Since 2009
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            At Timiza Preparatory and Junior School, we are committed to providing quality education 
            that develops the whole child - academically, socially, emotionally, and physically.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-none shadow-card">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-secondary mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide a learning environment for learners to exploit their talents and attain their academic exellence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-card">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-secondary mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
               Empower Learners to acquire knowledge and skills to contribute to the global world
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values - D.E.T.E.C.T. */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Core Values: D.E.T.E.C.T.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do at Timiza School
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                letter: "D",
                title: "Discipline",
                description: "We act in accordance to the rules and regulations"
              },
              {
                icon: Award,
                letter: "E",
                title: "Excellence",
                description: "We are committed to being the best, achieve more and be great"
              },
              {
                icon: Users,
                letter: "T",
                title: "Teamwork",
                description: "We strive to win together"
              },
              {
                icon: Heart,
                letter: "E",
                title: "Expertise",
                description: "We infuse competency into everything we do"
              },
              {
                icon: BookOpen,
                letter: "C",
                title: "Creativity and Innovation",
                description: "We embrace original and new ideas that add value"
              },
              {
                icon: Target,
                letter: "T",
                title: "Trust",
                description: "We believe in integrity, reliability and fairness"
              }
            ].map((value, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary shadow-card hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-heading font-bold text-xl flex-shrink-0">
                      {value.letter}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <value.icon className="w-5 h-5 text-primary" />
                        <h3 className="font-heading font-semibold text-lg text-secondary">{value.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* History */}
        <Card className="border-none shadow-card bg-muted/30">
          <CardContent className="p-8 md:p-12">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-6">Our History</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
               Timiza Preparatory and Junior Secondary School has grown remarkably since its establishment and proudly celebrated its 5th anniversary this year. What began as a small institution has now become a vibrant educational community with steadily increasing learner admissions each term — a clear reflection of our commitment to quality education and holistic development.
              </p>
              <p>
               Over the years, we have continued to improve and expand our facilities to meet the evolving needs of our learners. Our modern classrooms, reliable transport system with school buses, and a well-structured Junior Secondary School section are part of our ongoing effort to create an enriched learning environment.
              </p>
              <p>
                Beyond academics, Timiza School continues to shine in co-curricular activities. Our learners have excelled in music, drama, and football, earning recognition at various levels and building confidence, teamwork, and talent along the way.
              </p>
              <p>
                Today, we stand proud of the strong foundation we have built — a school that nurtures discipline, creativity, and academic excellence, preparing our learners to thrive in every stage of life.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Accreditation */}
        <div className="mt-12 text-center">
          <Card className="border-none shadow-card inline-block">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Registered & Accredited by</p>
              <p className="font-heading font-semibold text-secondary">Ministry of Education, Kenya</p>
              {/* <p className="text-xs text-muted-foreground mt-1">Registration No: XXXX/XXXX</p> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
