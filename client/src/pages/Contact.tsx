import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contactEmail.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${name.trim()}`);
    const body = encodeURIComponent(`Name: ${name.trim()}\nEmail: ${contactEmail.trim()}\n\nMessage:\n${message.trim()}`);
    window.location.href = `mailto:contact@geneburke.com?subject=${subject}&body=${body}`;
    
    setShowSuccessModal(true);
    setName("");
    setContactEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-24 pb-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-white">
              Get in <span className="text-accent italic">Touch</span>
            </h1>
            <p className="font-sans text-xl font-light text-muted-foreground max-w-2xl">
              For collaborations, music education inquiries, or ongoing connection.
            </p>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent border-white/10 focus:border-accent h-12 text-lg font-light rounded-none"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contactEmail" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input 
                    id="contactEmail" 
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="bg-transparent border-white/10 focus:border-accent h-12 text-lg font-light rounded-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea 
                  id="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-transparent border-white/10 focus:border-accent min-h-[200px] text-lg font-light rounded-none resize-none"
                  placeholder="How can we work together?"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full md:w-auto rounded-none bg-white text-black hover:bg-accent hover:text-white transition-colors font-mono uppercase tracking-widest"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Newsletter Signup - Mailchimp Integration */}
          <div className="pt-16 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-white">Join the List</h3>
                <p className="font-sans text-muted-foreground">
                  Occasional updates on music, projects, and teaching. No spam, ever.
                </p>
              </div>
              
              {/* Mailchimp Form */}
              <form 
                action="https://geneburke.us5.list-manage.com/subscribe/post?u=681b757d49392c31f551e0304&amp;id=16cc329b54&amp;f_id=00ef2aebf0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                target="_blank"
                className="flex gap-0"
              >
                <Input 
                  type="email" 
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="Email address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-white/10 border-r-0 focus:border-accent h-12 rounded-none flex-grow"
                />
                {/* Honeypot field to prevent bot signups */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                  <input type="text" name="b_681b757d49392c31f551e0304_16cc329b54" tabIndex={-1} defaultValue="" />
                </div>
                <Button 
                  type="submit"
                  name="subscribe"
                  className="h-12 rounded-none bg-white/10 text-white hover:bg-accent border border-white/10 border-l-0"
                >
                  <ArrowRight className="h-5 w-5" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-[#1a1a1a] border-white/10 text-white max-w-md">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto">
              <CheckCircle className="w-16 h-16 text-accent" />
            </div>
            <DialogTitle className="font-serif text-3xl font-light">
              Opening Email Client
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              Your default email client should open with the message. If it doesn't, please email directly at contact@geneburke.com
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="rounded-none bg-white text-black hover:bg-accent hover:text-white transition-colors font-mono uppercase tracking-widest"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
