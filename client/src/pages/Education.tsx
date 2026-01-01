import { motion } from "framer-motion";
import { useEffect } from "react";
import { Music, Users, GraduationCap, Heart } from "lucide-react";

const pillars = [
  {
    icon: Music,
    title: "Listening",
    description: "Learning to hear not just notes, but the spaces between them. Understanding music as conversation.",
  },
  {
    icon: GraduationCap,
    title: "Understanding",
    description: "Grasping why something works, how it fits into a larger musical language, and how to apply it creatively.",
  },
  {
    icon: Heart,
    title: "Expression",
    description: "Finding your own voice and learning to trust it. Technique serves musical ideas, not the other way around.",
  },
];

const lessonTypes = [
  {
    title: "Children",
    description: "Beginning their musical journey and need clear structure, encouragement, and consistency.",
  },
  {
    title: "Teens",
    description: "Developing technique, theory, and confidence—especially those preparing for auditions, performances, or school programs.",
  },
  {
    title: "Adults",
    description: "Returning to piano after time away or starting for the first time with curiosity and commitment.",
  },
];

export default function Education() {
  useEffect(() => {
    // Load JotForm script
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/253641477790062";
    script.type = "text/javascript";
    script.async = true;
    
    const container = document.getElementById("jotform-container");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section - Light Theme */}
      <section className="light bg-[#fdfbf7] text-[#1a1a1a] pt-24 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <span className="font-mono text-sm uppercase tracking-widest text-[#c06c58] mb-4 block">
              Private Instruction
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-[#1a1a1a]">
              Music <span className="text-[#c06c58] italic">Education</span>
            </h1>
          </motion.div>

          {/* Opening Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mb-24"
          >
            <p className="font-serif text-3xl md:text-4xl font-light text-[#1a1a1a] leading-relaxed mb-8">
              This studio focuses on building musicians, not just piano players.
            </p>
            <p className="font-sans text-lg text-[#4a4a4a] leading-relaxed">
              Lessons emphasize solid technical foundations, musical understanding, and expressive playing. Students learn how music works—how rhythm feels, how harmony moves, and how sound communicates meaning. The approach is structured, patient, and flexible, meeting each student where they are while holding them to meaningful standards.
            </p>
          </motion.div>

          {/* Teaching Philosophy Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-12">
              Teaching <span className="italic text-[#c06c58]">Philosophy</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-[#e0d8c8] bg-white"
                >
                  <pillar.icon className="h-8 w-8 text-[#c06c58] mb-6" />
                  <h3 className="font-serif text-2xl font-medium text-[#1a1a1a] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-[#4a4a4a] leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-24"
          >
            <p className="font-sans text-lg text-[#4a4a4a] leading-relaxed mb-6">
              Technique is not taught in isolation—it exists to serve musical ideas. Scales, exercises, and method books are tools, not goals. Students learn why something works, how it fits into a larger musical language, and how to apply it creatively.
            </p>
            <p className="font-sans text-lg text-[#4a4a4a] leading-relaxed">
              Progress happens best when students feel both supported and challenged. Lessons are structured but flexible, responsive to each student's learning style, background, and goals. Curiosity is encouraged. Questions are welcomed. Growth is measured over time, not rushed.
            </p>
          </motion.div>

          {/* Who Lessons Are For */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-6 w-6 text-[#c06c58]" />
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#1a1a1a]">
                Who Lessons <span className="italic text-[#c06c58]">Are For</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lessonTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 border-l-2 border-[#c06c58]"
                >
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-3">
                    {type.title}
                  </h3>
                  <p className="font-sans text-[#4a4a4a] leading-relaxed">
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="font-sans text-lg text-[#4a4a4a] leading-relaxed mt-8 max-w-3xl">
              Students do not need to read music fluently to begin—but they do need curiosity, commitment, and a willingness to practice thoughtfully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form Section - Dark Theme */}
      <section className="bg-background text-foreground py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
                Get Started
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
                Student <span className="italic text-accent">Inquiry</span>
              </h2>
              <p className="font-sans text-lg text-muted-foreground">
                Fill out the form below to inquire about lessons. Gene will be in touch to discuss your goals and schedule.
              </p>
            </div>

            {/* JotForm Container */}
            <div 
              id="jotform-container" 
              className="bg-card border border-border p-6 md:p-8 min-h-[600px]"
            >
              <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                <div className="text-center">
                  <div className="animate-spin h-8 w-8 border-2 border-accent border-t-transparent rounded-full mx-auto mb-4" />
                  <p className="font-mono text-sm">Loading inquiry form...</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
