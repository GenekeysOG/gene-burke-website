/*
 * Master Key Music School - Music Education Page
 * Redesigned with new branding: Navy (#003a63), Parchment (#F6F4F1), Charcoal (#1F1F1F), Copper (#C46A3A)
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Music, BookOpen, Users, Phone } from "lucide-react";
import { assetUrl } from "@/lib/utils";
import { pathFor } from "@/lib/basePath";

// Widget settings for My Music Staff
const WIDGET_SETTINGS = {
  signup: "eyJTY2hvb2xJRCI6InNjaF9sdFdKeSIsIldlYnNpdGVJRCI6Indic19WYzZKeCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3p6cG44SjEifQ==",
  login: "eyJTY2hvb2xJRCI6InNjaF9sdFdKeSIsIldlYnNpdGVJRCI6Indic19WYzZKeCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3p6cHJoSksifQ=="
};

export default function Education() {
  const signupWidgetRef = useRef<HTMLDivElement>(null);
  const loginWidgetDesktopRef = useRef<HTMLDivElement>(null);
  const loginWidgetMobileRef = useRef<HTMLDivElement>(null);

  // Force light mode on mount, revert on unmount
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    return () => {
      document.documentElement.classList.add("dark");
    };
  }, []);

  // Load My Music Staff Signup widget
  useEffect(() => {
    if (!signupWidgetRef.current) return;
    signupWidgetRef.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = `https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=${WIDGET_SETTINGS.signup}`;
    script.async = true;
    signupWidgetRef.current.appendChild(script);
    return () => {
      if (signupWidgetRef.current) signupWidgetRef.current.innerHTML = "";
    };
  }, []);

  // Load My Music Staff Login widget for Desktop
  useEffect(() => {
    if (!loginWidgetDesktopRef.current) return;
    // Check if we're on desktop (lg breakpoint = 1024px)
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;
    
    loginWidgetDesktopRef.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = `https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=${WIDGET_SETTINGS.login}`;
    script.async = true;
    loginWidgetDesktopRef.current.appendChild(script);
    return () => {
      if (loginWidgetDesktopRef.current) loginWidgetDesktopRef.current.innerHTML = "";
    };
  }, []);

  // Load My Music Staff Login widget for Mobile
  useEffect(() => {
    if (!loginWidgetMobileRef.current) return;
    // Check if we're on mobile (below lg breakpoint = 1024px)
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;
    
    loginWidgetMobileRef.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = `https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=${WIDGET_SETTINGS.login}`;
    script.async = true;
    loginWidgetMobileRef.current.appendChild(script);
    return () => {
      if (loginWidgetMobileRef.current) loginWidgetMobileRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F6F4F1] text-[#1F1F1F]">
      {/* Custom Header for Education Pages */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#003a63]/10">
        <div className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href={pathFor("/education")} className="flex items-center gap-3">
            <img 
              src={assetUrl("/images/mkms-logo-icon.png")} 
              alt="MKMS Logo" 
              className="h-10 w-10"
            />
            <span className="font-serif text-xl text-[#003a63]">
              Master Key Music School
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              href={pathFor("/education")} 
              className="font-sans text-sm font-medium text-[#C46A3A] hover:text-[#B85E2F] transition-colors"
            >
              Music Education
            </Link>
            <Link 
              href={pathFor("/faq")} 
              className="font-sans text-sm font-medium text-[#1F1F1F]/70 hover:text-[#003a63] transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-12">
              {/* Hero */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#003a63] leading-tight mb-6">
                  Music Education
                </h1>
                <p className="font-sans text-lg md:text-xl text-[#1F1F1F]/70 leading-relaxed max-w-2xl">
                  Building musicians through solid foundations, musical understanding, and expressive playing.
                </p>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={assetUrl("/images/mkms-main-image.jpg")}
                  alt="Music education at Master Key Music School"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Approach Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C46A3A] mb-4">Approach</h2>
                <div className="space-y-4 text-[#1F1F1F]/80 font-sans text-base md:text-lg leading-relaxed">
                  <p>
                    Lessons at Master Key Music School emphasize solid technical foundations, musical understanding, and expressive playing.
                  </p>
                  <p>
                    Students don't just learn what to play — they learn how music works: how rhythm feels, how harmony moves, and how sound communicates meaning. Instruction connects listening, theory, and technique so students develop real musical literacy, not just memorized pieces.
                  </p>
                  <p>
                    Our teaching is <strong className="text-[#003a63]">structured, patient, and flexible</strong>, meeting each student where they are while guiding them toward meaningful standards. Expectations are clear, progress is intentional, and time is respected. This approach supports steady growth and helps students build skills that last.
                  </p>
                </div>
              </motion.section>

              {/* Virtual-First Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C46A3A] mb-4">Virtual-First Instruction</h2>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div className="space-y-4 text-[#1F1F1F]/80 font-sans text-base md:text-lg leading-relaxed">
                    <p>
                      Master Key Music School operates as a <strong className="text-[#003a63]">virtual-first music education program</strong>. Online lessons allow for focused, one-on-one instruction while meeting families where they are.
                    </p>
                    <p>
                      When supported by clear routines, appropriate technology, and active participation, virtual lessons are highly effective. This model provides flexibility without sacrificing structure, continuity, or instructional quality.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src={assetUrl("/images/piano-lessons.png")}
                      alt="Student taking virtual piano lesson"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.section>

              {/* Who Lessons Are For */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C46A3A] mb-4">Who Lessons Are For</h2>
                <p className="text-[#1F1F1F]/80 font-sans text-base md:text-lg leading-relaxed mb-8">
                  Master Key Music School serves students at different stages of their musical journey across a range of instruments, including <strong className="text-[#003a63]">piano, voice, guitar, bass, and drums</strong>.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Children */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-[#003a63]/5">
                    <div className="w-12 h-12 rounded-full bg-[#003a63]/10 flex items-center justify-center mb-4">
                      <Music className="w-6 h-6 text-[#003a63]" />
                    </div>
                    <h3 className="font-serif text-lg text-[#003a63] mb-2">
                      Children Beginning Their Journey
                    </h3>
                    <p className="font-sans text-sm text-[#1F1F1F]/70 leading-relaxed">
                      Students who benefit from structure, encouragement, and clear routines while developing foundational skills in their chosen instrument.
                    </p>
                  </div>

                  {/* Teens */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-[#003a63]/5">
                    <div className="w-12 h-12 rounded-full bg-[#C46A3A]/10 flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-[#C46A3A]" />
                    </div>
                    <h3 className="font-serif text-lg text-[#003a63] mb-2">
                      Teens Developing Technique
                    </h3>
                    <p className="font-sans text-sm text-[#1F1F1F]/70 leading-relaxed">
                      Students ready to strengthen musicianship, theory, and expressive control while gaining fluency on their instrument.
                    </p>
                  </div>

                  {/* Adults */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-[#003a63]/5">
                    <div className="w-12 h-12 rounded-full bg-[#003a63]/10 flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-[#003a63]" />
                    </div>
                    <h3 className="font-serif text-lg text-[#003a63] mb-2">
                      Adult Learners
                    </h3>
                    <p className="font-sans text-sm text-[#1F1F1F]/70 leading-relaxed">
                      Adults who want to understand music more deeply — whether returning after time away or beginning for the first time.
                    </p>
                  </div>
                </div>

                <p className="font-sans text-sm text-[#1F1F1F]/60 mt-6 italic">
                  Instruction is individualized, but all students are guided within a structured framework that emphasizes music literacy, listening, and long-term growth — regardless of instrument.
                </p>
              </motion.section>

              {/* Course Outlines */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C46A3A] mb-4">Course Outlines</h2>
                <Link
                  href={pathFor("/education/music-theory-for-producers")}
                  className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#003a63]/10 hover:border-[#C46A3A]/40 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C46A3A] mb-1">24 Units · 4 Phases · ~24 Weeks</div>
                    <div className="font-serif text-xl text-[#003a63] mb-1">Music Theory for Emerging Producers</div>
                    <div className="font-sans text-sm text-[#1F1F1F]/60">Keyboard literacy, harmony, ear training, and DAW-based production mentorship.</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C46A3A] flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.section>

              {/* Philosophy */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C46A3A] mb-4">Philosophy</h2>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-[#003a63]/10">
                  <div className="space-y-4 text-[#1F1F1F]/80 font-sans text-base md:text-lg leading-relaxed">
                    <p>
                      At Master Key Music School, progress is understood as a process that unfolds over time. Musical growth is not rushed or forced; it is built through consistency, attention, and thoughtful practice.
                    </p>
                    <p>
                      Technique is never taught in isolation. Skills exist to serve understanding and expression, helping students connect what they hear, think, and play. Curiosity is encouraged, questions are welcomed, and mistakes are treated as part of learning—not failure.
                    </p>
                    <p>
                      We believe students thrive when they feel both <strong className="text-[#003a63]">supported and challenged</strong>. Clear expectations create safety. Patience builds confidence. Consistent effort leads to meaningful, lasting growth.
                    </p>
                    <p>
                      Progress is measured over time, not by speed. The goal is not simply to play notes correctly, but to develop musicians who listen deeply, understand what they're doing, and can express themselves with clarity and intention.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* CTA to FAQ */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#003a63] rounded-lg p-8 md:p-10 text-center">
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                    Have Questions?
                  </h2>
                  <p className="font-sans text-white/80 mb-6 max-w-lg mx-auto">
                    Learn more about lesson format, scheduling, expectations, and enrollment at Master Key Music School.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <Link
                      href={pathFor("/faq")}
                      className="inline-flex items-center gap-2 bg-[#C46A3A] hover:bg-[#B85E2F] text-white font-sans font-medium px-6 py-3 rounded-md transition-colors"
                    >
                      View Frequently Asked Questions
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-white/50 hidden sm:inline">or</span>
                    <a
                      href="tel:267-665-2899"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-sans font-medium px-6 py-3 rounded-md transition-colors border border-white/20"
                    >
                      <Phone className="w-4 h-4" />
                      Call (267) 665-2899
                    </a>
                  </div>
                </div>
              </motion.section>

              {/* Current Students - Mobile */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:hidden"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C46A3A] mb-4">Current Students</h2>
                <p className="font-sans text-[#1F1F1F]/70 mb-6">
                  Already a student? Log in to access your lesson schedule, assignments, and more.
                </p>
                <div className="bg-white rounded-lg shadow-sm border border-[#003a63]/10 overflow-hidden">
                  <div className="bg-[#003a63] px-6 py-4">
                    <h3 className="font-serif text-xl text-white">Portal Login</h3>
                    <p className="font-sans text-sm text-white/70 mt-1">Access your student portal</p>
                  </div>
                  <div ref={loginWidgetMobileRef} className="p-6 min-h-[400px]" />
                </div>
              </motion.section>
            </div>

            {/* Sidebar - Forms */}
            <div className="lg:col-span-5 space-y-8">
              <div className="lg:sticky lg:top-24">
                {/* Signup Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="bg-white rounded-lg shadow-sm border border-[#003a63]/10 overflow-hidden">
                    <div className="bg-[#003a63] px-6 py-4">
                      <h3 className="font-serif text-xl text-white">Student Signup</h3>
                      <p className="font-sans text-sm text-white/70 mt-1">Interested in lessons? Sign up below to get started.</p>
                    </div>
                    <div ref={signupWidgetRef} className="p-6 min-h-[400px]" />
                  </div>
                </motion.div>

                {/* Login Form - Desktop Only */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="hidden lg:block mt-8"
                >
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C46A3A] mb-4">Current Students</h3>
                  <p className="font-sans text-sm text-[#1F1F1F]/70 mb-4">
                    Already a student? Log in to access your lesson schedule, assignments, and more.
                  </p>
                  <div className="bg-white rounded-lg shadow-sm border border-[#003a63]/10 overflow-hidden">
                    <div className="bg-[#003a63] px-6 py-4">
                      <h3 className="font-serif text-xl text-white">Portal Login</h3>
                      <p className="font-sans text-sm text-white/70 mt-1">Access your student portal</p>
                    </div>
                    <div ref={loginWidgetDesktopRef} className="p-6 min-h-[400px]" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#003a63] text-white py-8">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={assetUrl("/images/mkms-logo-icon.png")} 
                alt="MKMS Logo" 
                className="h-8 w-8 brightness-0 invert"
              />
              <span className="font-serif text-base text-white/90">
                Master Key Music School
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href={pathFor("/education")} className="text-white/70 hover:text-white transition-colors">
                Music Education
              </Link>
              <Link href={pathFor("/faq")} className="text-white/70 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href={pathFor("/")} className="text-white/70 hover:text-white transition-colors">
                Gene Burke
              </Link>
            </div>
            <p className="font-sans text-sm text-white/60">
              © {new Date().getFullYear()} Master Key Music Group LLC. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
