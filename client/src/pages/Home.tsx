import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Instagram, Linkedin, Youtube, Music, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [, setLocation] = useLocation();
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Gene Burke | Gospel & Jazz Musician, Pianist & Music Educator";
  }, []);

  const handleLessonsClick = () => {
    setIsBookModalOpen(false);
    setLocation("/education");
  };

  const handleCollaborationClick = () => {
    setIsBookModalOpen(false);
    setLocation("/contact");
  };

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
            <span className="block md:inline">Gospel & Jazz Musician</span>
            <span className="hidden md:inline">,</span>
            <br className="hidden md:block" />
            <span className="block md:inline">Pianist & Music Educator</span>
          </h2>
        </motion.div>

        {/* Center/Bottom Section - CTA and Socials */}
        {/* Mobile: centered in middle, Desktop: bottom left/right split */}
        <div className="flex flex-1 flex-col items-center justify-center gap-6 md:flex-none md:flex-row md:items-end md:justify-between md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 md:flex-row md:items-start"
          >
            <Button 
              size="lg" 
              onClick={() => setIsBookModalOpen(true)}
              className="h-auto rounded-none border border-[#BB5A25] bg-[#BB5A25] px-8 py-4 font-mono text-sm uppercase tracking-widest text-white transition-all hover:bg-[#BB5A25]/90 hover:border-[#BB5A25]/90"
            >
              Book
            </Button>
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

      {/* Book Modal */}
      <Dialog open={isBookModalOpen} onOpenChange={setIsBookModalOpen}>
        <DialogContent className="bg-[#fdfbf7] border border-[#1a1a1a]/10 text-[#1a1a1a] max-w-md">
          <DialogHeader className="text-center space-y-2">
            <DialogTitle className="font-serif text-3xl font-light text-[#1a1a1a]">
              Book <span className="text-[#BB5A25] italic">Gene</span>
            </DialogTitle>
            <p className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/60">
              What are you looking for?
            </p>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 pt-6">
            <button
              onClick={handleLessonsClick}
              className="group flex items-center gap-4 p-6 border border-[#1a1a1a]/20 rounded-none bg-transparent hover:bg-[#BB5A25] hover:border-[#BB5A25] transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-[#1a1a1a]/30 group-hover:border-white/50 transition-colors">
                <Music className="h-6 w-6 text-[#BB5A25] group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <h3 className="font-mono text-sm uppercase tracking-widest text-[#1a1a1a] group-hover:text-white transition-colors">
                  Lessons
                </h3>
                <p className="text-xs text-[#1a1a1a]/60 group-hover:text-white/80 transition-colors mt-1">
                  Piano instruction for all ages & skill levels
                </p>
              </div>
            </button>
            <button
              onClick={handleCollaborationClick}
              className="group flex items-center gap-4 p-6 border border-[#1a1a1a]/20 rounded-none bg-transparent hover:bg-[#BB5A25] hover:border-[#BB5A25] transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-[#1a1a1a]/30 group-hover:border-white/50 transition-colors">
                <Users className="h-6 w-6 text-[#BB5A25] group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <h3 className="font-mono text-sm uppercase tracking-widest text-[#1a1a1a] group-hover:text-white transition-colors">
                  Collaboration
                </h3>
                <p className="text-xs text-[#1a1a1a]/60 group-hover:text-white/80 transition-colors mt-1">
                  Live performances, sessions & creative projects
                </p>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
