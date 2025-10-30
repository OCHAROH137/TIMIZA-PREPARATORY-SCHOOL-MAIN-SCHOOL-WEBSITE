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
                To provide a safe, nurturing, and stimulating learning environment that fosters academic excellence, 
                character development, and creative thinking. We aim to equip learners with the knowledge, skills, 
                and values necessary to become responsible global citizens.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-card">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-secondary mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading educational institution recognized for excellence in holistic education, 
                character formation, and innovative teaching practices that prepare learners for success 
                in an ever-changing world.
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
                description: "We instill self-control, responsibility, and respect for rules and others"
              },
              {
                icon: Award,
                letter: "E",
                title: "Excellence",
                description: "We strive for the highest standards in all our endeavors"
              },
              {
                icon: Users,
                letter: "T",
                title: "Teamwork",
                description: "We foster collaboration, cooperation, and mutual support"
              },
              {
                icon: Heart,
                letter: "E",
                title: "Empathy",
                description: "We cultivate understanding, compassion, and kindness towards others"
              },
              {
                icon: BookOpen,
                letter: "C",
                title: "Creativity",
                description: "We encourage innovation, imagination, and original thinking"
              },
              {
                icon: Target,
                letter: "T",
                title: "Trustworthiness",
                description: "We build integrity, honesty, and reliability in all interactions"
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
                Timiza Preparatory and Junior Secondary School was established in 2009 with a vision to provide 
                quality education that nurtures the whole child. Starting with just a handful of students, 
                we have grown to serve over 500 learners from Playgroup to Grade 9.
              </p>
              <p>
                Over the years, we have consistently maintained high academic standards while ensuring that 
                character development remains at the core of our educational approach. Our competency-based 
                curriculum (CBC) is designed to equip learners with 21st-century skills, critical thinking 
                abilities, and strong moral values.
              </p>
              <p>
                Today, Timiza School stands as a beacon of educational excellence in our community, with 
                state-of-the-art facilities, qualified educators, and a proven track record of producing 
                well-rounded graduates who excel in their chosen fields.
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
              <p className="text-xs text-muted-foreground mt-1">Registration No: XXXX/XXXX</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
