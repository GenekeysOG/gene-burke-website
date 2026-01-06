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
import { ArrowRight, CheckCircle, Mail, Loader2, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

// JotForm API configuration
const JOTFORM_API_KEY = "8c8cea31119f56bfdeeecfe085d02e8e";
const CONTACT_FORM_ID = "260004248937052";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Newsletter subscription mutation
  const newsletterMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        setEmail("");
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message || "Failed to subscribe. Please try again.");
    },
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactEmail.trim() || !message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to JotForm API
      // Field mappings: 6=Name, 4=Email, 5=Message
      const formData = new FormData();
      formData.append("submission[6]", name.trim());
      formData.append("submission[4]", contactEmail.trim());
      formData.append("submission[5]", message.trim());

      const response = await fetch(
        `https://api.jotform.com/form/${CONTACT_FORM_ID}/submissions?apiKey=${JOTFORM_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.responseCode === 200) {
        setShowSuccessModal(true);
        setName("");
        setContactEmail("");
        setMessage("");
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    newsletterMutation.mutate({ email: email.trim() });
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
            <div className="flex items-center gap-3 pt-2">
              <Phone className="h-5 w-5 text-accent" />
              <a 
                href="tel:267-665-2899" 
                className="font-mono text-lg text-white hover:text-accent transition-colors"
              >
                (267) 665-2899
              </a>
            </div>
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
                    disabled={isSubmitting}
                    className="bg-transparent border-white/10 focus:border-accent h-12 text-lg font-light rounded-none"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contactEmail" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email *</label>
                  <Input 
                    id="contactEmail" 
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    disabled={isSubmitting}
                    required
                    className="bg-transparent border-white/10 focus:border-accent h-12 text-lg font-light rounded-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Message *</label>
                <Textarea 
                  id="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="bg-transparent border-white/10 focus:border-accent min-h-[200px] text-lg font-light rounded-none resize-none"
                  placeholder="How can we work together?"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full md:w-auto rounded-none bg-white text-black hover:bg-accent hover:text-white transition-colors font-mono uppercase tracking-widest"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Newsletter Signup - Mailchimp Integration via Backend */}
          <div className="pt-16 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-white">Join the List</h3>
                <p className="font-sans text-muted-foreground">
                  Occasional updates on music, projects, and teaching. No spam, ever.
                </p>
              </div>
              
              {/* Newsletter Form with tRPC */}
              <form 
                onSubmit={handleNewsletterSubmit}
                className="flex gap-0"
              >
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={newsletterMutation.isPending}
                  className="bg-transparent border-white/10 border-r-0 focus:border-accent h-12 rounded-none flex-grow"
                />
                <Button 
                  type="submit"
                  disabled={newsletterMutation.isPending}
                  className="h-12 rounded-none bg-white/10 text-white hover:bg-accent border border-white/10 border-l-0"
                >
                  {newsletterMutation.isPending ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
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
              Message Sent
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              Thank you for reaching out! I'll get back to you as soon as possible.
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
