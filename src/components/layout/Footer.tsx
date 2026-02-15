import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Twitter, Mail, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container-luxury py-16 text-center">
          <h3 className="font-heading text-2xl md:text-3xl mb-4">
            Join the Maxana Family
          </h3>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            Subscribe for exclusive offers, wellness tips, and new product launches.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-gold"
            />
            <Button variant="gold" className="px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h4 className="font-heading text-2xl mb-6">MAXANA</h4>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Premium roasted makhana snacks, crafted with love from the heart
              of Mithila. A superfood for the modern world.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-background/50 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-background/50 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-background/50 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-background/50 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.youtube.com/@Maxana-t6s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/50 hover:text-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm uppercase tracking-widest mb-6 text-background/50">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {["About Us", "Products", "Why Makhana", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-background/70 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h5 className="text-sm uppercase tracking-widest mb-6 text-background/50">
              Business
            </h5>
            <ul className="space-y-3">
              {["Bulk Orders", "Export Enquiry", "Become a Partner", "Wholesale"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/export"
                      className="text-background/70 hover:text-gold transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm uppercase tracking-widest mb-6 text-background/50">
              Get in Touch
            </h5>
            <div className="space-y-4 text-sm text-background/70">
              <p className="font-medium text-background/90">Corporate Office</p>
              <p>JSV INTERNATIONAL LLP<br />Shop No. 43, MMRDA Vasant Pride,<br />Kandivali East, Mumbai,<br />Maharashtra 400101, India</p>
              <p className="font-medium text-background/90 pt-2">Manufacturing Unit</p>
              <p>Indira Complex, NH Road,<br />Duilipatti, Jainagar, Madhubani,<br />Bihar 847228</p>
              <a
                href="mailto:info@maxana.in"
                className="flex items-center gap-2 hover:text-gold transition-colors pt-2"
              >
                <Mail size={16} />
                info@maxana.in
              </a>
              <p className="text-sm pt-1">+91 96084 29953</p>
              <p className="text-sm">+91 77394 10066</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2024 Maxana. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
