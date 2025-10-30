import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import galleryHero from "@/assets/gallery-hero.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import library from "@/assets/library.jpg";
import sportsField from "@/assets/sports-field.jpg";

const categories = [
  "All",
  "Academics",
  "Sports",
  "Clubs",
  "Events",
  "Facilities"
];

const galleryItems = [
  { id: 1, image: computerLab, title: "ICT Laboratory", category: "Facilities" },
  { id: 2, image: scienceLab, title: "Science Practical", category: "Academics" },
  { id: 3, image: library, title: "Library Reading Time", category: "Facilities" },
  { id: 4, image: sportsField, title: "Football Match", category: "Sports" },
  { id: 5, image: computerLab, title: "Coding Class", category: "Clubs" },
  { id: 6, image: scienceLab, title: "Chemistry Experiment", category: "Academics" },
  { id: 7, image: sportsField, title: "Sports Day", category: "Events" },
  { id: 8, image: library, title: "Book Week", category: "Events" }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryHero})` }}
        >
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-heading font-semibold text-base sm:text-lg mb-2">Our Gallery</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            School Life in Pictures
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto opacity-90">
            Explore moments that capture the vibrant spirit of our school community
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card 
              key={item.id}
              className="border-none shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(item.id)}
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <p className="font-heading font-semibold text-secondary text-sm sm:text-base">{item.title}</p>
                  <p className="text-[10px] sm:text-xs text-primary">{item.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-primary transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="font-heading text-2xl font-bold mb-1">{selectedItem.title}</h3>
                <p className="text-primary">{selectedItem.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No images found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
