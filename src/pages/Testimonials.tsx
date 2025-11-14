import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import testimonialsHero from "@/assets/grade3.jpg";
import sarahKimani from "@/assets/testimonials/sarah-kimani.jpg";
import jamesOmondi from "@/assets/testimonials/james-omondi.jpg";
import graceWanjiru from "@/assets/testimonials/grace-wanjiru.jpg";
import peterMwangi from "@/assets/testimonials/peter-mwangi.jpg";
import janeNjeri from "@/assets/testimonials/jane-njeri.jpg";
import davidKamau from "@/assets/testimonials/david-kamau.jpg";
import lucyAkinyi from "@/assets/testimonials/lucy-akinyi.jpg";
import robertOtieno from "@/assets/testimonials/robert-otieno.jpg";
import maryWambui from "@/assets/testimonials/mary-wambui.jpg";

const testimonials = [
  {
    name: "Mrs. Sarah ",
    role: "Parent - Grade 5",
    text: "Timiza Preparatory School has been a blessing to our family. The teachers are dedicated, and the curriculum is well-balanced. My daughter has grown tremendously in confidence and academic ability since joining this school.",
    rating: 5,
    image: sarahKimani
  },
  {
    name: "Mr. James ",
    role: "Parent - Grade 3 & PP2",
    text: "I have two children at Timiza, and I couldn't be happier with the education they're receiving. The school's focus on character development alongside academics is exactly what we were looking for. The teachers genuinely care about each child's progress.",
    rating: 5,
    image: jamesOmondi
  },
  {
    name: "Mrs. Grace ",
    role: "Parent - Grade 7",
    text: "The transition to junior secondary has been seamless thanks to Timiza's excellent preparation. The facilities are modern, and the CBC curriculum is implemented perfectly. My son is well-prepared for his future.",
    rating: 5,
    image: graceWanjiru
  },
  {
    name: "Mr. Peter ",
    role: "Parent - Grade 1",
    text: "As a first-time parent in the school system, I was nervous about choosing the right school. Timiza exceeded all my expectations. The communication from teachers is excellent, and my daughter loves going to school every day.",
    rating: 5,
    image: peterMwangi
  },
  {
    name: "Mrs. Jane ",
    role: "Parent - PP1",
    text: "The pre-school program at Timiza is outstanding. My son has developed so much in just one term - from his motor skills to his social interactions. The play-based learning approach really works!",
    rating: 5,
    image: janeNjeri
  },
  
  {
    name: "Mrs. Mary ",
    role: "Parent - Grade 2",
    text: "The values instilled at Timiza align perfectly with what we teach at home. The school emphasizes respect, integrity, and hard work. I've seen positive changes in my child's behavior and attitude towards learning.",
    rating: 5,
    image: maryWambui
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${testimonialsHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/65 to-secondary/50" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-primary font-heading font-semibold text-base sm:text-lg mb-2">What Parents Say</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Testimonials
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Hear from our satisfied parents about their experience with Timiza Preparatory School
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Introduction */}
        <Card className="mb-12 sm:mb-16 border-none shadow-card">
          <CardContent className="p-6 sm:p-8 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary mb-4">
              Trusted by Parents Across the Community
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Our parents' feedback reflects our commitment to excellence in education, 
              character development, and creating a nurturing environment where every child can thrive.
            </p>
          </CardContent>
        </Card>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-secondary text-sm sm:text-base mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-primary mb-2">
                      {testimonial.role}
                    </p>
                    {/* Rating Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <Quote className="w-6 h-6 text-primary/20 mb-2" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-12 sm:mt-16 border-none shadow-card bg-muted/30">
          <CardContent className="p-6 sm:p-8 text-center">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-secondary mb-4">
              Join Our Growing Family
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the Timiza difference for yourself. Schedule a visit today and see 
              why parents choose us for their children's education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors">
                Schedule a Visit
              </a>
              <a href="/admissions/preschool" className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-6 py-3 text-sm sm:text-base font-medium hover:bg-primary hover:text-white transition-colors">
                Apply Now
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Testimonials;