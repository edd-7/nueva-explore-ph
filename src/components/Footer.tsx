import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nueva Ecija Explorer</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your ultimate guide to discovering the natural beauty and cultural heritage of Nueva Ecija, Philippines.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-smooth"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-smooth"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:tourism@nuevaecija.gov.ph"
                className="hover:text-secondary transition-smooth"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-secondary transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#tourist-spots" className="hover:text-secondary transition-smooth">
                  Tourist Spots
                </a>
              </li>
              <li>
                <a href="#delicacies" className="hover:text-secondary transition-smooth">
                  Delicacies
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-secondary transition-smooth">
                  Plan Your Visit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Nueva Ecija, Central Luzon, Philippines</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+63 44 463 1234</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>tourism@nuevaecija.gov.ph</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {currentYear} Nueva Ecija Explorer. All rights reserved.</p>
          <p className="mt-2 text-sm">Promoting tourism and cultural heritage of Nueva Ecija</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
