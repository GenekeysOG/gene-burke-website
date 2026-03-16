/*
 * Master Key Music School - FAQ Page
 * Redesigned with new branding: Navy (#003a63), Parchment (#F6F4F1), Charcoal (#1F1F1F), Copper (#C46A3A)
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/utils";
import { pathFor } from "@/lib/basePath";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ Data organized by sections
const faqSections = [
  {
    title: "Lesson Format & Structure",
    questions: [
      {
        question: "How are lessons structured?",
        answer: "Lessons are one-on-one and tailored to each student's level, goals, and learning pace. Sessions typically include a mix of technique, repertoire, theory, and ear training, with emphasis shifting based on the student's needs."
      },
      {
        question: "Are lessons conducted online or in person?",
        answer: "All lessons are conducted online via Zoom. Virtual instruction allows for focused, one-on-one teaching while offering flexibility for families. With proper setup and engagement, online lessons are highly effective."
      },
      {
        question: "What equipment or setup is needed for online lessons?",
        answer: "Students need a reliable internet connection, a device with a camera and microphone (laptop, tablet, or phone), and access to their instrument. A quiet, well-lit space is recommended. Additional setup tips are provided upon enrollment."
      }
    ]
  },
  {
    title: "Scheduling & Attendance",
    questions: [
      {
        question: "How do I schedule lessons?",
        answer: "Lessons are scheduled through the My Music Staff student portal. After enrollment, you'll receive login credentials to view availability and book your regular lesson time."
      },
      {
        question: "What is the cancellation policy?",
        answer: "Cancellations made at least 24 hours in advance can be rescheduled. Late cancellations or no-shows are not eligible for makeup lessons. Consistent attendance is essential for progress."
      },
      {
        question: "Are makeup lessons available?",
        answer: "Makeup lessons are offered for cancellations made with at least 24 hours' notice, subject to instructor availability. They must be scheduled within the same billing month."
      }
    ]
  },
  {
    title: "Enrollment & Tuition",
    questions: [
      {
        question: "How do I enroll?",
        answer: "Complete the Student Signup form on the Music Education page. After submission, you'll receive a welcome email with next steps, including portal access and scheduling information."
      },
      {
        question: "What are the tuition rates?",
        answer: "Tuition varies based on lesson length and frequency. Current rates are provided during the enrollment process. Payment is due monthly and processed through the student portal."
      },
      {
        question: "Is there a registration or materials fee?",
        answer: "There is no registration fee. Students may need to purchase method books or sheet music as recommended by the instructor. Digital resources are often used when possible."
      }
    ]
  },
  {
    title: "Student Expectations",
    questions: [
      {
        question: "How much practice is expected?",
        answer: "Practice expectations vary by age and level, but consistency matters more than duration. Beginners may start with 15–20 minutes daily, while more advanced students benefit from 30–60 minutes or more. Quality, focused practice is emphasized over time spent."
      },
      {
        question: "Do students need to read music before starting?",
        answer: "No prior music reading experience is required. Students will learn to read music as part of their instruction. However, a willingness to learn and practice regularly is essential."
      },
      {
        question: "What is expected of parents or guardians?",
        answer: "For younger students, parent involvement is encouraged—especially in supporting practice routines and attending occasional lessons. Clear communication with the instructor helps ensure steady progress."
      }
    ]
  },
  {
    title: "Instruments & Materials",
    questions: [
      {
        question: "What instruments are taught?",
        answer: "Master Key Music School offers instruction in piano, voice, guitar, bass, and drums. Each student's curriculum is tailored to their chosen instrument and goals."
      },
      {
        question: "Do I need to own an instrument?",
        answer: "Yes, students should have access to their instrument for practice between lessons. For piano students, an acoustic piano or weighted-key digital piano is recommended. Guidance on instrument selection is available upon request."
      },
      {
        question: "What materials or books are used?",
        answer: "Materials vary by student and instrument. A combination of method books, sheet music, and digital resources is used. Specific recommendations are made after assessing the student's level and goals."
      }
    ]
  },
  {
    title: "Policies & Communication",
    questions: [
      {
        question: "How do I communicate with the instructor?",
        answer: "Communication is handled through the My Music Staff portal, email, or during lessons. For scheduling changes or questions, the portal is the preferred method."
      },
      {
        question: "Is there a trial lesson available?",
        answer: "Yes, a trial lesson is available for new students to experience the teaching style and determine fit. Contact us through the signup form to arrange a trial."
      },
      {
        question: "Where can I find the full studio policies?",
        answer: "Full policies are outlined in the Parent & Student Handbook, provided upon enrollment. Key policies include attendance, cancellation, tuition, and communication expectations."
      }
    ]
  }
];

export default function FAQ() {
  // Force light mode on mount, revert on unmount
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    return () => {
      document.documentElement.classList.add("dark");
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
              className="font-sans text-sm font-medium text-[#1F1F1F]/70 hover:text-[#003a63] transition-colors"
            >
              Music Education
            </Link>
            <Link 
              href={pathFor("/faq")} 
              className="font-sans text-sm font-medium text-[#C46A3A] hover:text-[#B85E2F] transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-[#003a63] leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-lg text-[#1F1F1F]/70 max-w-2xl mx-auto">
              Find answers to common questions about lessons, enrollment, scheduling, and studio policies at Master Key Music School.
            </p>
          </motion.div>

          {/* FAQ Sections */}
          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C46A3A] mb-4">
                  {section.title}
                </h2>
                <div className="bg-white rounded-lg shadow-sm border border-[#003a63]/10 overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    {section.questions.map((item, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${sectionIndex}-${index}`}
                        className="border-b border-[#003a63]/10 last:border-b-0"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left font-sans font-medium text-[#003a63] hover:text-[#003a63]/80 hover:no-underline [&[data-state=open]]:bg-[#003a63] [&[data-state=open]]:text-white transition-colors">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-[#1F1F1F]/80 font-sans text-base leading-relaxed bg-[#F6F4F1]/50">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.section>
            ))}
          </div>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="bg-[#003a63] rounded-lg p-8 md:p-10 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="font-sans text-white/80 mb-6 max-w-lg mx-auto">
                Sign up today to begin your musical journey with Master Key Music School.
              </p>
              <Link
                href={pathFor("/education")}
                className="inline-flex items-center gap-2 bg-[#C46A3A] hover:bg-[#B85E2F] text-white font-sans font-medium px-6 py-3 rounded-md transition-colors"
              >
                View Music Education
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>
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
