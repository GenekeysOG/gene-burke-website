import { motion } from "framer-motion";
import { ExternalLink, Radio, Music, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "clear",
    title: "CLEAR Project",
    subtitle: "Children, Liturgy, Ecology, and Renewal",
    icon: Music,
    description: "The CLEAR Project at Villanova University gathers scholars, musicians and church leaders to spark needed work on children, worship and ecology. Gene is a co-creator of this multi-genre songwriting and recording initiative where music becomes a meeting place for reflection, imagination, and renewal.",
    link: "https://www1.villanova.edu/university/liberal-arts-sciences/programs/theology/clear.html",
    linkText: "Visit Villanova CLEAR Project",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
  },
  {
    id: "lookupradio",
    title: "Look Up Radio",
    subtitle: "Stellar Award-Nominated Internet Radio",
    icon: Radio,
    description: "Gene is co-founder of Look Up Radio, a Stellar Award–nominated internet radio station that he owned and operated with his wife, Fatima. The station served as a platform for thoughtful curation, emerging voices, and music that uplifted without spectacle—extending Gene's commitment to listening as a form of leadership.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop",
  },
  {
    id: "mkmg",
    title: "Master Key Music Group",
    subtitle: "Production & Artist Development",
    icon: Building2,
    description: "As the owner of Master Key Music Group (MKMG), Gene supports the creative work of songwriters through production, recording, and administrative guidance. The goal is simple and steady: to help artists bring their music into the world with integrity, excellence, and care, without losing themselves in the process.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
  },
];

export default function Projects() {
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
            Initiatives
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-foreground">
            Creative <span className="text-accent italic">Projects</span>
          </h1>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Decorative element */}
                <div className={`absolute -bottom-4 ${index % 2 === 1 ? "-left-4" : "-right-4"} w-full h-full border border-accent -z-10`} />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3">
                  <project.icon className="h-6 w-6 text-accent" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {project.subtitle}
                  </span>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
                  {project.title}
                </h2>

                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="font-mono text-sm uppercase tracking-wider border-accent text-accent hover:bg-accent hover:text-accent-foreground mt-4"
                    >
                      {project.linkText}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Ministry Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 pt-16 border-t border-border"
        >
          <div className="max-w-3xl">
            <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              Ministry
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8">
              Salt & Light <span className="italic text-accent">Community Church</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
              Gene serves as Minister of Music at Salt & Light Community Church and contributes regularly to regional and national congregational gatherings, offering musical leadership rooted in depth, clarity, and care.
            </p>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              His approach to worship music reflects the same values that guide all his work: empathy, presence, and a commitment to creating space where individual voices can stand on their own while serving something collective and whole.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
