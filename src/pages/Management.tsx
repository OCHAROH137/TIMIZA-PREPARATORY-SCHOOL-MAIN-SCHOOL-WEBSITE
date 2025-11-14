import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import directoromosa from "@/assets/omosa.jpg";
import directorfanice from "@/assets/staff/fanice.jpg";
import headTeacher from "@/assets/staff/okwach.jpg";
import deputyHead from "@/assets/staff/deputy-head.jpg";
import teacherMary from "@/assets/staff/teacher-mary.jpg";
import teacherJohn from "@/assets/staff/teacher-john.jpg";
import teacherAnn from "@/assets/staff/teacher-ann.jpg";
import teacherSamuel from "@/assets/staff/teacher-samuel.jpg";
import adminEsther from "@/assets/staff/admin-esther.jpg";
import financeRobert from "@/assets/staff/finance-robert.jpg";
import managementHero from "@/assets/gals.jpg";

const managementData = [
  {
    category: "School Directors",
    members: [
      {
        name: "Dr. Omosa Ombuna",
        position: "General Director",
        bio: "With over 20 years of experience in educational leadership, Dr. Ombuna brings a wealth of knowledge in curriculum development and school management.",
        email: "director@timizaschool.ac.ke",
        image: directoromosa
      },
      {
        name: "Dr. Fanice Mose",
        position: "General Director",
        bio: "Dr. Fanice oversees the day-to-day operations of the school, ensuring smooth functioning of all departments and facilities.",
        email: "operations@timizaschool.ac.ke",
        image: directorfanice
      }
    ]
  },

    {
    category: "Administration",
    members: [
      {
        name: "Mr. Kelvin Marime",
        position: "School Administrator",
        bio: "Mrs. Kelvin manages admissions, student records, and administrative operations with efficiency and care.",
        email: "admin@timizaschool.ac.ke",
        image: adminEsther
      },
      {
        name: "Mr. James Odhiambo",
        position: "Finance Officer",
        bio: "Mr. James handles financial operations, budgeting, and resource allocation for the school.",
        email: "finance@timizaschool.ac.ke",
        image: financeRobert
      }
    ]
  }
];

const Management = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${managementHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/75 to-secondary/60" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-primary font-heading font-semibold text-lg mb-2">Our Team</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Leadership & Management
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Meet our dedicated team of professionals committed to providing exceptional education and nurturing young minds
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">

        {/* Management Sections */}
        <div className="space-y-16">
          {managementData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-6 sm:mb-8 pb-4 border-b-2 border-primary/20">
                {section.category}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {section.members.map((member, memberIndex) => (
                  <Card key={memberIndex} className="border-2 border-transparent shadow-card hover:shadow-elevated hover:border-primary transition-all duration-300 w-full sm:max-w-[280px] md:max-w-xs">
                    <CardContent className="p-4 sm:p-6 text-center">
                      {/* Staff Photo */}
                      <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-muted">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="mb-3 sm:mb-4">
                        <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary mb-1">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-primary mb-2 sm:mb-3">
                          {member.position}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                        {member.bio}
                      </p>

                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center gap-2 text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="break-all">{member.email}</span>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Staff Note */}
        <Card className="mt-16 border-none shadow-card bg-muted/30">
          <CardContent className="p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
              Our Teaching Staff
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In addition to our leadership team, we have over 30 qualified and experienced facilitators 
              dedicated to delivering excellence in education. All our Facilitators are registered with 
              the Teachers Service Commission (TSC) and undergo continuous professional development.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Management;
