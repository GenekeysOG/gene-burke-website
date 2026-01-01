import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Music, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/IMG_1302.jpg"
            alt="Gene Burke"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-mono text-sm uppercase tracking-widest text-accent mb-4 block">
                Musician · Minister · Educator
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-foreground mb-6"
            >
              Gene
              <br />
              <span className="italic text-accent">Burke</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-sans text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Rooted in gospel and jazz, shaped by choral tradition. Music that remembers where it comes from and honors where it is going.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/releases">
                <Button
                  size="lg"
                  className="font-mono text-sm uppercase tracking-wider bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Listen Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/bio">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-mono text-sm uppercase tracking-wider border-foreground/20 text-foreground hover:bg-foreground/5"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Sections */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Explore
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-2 text-foreground">
              The <span className="italic text-accent">Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: "Music",
                description: "Original compositions rooted in gospel, jazz, and choral traditions.",
                link: "/releases",
                linkText: "View Releases",
              },
              {
                icon: Users,
                title: "Projects",
                description: "Collaborative initiatives including the CLEAR Project and Look Up Radio.",
                link: "/projects",
                linkText: "Explore Projects",
              },
              {
                icon: BookOpen,
                title: "Education",
                description: "Private piano instruction focused on building complete musicians.",
                link: "/education",
                linkText: "Learn More",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={item.link}>
                  <div className="group p-8 border border-border bg-card hover:bg-card/80 transition-all duration-300 h-full">
                    <item.icon className="h-8 w-8 text-accent mb-6" />
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="font-mono text-sm uppercase tracking-wider text-accent inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      {item.linkText}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl font-light italic text-foreground leading-relaxed mb-8">
              "Music must tell the truth, and a voice is meant to carry something larger than itself."
            </p>
            <footer className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              — Gene Burke
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              Let's <span className="italic text-accent">Connect</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              For bookings, collaborations, or inquiries about music education.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="font-mono text-sm uppercase tracking-wider bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
