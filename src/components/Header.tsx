import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <img src="/logo.png" alt="Timiza School Logo" className="h-10 w-10 sm:h-12 sm:w-12" />
            <div className="hidden sm:block">
              <h1 className="font-heading text-sm sm:text-base lg:text-lg font-bold leading-tight text-secondary">
                TIMIZA PREPARATORY
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground">& Junior Secondary School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-end">
            <Link
              to="/"
              className={cn(
                "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                isActive("/") ? "text-primary" : "text-foreground"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                isActive("/about") ? "text-primary" : "text-foreground"
              )}
            >
              About
            </Link>
            <Link
              to="/management"
              className={cn(
                "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                isActive("/management") ? "text-primary" : "text-foreground"
              )}
            >
              Management
            </Link>

            {/* Admissions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAdmissionsOpen(true)}
              onMouseLeave={() => setAdmissionsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-0.5 px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                  location.pathname.startsWith("/admissions") ? "text-primary" : "text-foreground"
                )}
              >
                Admissions
                <ChevronDown className="h-3 w-3 xl:h-4 xl:w-4" />
              </button>
              {admissionsOpen && (
                <div className="absolute left-0 top-full mt-1 w-52 xl:w-56 rounded-2xl bg-white shadow-elevated border border-border py-2 z-50">
                  <Link
                    to="/admissions/preschool"
                    className="block px-3 xl:px-4 py-2 text-xs xl:text-sm hover:bg-muted transition-colors"
                  >
                    Pre-School (Playgroup-PP2)
                  </Link>
                  <Link
                    to="/admissions/lower-primary"
                    className="block px-3 xl:px-4 py-2 text-xs xl:text-sm hover:bg-muted transition-colors"
                  >
                    Lower Primary (Grade 1-3)
                  </Link>
                  <Link
                    to="/admissions/upper-primary"
                    className="block px-3 xl:px-4 py-2 text-xs xl:text-sm hover:bg-muted transition-colors"
                  >
                    Upper Primary (Grade 4-6)
                  </Link>
                  <Link
                    to="/admissions/junior-secondary"
                    className="block px-3 xl:px-4 py-2 text-xs xl:text-sm hover:bg-muted transition-colors"
                  >
                    Junior School (Grade 7-9)
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/facilities"
              className={cn(
                "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                isActive("/facilities") ? "text-primary" : "text-foreground"
              )}
            >
              Facilities
            </Link>
            <Link
              to="/clubs"
              className={cn(
                "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                isActive("/clubs") ? "text-primary" : "text-foreground"
              )}
            >
              Clubs & Societies
            </Link>
            <Link
              to="/gallery"
              className={cn(
                "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                isActive("/gallery") ? "text-primary" : "text-foreground"
              )}
            >
              Gallery
            </Link>
            <Link
              to="/testimonials"
              className={cn(
                "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                isActive("/testimonials") ? "text-primary" : "text-foreground"
              )}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className={cn(
                "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                isActive("/contact") ? "text-primary" : "text-foreground"
              )}
            >
              Contact
            </Link>

            <Button asChild className="ml-2 xl:ml-4 text-xs xl:text-sm px-3 xl:px-4 h-8 xl:h-10">
              <Link to="/admissions/preschool">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="xl:hidden border-t py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <Link
              to="/"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/management"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Management
            </Link>
            <div>
              <button
                onClick={() => setAdmissionsOpen(!admissionsOpen)}
                className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              >
                Admissions
                <ChevronDown className={cn("h-4 w-4 transition-transform", admissionsOpen && "rotate-180")} />
              </button>
              {admissionsOpen && (
                <div className="ml-2 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                  <Link
                    to="/admissions/preschool"
                    className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pre-School
                  </Link>
                  <Link
                    to="/admissions/lower-primary"
                    className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Lower Primary
                  </Link>
                  <Link
                    to="/admissions/upper-primary"
                    className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Upper Primary
                  </Link>
                  <Link
                    to="/admissions/junior-secondary"
                    className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Junior Secondary
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/facilities"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Facilities
            </Link>
            <Link
              to="/clubs"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Clubs & Societies
            </Link>
            <Link
              to="/gallery"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/testimonials"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full mt-4 h-11">
              <Link to="/admissions/preschool">Apply Now</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
