import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Gene Burke | Gospel & Jazz Musician, Pianist & Music Educator";
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Subtle overlay for text readability */}
        <img 
          src="/images/gene-burke-hero.png" 
          alt="Gene Burke performing" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 flex min-h-screen flex-col justify-between p-6 md:p-12">
        {/* Top Section - Identity */}
        {/* Mobile: centered at top, Desktop: left-aligned */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 text-center md:mt-0 md:text-left"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
            Gene <span className="text-accent italic">Burke</span>
          </h1>
          <h2 className="mt-2 font-mono text-sm md:text-base tracking-widest uppercase text-white/80 mix-blend-difference md:pl-[10px]">
            Gospel & Jazz Musician, Pianist & Music Educator
          </h2>
        </motion.div>

        {/* Center/Bottom Section - CTA and Socials */}
        {/* Mobile: centered in middle, Desktop: bottom left/right split */}
        <div className="flex flex-1 flex-col items-center justify-center gap-6 md:flex-none md:flex-row md:items-end md:justify-between md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            <Link href="/releases">
              <Button 
                size="lg" 
                className="h-auto rounded-none border border-white/30 bg-white/10 px-8 py-4 font-mono text-sm uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black hover:border-white"
              >
                Listen Now
              </Button>
            </Link>
          </motion.div>

          {/* Footer Socials */}
          {/* Mobile: centered below CTA, Desktop: right-aligned at bottom */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex gap-6 text-white md:absolute md:bottom-12 md:right-12"
          >
            <a 
              href="https://www.instagram.com/genejburke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors hover:scale-110 transform duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 stroke-[1.5]" />
            </a>
            <a 
              href="https://www.youtube.com/@genejburke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors hover:scale-110 transform duration-200"
              aria-label="YouTube"
            >
              <Youtube className="h-6 w-6 stroke-[1.5]" />
            </a>
            <a 
              href="https://www.linkedin.com/in/genekeysburke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 stroke-[1.5]" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
