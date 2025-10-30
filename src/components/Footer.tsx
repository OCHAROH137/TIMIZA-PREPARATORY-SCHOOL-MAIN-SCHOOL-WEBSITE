import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Timiza Logo" className="h-12 w-12" />
              <div>
                <h3 className="font-heading font-bold text-lg">TIMIZA</h3>
                <p className="text-xs opacity-90">Preparatory & Junior School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Nurturing Excellence from Playgroup to Junior School. Committed to developing well-rounded, confident learners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/management" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Management
                </Link>
              </li>
              <li>
                <Link to="/admissions/preschool" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/clubs" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Clubs & Societies
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/admissions/preschool" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Pre-School Education
                </Link>
              </li>
              <li>
                <Link to="/admissions/lower-primary" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Lower Primary
                </Link>
              </li>
              <li>
                <Link to="/admissions/upper-primary" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Upper Primary
                </Link>
              </li>
              <li>
                <Link to="/admissions/junior-secondary" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Junior Secondary
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-3 text-sm opacity-80 mb-4">
              <p>📞 Phone: +254 726 882 397 <br /></p>
              <p>📧 Email: info@timizaschool.ac.ke</p>
              <p>📍 Location: Kisii, Kenya <br />Along Kisii - Keroka highway - Nyosia 1</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/share/1Jfi8fofSB/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/timizapreparatory?igsh=a3Jza2lnNTd4eThy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
             
              <a
                href="https://www.tiktok.com/@timizaschool"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@timizapreparatoryschool9147"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/25426882397"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center space-y-2">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} TIMIZA PREPARATORY AND JUNIOR SCHOOL. All Rights Reserved.
          </p>
          <p className="text-xs opacity-60">
            Designed & Created by <a href="tel:+254797254329" className="hover:text-primary transition-colors">Michael (0797254329)</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
