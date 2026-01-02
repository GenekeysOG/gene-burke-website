import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Subtle overlay for text readability */}
        <img 
          src="/images/Gene Burke - Hero Image.png" 
          alt="Gene Burke performing" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 flex min-h-screen flex-col justify-between p-6 md:p-12">
        {/* Top Section - Identity */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 md:mt-0"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
            Gene <span className="text-accent italic">Burke</span>
          </h1>
          <p className="mt-2 font-mono text-sm md:text-base tracking-widest uppercase text-white/80 mix-blend-difference" style={{paddingLeft: '10px'}}>
            Musician & Educator
          </p>
        </motion.div>

        {/* Center/Bottom Section - CTA */}
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex gap-6 text-white"
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
            {/* TikTok icon is not in Lucide default set, using a custom SVG or text fallback if needed, 
                but brief asked for icons. Lucide doesn't have TikTok. 
                I will use a simple text link or omit if strictly icon-only is required, 
                but for now I'll stick to the ones I have icons for to keep it clean. 
                Actually, I can import a custom SVG for TikTok if critical. 
                Let's stick to the 3 main ones for now as they are in the assets summary. 
            */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
