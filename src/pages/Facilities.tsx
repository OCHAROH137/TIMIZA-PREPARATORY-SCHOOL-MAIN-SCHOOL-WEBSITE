import { Card, CardContent } from "@/components/ui/card";
import { Laptop, FlaskRound, BookOpen, Dumbbell, Music, Bus, GraduationCap, Utensils } from "lucide-react";
import computerLab from "@/assets/complab.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import  dorm from "@/assets/dorm.jpg";
import transport1 from "@/assets/bus.jpg";
import dining from "@/assets/dh.jpg";
import classroom1 from "@/assets/class.jpg";
import sportsField from "@/assets/schoolteam2.jpg";
import facilitiesHero from "@/assets/swing.jpg";

const facilities = [
  {
    icon: Laptop,
    title: "ICT Laboratory",
    description: "Our state-of-the-art computer lab is equipped with modern computers and high-speed internet connectivity. Students receive hands-on training in digital literacy, coding, and various computer applications.",
    image: computerLab,
    features: ["40+ Modern Computers", "High-Speed Internet", "Interactive Smartboards", "Software Development Tools"]
  },
  {
    icon: FlaskRound,
    title: "Science Laboratory",
    description: "Fully equipped science labs for Physics, Chemistry, and Biology enable students to conduct practical experiments and develop scientific inquiry skills in a safe, supervised environment.",
    image: scienceLab,
    features: ["Modern Lab Equipment", "Safety Gear & Protocols", "Chemical Storage", "Qualified Lab Technicians"]
  },
  {
    icon: BookOpen,
    title: "Modern Dormitory",
    description: " Our modern dorm features spacious rooms, cozy bedding, and well-planned living areas.",
    image: dorm,
    features: ["Clean Washrooms", "Comfortable Beds", "Matrons and Patrons Support", "Hot Shower"]
  },
  {
    icon: Dumbbell,
    title: "Sports Facilities",
    description: "Spacious sports grounds and facilities for various sporting activities including football, athletics, basketball, volleyball, and more. We promote physical fitness and sportsmanship.",
    image: sportsField,
    features: ["Football Field", "Basketball Court", "Volleyball Court", "Athletics Track"]
  },
  {
    icon: GraduationCap,
    title: "Modern Classrooms",
    description: "Spacious, well-ventilated classrooms designed for optimal learning. Each classroom is equipped with modern teaching aids and comfortable furniture to enhance the learning experience.",
    image: classroom1,
    features: ["Smart Boards", "Comfortable Seating", "Natural Lighting", "Audio-Visual Equipment"]
  },
  {
    icon: Music,
    title: "Music & Drama Room",
    description: "Dedicated space for music lessons and drama rehearsals, complete with musical instruments and a small stage for performances. We nurture artistic talents and creativity.",
    image: null,
    features: ["Musical Instruments", "Performance Stage", "Sound System", "Drama Props"]
  },
  {
    icon: Utensils,
    title: "Dining Hall",
    description: "Clean, spacious dining facility where students enjoy nutritious, balanced meals prepared by our qualified kitchen staff. We maintain high standards of hygiene and food safety.",
    image: dining,
    features: ["Nutritious Meals", "Clean Environment", "Qualified Staff", "Hygienic Standards"]
  },
  {
    icon: Bus,
    title: "School Transport",
    description: "Safe and reliable school transport service covering various routes. Our buses are regularly maintained and driven by experienced, licensed drivers for student safety.",
    image: transport1,
    features: ["Multiple Routes", "Experienced Drivers", "Regular Maintenance", "GPS Tracking"]
  }
];

const Facilities = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${facilitiesHero})` }}
        >
          <div className="absolute inset-0 bg-secondary/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-heading font-semibold text-base sm:text-lg mb-2">Our Facilities</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            World-Class Learning Environment
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto opacity-90">
            We provide modern, well-equipped facilities that create an ideal environment for learning, 
            growth, and development of every student
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">

        {/* Facilities Grid */}
        <div className="space-y-8 sm:space-y-12">
          {facilities.map((facility, index) => (
            <Card key={index} className="border-none shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`aspect-[16/10] md:aspect-auto min-h-[250px] sm:min-h-[300px] md:min-h-[400px] ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    {facility.image ? (
                      <img 
                        src={facility.image} 
                        alt={facility.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <facility.icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-primary/30" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <facility.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
                        {facility.title}
                      </h2>
                    </div>
                    
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                      {facility.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {facility.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center gap-2 text-xs sm:text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="border-none shadow-card bg-muted/30 inline-block max-w-2xl w-full">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-secondary mb-3 sm:mb-4">
                Visit Our Campus
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto">
                Experience our facilities firsthand. Schedule a campus tour today!
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold hover:bg-primary/90 transition-colors"
              >
                Schedule a Tour
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
