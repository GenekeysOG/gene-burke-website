import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { assetUrl } from "@/lib/utils";

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-24 pb-24 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-light tracking-tight text-white mb-16 md:mb-24"
        >
          Collaborative <span className="text-accent italic">Spaces</span>
        </motion.h1>

        <div className="space-y-16">
          {/* CLEAR Project */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative border-t border-white/10 pt-12 hover:border-accent/50 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-white/5 p-2 flex items-center justify-center">
                    <img 
                      src={assetUrl("/images/clear-project-logo.png")} 
                      alt="CLEAR Project Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h2 className="font-serif text-3xl text-white group-hover:text-accent transition-colors">CLEAR Project</h2>
                <span className="block mt-2 font-mono text-sm text-muted-foreground">Villanova University</span>
              </div>
              
              <div className="md:col-span-8 space-y-6">
                <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                  The Children, Liturgy, Ecology, and Renewal (CLEAR) project at Villanova University gathers scholars, musicians and church leaders to spark needed work on children, worship and ecology.
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <Link href="/projects/clear">
                    <span className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-white hover:text-accent transition-colors cursor-pointer">
                      Read the Full Story <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <a 
                    href="https://www1.villanova.edu/university/liberal-arts-sciences/programs/theology/clear.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
                  >
                    Visit Villanova <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Look Up Radio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative border-t border-white/10 pt-12 hover:border-accent/50 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-white/5 p-2 flex items-center justify-center">
                    <img 
                      src={assetUrl("/images/look-up-radio-logo.png")} 
                      alt="Look Up Radio Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h2 className="font-serif text-3xl text-white group-hover:text-accent transition-colors">Look Up Radio</h2>
                <span className="block mt-2 font-mono text-sm text-muted-foreground">Co-Founder</span>
              </div>
              
              <div className="md:col-span-8 space-y-6">
                <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                  A Stellar Award–nominated internet radio station serving as a platform for thoughtful curation, emerging voices, and music that uplifts without spectacle. Look Up Radio was a digital sanctuary for Christian listeners across denominational, racial, and cultural lines.
                </p>
                
                <Link href="/projects/look-up-radio">
                  <span className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-white hover:text-accent transition-colors cursor-pointer">
                    Read the Full Story <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Master Key Music Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative border-t border-white/10 pt-12 hover:border-accent/50 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-white/5 p-2 flex items-center justify-center">
                    <img 
                      src={assetUrl("/images/master-key-logo.png")} 
                      alt="Master Key Music Group Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h2 className="font-serif text-3xl text-white group-hover:text-accent transition-colors">Master Key Music Group</h2>
                <span className="block mt-2 font-mono text-sm text-muted-foreground">Owner</span>
              </div>
              
              <div className="md:col-span-8 space-y-6">
                <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                  Supporting the creative work of songwriters through production, recording, and administrative guidance. Helping artists bring their music into the world with integrity and excellence.
                </p>
                
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-white hover:text-accent transition-colors cursor-pointer">
                    Inquire About Services <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
