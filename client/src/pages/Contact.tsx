import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Youtube, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { 
    href: "https://www.instagram.com/genejburke", 
    icon: Instagram, 
    label: "Instagram",
    handle: "@genejburke"
  },
  { 
    href: "https://www.linkedin.com/in/genekeysburke/", 
    icon: Linkedin, 
    label: "LinkedIn",
    handle: "genekeysburke"
  },
  { 
    href: "https://www.youtube.com/@genejburke", 
    icon: Youtube, 
    label: "YouTube",
    handle: "@genejburke"
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-24 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-foreground">
            Let's <span className="text-accent italic">Connect</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <p className="font-sans text-xl text-foreground/90 leading-relaxed mb-8">
                For bookings, collaborations, music education inquiries, or just to say hello—I'd love to hear from you.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Based in Philadelphia
                </h3>
                <p className="font-sans text-muted-foreground">
                  Philadelphia, Pennsylvania
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Connect on Social
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 border border-border bg-card group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                      <social.icon className="h-5 w-5 text-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <span className="font-sans text-foreground group-hover:text-accent transition-colors block">
                        {social.label}
                      </span>
                      <span className="font-mono text-sm text-muted-foreground">
                        {social.handle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Music Education Inquiry */}
            <div className="p-8 border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Music Education
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                Interested in Piano Lessons?
              </h3>
              <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                Fill out the student inquiry form to learn more about private instruction and availability.
              </p>
              <Link href="/education">
                <Button
                  variant="outline"
                  className="font-mono text-sm uppercase tracking-wider border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Go to Education Page
                </Button>
              </Link>
            </div>

            {/* Booking & Collaboration */}
            <div className="p-8 border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Bookings & Collaborations
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                Work Together
              </h3>
              <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                For performance bookings, production work, or collaborative projects, reach out through social media or the Master Key Music Group.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/genejburke"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="font-mono text-sm uppercase tracking-wider border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Message on Instagram
                  </Button>
                </a>
              </div>
            </div>

            {/* Ministry */}
            <div className="p-8 border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Ministry
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                Salt & Light Community Church
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Gene serves as Minister of Music at Salt & Light Community Church in Philadelphia, PA.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32 pt-16 border-t border-border"
        >
          <blockquote className="max-w-3xl">
            <p className="font-serif text-2xl md:text-3xl font-light italic text-foreground leading-relaxed mb-6">
              "He approaches every song as a conversation, every rehearsal as a shared table."
            </p>
            <footer className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              — On Gene's approach to music
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
}
