import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Education() {
  // Force light mode on mount, revert on unmount
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    return () => {
      document.documentElement.classList.add("dark");
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fdfbf7] text-[#1a1a1a] pt-24 pb-12 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Philosophy & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-16"
          >
            <div>
              <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-8 text-[#1a1a1a]">
                Music <span className="text-[#c06c58] italic">Education</span>
              </h1>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#1a1a1a]/80">
                This studio focuses on building musicians, not just piano players.
              </p>
              
              {/* Teaching Image */}
              <div className="mt-10">
                <img 
                  src="/images/IMG_1302.jpg" 
                  alt="Gene Burke teaching piano" 
                  className="w-full rounded-sm shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="font-mono text-sm uppercase tracking-widest text-[#c06c58]">Approach</h2>
              <p className="font-sans text-lg leading-relaxed text-[#1a1a1a]/70">
                Lessons emphasize solid technical foundations, musical understanding, and expressive playing. Students learn how music works—how rhythm feels, how harmony moves, and how sound communicates meaning. The approach is structured, patient, and flexible, meeting each student where they are while holding them to meaningful standards.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="font-mono text-sm uppercase tracking-widest text-[#c06c58]">Who Lessons Are For</h2>
              <ul className="space-y-4">
                {[
                  "Children beginning their musical journey needing structure & encouragement",
                  "Teens developing technique, theory, and confidence",
                  "Adult learners returning to piano or starting for the first time"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 h-5 w-5 rounded-full border border-[#c06c58] flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-[#c06c58]" />
                    </div>
                    <span className="font-sans text-lg text-[#1a1a1a]/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-base italic text-[#1a1a1a]/60 mt-4 pl-9">
                Students do not need to read music fluently to begin—but they do need curiosity, commitment, and a willingness to practice thoughtfully.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="font-mono text-sm uppercase tracking-widest text-[#c06c58]">Philosophy</h2>
              <div className="prose prose-lg text-[#1a1a1a]/70 font-sans">
                <p>
                  My teaching philosophy is built on three pillars: <strong className="text-[#1a1a1a]">listening, understanding, and expression.</strong>
                </p>
                <p className="mt-4">
                  Technique is not taught in isolation—it exists to serve musical ideas. Scales, exercises, and method books are tools, not goals. Students learn why something works, how it fits into a larger musical language, and how to apply it creatively.
                </p>
                <p className="mt-4">
                  I believe progress happens best when students feel both supported and challenged. Lessons are structured but flexible, responsive to each student's learning style, background, and goals. Curiosity is encouraged. Questions are welcomed. Growth is measured over time, not rushed.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Intake Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="sticky top-24 bg-white p-8 shadow-sm border border-[#1a1a1a]/5 rounded-sm">
              <h3 className="font-serif text-2xl mb-6 text-[#1a1a1a]">Student Inquiry</h3>
              <p className="font-sans text-sm text-[#1a1a1a]/60 mb-8">
                Please fill out the form below to inquire about lessons. I'll be in touch shortly to discuss availability and next steps.
              </p>
              
              {/* JotForm Embed */}
              <div className="jotform-embed-container">
                <iframe
                  id="JotFormIFrame-253641477790062"
                  title="Student Inquiry Form"
                  src="https://form.jotform.com/253641477790062"
                  style={{
                    minWidth: "100%",
                    maxWidth: "100%",
                    height: "600px",
                    border: "none"
                  }}
                  scrolling="no"
                />
              </div>
              
              <p className="font-sans text-xs text-[#1a1a1a]/40 mt-4 text-center">
                If the form doesn't load, please contact directly via the Contact page.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
