import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";
import admissionsHero from "@/assets/pp2.jpg";

const admissionsSections = {
  preschool: {
    title: "Pre-School Program",
    grades: "Playgroup, PP1, PP2",
    description: "Our early years program focuses on laying a strong foundation for lifelong learning. Through play-based activities, we develop fine and gross motor skills, social-emotional competencies, and early literacy and numeracy skills.",
    features: [
      "Play-based learning approach",
      "Qualified early childhood educators",
      "Safe and stimulating environment",
      "Focus on social-emotional development",
      "Introduction to basic literacy and numeracy",
      "Music, art, and movement activities"
    ]
  },
  "lower-primary": {
    title: "Lower Primary",
    grades: "Grades 1, 2, 3",
    description: "Our lower primary program builds on early childhood foundations with a competency-based curriculum. We focus on developing fundamental literacy, numeracy, and life skills while nurturing curiosity and creativity.",
    features: [
      "Competency-Based Curriculum (CBC)",
      "Interactive and hands-on learning",
      "Strong foundation in literacy and numeracy",
      "Introduction to basic sciences",
      "Physical education and sports",
      "Character and values education"
    ]
  },
  "upper-primary": {
    title: "Upper Primary",
    grades: "Grades 4, 5, 6",
    description: "At upper primary level, learners deepen their understanding across all learning areas. We emphasize critical thinking, problem-solving, and independent learning skills while preparing them for junior secondary education.",
    features: [
      "Advanced CBC learning areas",
      "Project-based learning activities",
      "Science and technology integration",
      "Creative arts and sports programs",
      "Leadership development opportunities",
      "Preparation for junior secondary transition"
    ]
  },
  "junior-secondary": {
    title: "Junior Secondary School",
    grades: "Grades 7, 8, 9",
    description: "Our junior secondary program offers a comprehensive curriculum aligned with the new education system. Learners explore various pathways and develop skills for senior secondary education and beyond.",
    features: [
      "Full CBC junior secondary curriculum",
      "Career guidance and counseling",
      "Advanced ICT and digital literacy",
      "Specialized science and mathematics programs",
      "Extensive co-curricular activities",
      "Preparation for senior secondary pathways"
    ]
  }
};

const Admissions = () => {
  const { level } = useParams();
  const section = level ? admissionsSections[level as keyof typeof admissionsSections] : admissionsSections.preschool;

  if (!section) {
    return <div>Program not found</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${admissionsHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/65 to-secondary/50" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-primary font-heading font-semibold text-lg mb-2">Admissions</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {section.title}
          </h1>
          <p className="text-xl text-white/90 mb-2">{section.grades}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {Object.entries(admissionsSections).map(([key, data]) => (
            <Button
              key={key}
              asChild
              variant={level === key ? "default" : "outline"}
              className="text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10"
            >
              <Link to={`/admissions/${key}`}>{data.title}</Link>
            </Button>
          ))}
        </div>

        {/* Program Description */}
        <Card className="mb-8 border-none shadow-card">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {section.description}
            </p>
          </CardContent>
        </Card>

        {/* Program Features */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="border-none shadow-card">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-secondary mb-6">
                Program Features
              </h3>
              <ul className="space-y-3">
                {section.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {/* Requirements */}
            <Card className="border-none shadow-card">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
                  Admission Requirements
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Duly filled application form</li>
                  <li>• Birth certificate (original and copy)</li>
                  <li>• Previous school report forms (if applicable)</li>
                  <li>• Two passport-size photos</li>
                  <li>• Parent/Guardian ID copy</li>
                  <li>• Immunization certificate</li>
                </ul>
              </CardContent>
            </Card>

            {/* Downloads */}
            <Card className="border-none shadow-card bg-primary text-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="font-heading text-lg sm:text-xl font-bold mb-4">
                  Download Resources
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start bg-white/10 border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base"
                    asChild
                  >
                    <a href="/admission-brochure.pdf" download="Admission-Brochure.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Download Admission Brochure
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start bg-white/10 border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base"
                    asChild
                  >
                    <a href="/fee-structure.pdf" download="Fee-Structure.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Download Fee Structure
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start bg-white/10 border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base"
                    asChild
                  >
                    <a href="/application-form.pdf" download="Application-Form.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Download Application Form
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Application Process */}
        <Card className="border-none shadow-card mb-12">
          <CardContent className="p-8">
            <h3 className="font-heading text-2xl font-bold text-secondary mb-6 text-center">
              Application Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Submit Application", desc: "Fill and submit the application form with required documents" },
                { step: "2", title: "Review", desc: "Our admissions team reviews your application" },
                { step: "3", title: "Assessment", desc: "Learner assessment and parent interview (if required)" },
                { step: "4", title: "Admission", desc: "Receive admission letter and complete enrollment" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-heading font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-heading font-semibold text-secondary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="border-none shadow-card bg-muted/30 inline-block">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
                Ready to Apply?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Contact our admissions office for more information or to schedule a campus visit
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Contact Admissions</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+254726882397">Call: +254 726 882 397</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
