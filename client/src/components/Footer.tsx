import { Link } from "wouter";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { href: "https://www.instagram.com/genejburke", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/genekeysburke/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.youtube.com/@genejburke", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <span className="font-serif text-2xl font-medium text-foreground">
                Gene Burke
              </span>
            </Link>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xs">
              Musician, Music Minister, Educator, and Producer. Rooted in gospel and jazz, shaped by choral tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/bio", label: "Bio" },
                { href: "/releases", label: "Releases" },
                { href: "/projects", label: "Projects" },
                { href: "/education", label: "Education" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gene Burke. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Master Key Music Group
          </p>
        </div>
      </div>
    </footer>
  );
}
