import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

// JotForm API configuration
const JOTFORM_API_KEY = "8c8cea31119f56bfdeeecfe085d02e8e";
const STUDENT_INQUIRY_FORM_ID = "260004236569050";

export default function Education() {
  // Ref for the My Music Staff widget container
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  // Force light mode on mount, revert on unmount
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    return () => {
      document.documentElement.classList.add("dark");
    };
  }, []);

  // Load My Music Staff widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9sdFdKeSIsIldlYnNpdGVJRCI6Indic19WYzZKeCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3p6cHJoSksifQ==';
    script.async = true;
    
    // Append to the widget container
    if (widgetContainerRef.current) {
      widgetContainerRef.current.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Form fields matching JotForm structure
  const [studentType, setStudentType] = useState("");
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentCity, setStudentCity] = useState("");
  const [studentState, setStudentState] = useState("");
  const [studentZip, setStudentZip] = useState("");
  const [studentBirthday, setStudentBirthday] = useState("");
  const [parentFirstName, setParentFirstName] = useState("");
  const [parentLastName, setParentLastName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [lessonDuration, setLessonDuration] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const isAdult = studentType === "Adult";
    if (!studentType || !studentFirstName || !studentEmail || !studentBirthday || 
        !lessonDuration || !studentAddress || !studentCity || !studentState || !studentZip) {
      toast.error("Please fill in all required fields");
      return;
    }
    // Parent info required only for non-adults
    if (!isAdult && (!parentFirstName || !parentLastName)) {
      toast.error("Please fill in parent/guardian information");
      return;
    }

    setIsSubmitting(true);

    try {
      // Parse birthday for JotForm datetime format
      const birthdayDate = new Date(studentBirthday);
      const birthMonth = String(birthdayDate.getMonth() + 1).padStart(2, '0');
      const birthDay = String(birthdayDate.getDate()).padStart(2, '0');
      const birthYear = String(birthdayDate.getFullYear());

      // Submit to JotForm API
      const formData = new FormData();
      
      // Field mappings from JotForm:
      // 6 = Student Type (radio)
      // 12 = Student First Name
      // 13 = Student Last Name
      // 3 = Student Email
      // 4 = Student Phone Number
      // 11 = Student Address (compound)
      // 5 = Student Birthday (datetime)
      // 14 = Parent First Name
      // 15 = Parent Last Name
      // 8 = Parent Email
      // 9 = Parent Phone Number
      // 10 = Lesson Duration (dropdown)

      formData.append("submission[6]", studentType);
      formData.append("submission[12]", studentFirstName);
      formData.append("submission[13]", studentLastName);
      formData.append("submission[3]", studentEmail);
      formData.append("submission[4_full]", studentPhone);
      
      // Address compound field
      formData.append("submission[11_addr_line1]", studentAddress);
      formData.append("submission[11_city]", studentCity);
      formData.append("submission[11_state]", studentState);
      formData.append("submission[11_postal]", studentZip);
      formData.append("submission[11_country]", "United States");
      
      // Birthday datetime field
      formData.append("submission[5_month]", birthMonth);
      formData.append("submission[5_day]", birthDay);
      formData.append("submission[5_year]", birthYear);
      
      formData.append("submission[14]", parentFirstName);
      formData.append("submission[15]", parentLastName);
      formData.append("submission[8]", parentEmail);
      formData.append("submission[9_full]", parentPhone);
      formData.append("submission[10]", lessonDuration);

      const response = await fetch(
        `https://api.jotform.com/form/${STUDENT_INQUIRY_FORM_ID}/submissions?apiKey=${JOTFORM_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.responseCode === 200) {
        setShowSuccessModal(true);
        // Reset form
        setStudentType("");
        setStudentFirstName("");
        setStudentLastName("");
        setStudentEmail("");
        setStudentPhone("");
        setStudentAddress("");
        setStudentCity("");
        setStudentState("");
        setStudentZip("");
        setStudentBirthday("");
        setParentFirstName("");
        setParentLastName("");
        setParentEmail("");
        setParentPhone("");
        setLessonDuration("");
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit inquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Light theme input styles
  const inputStyles = "bg-white border-[#1a1a1a]/10 focus:border-[#c06c58] h-12 text-base font-light rounded-none text-[#1a1a1a] placeholder:text-[#1a1a1a]/40";
  const labelStyles = "font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/60";
  const gridLabelStyles = "font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/60 min-h-[2.5rem] flex items-end pb-1";

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
                  src="/images/education-hero.jpg" 
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

            {/* My Music Staff Login Widget */}
            <div className="space-y-8">
              <h2 className="font-mono text-sm uppercase tracking-widest text-[#c06c58]">Current Students</h2>
              <p className="font-sans text-lg text-[#1a1a1a]/70">
                Already a student? Log in to access your lesson schedule, assignments, and more.
              </p>
              <div 
                ref={widgetContainerRef}
                className="bg-white p-6 border border-[#1a1a1a]/10 rounded-sm"
              >
                {/* My Music Staff widget will be injected here */}
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
              <h3 className="font-serif text-2xl mb-2 text-[#1a1a1a]">Student <span className="text-[#c06c58] italic">Inquiry</span></h3>
              <p className="font-sans text-sm text-[#1a1a1a]/60 mb-8">
                Please fill out the form below to inquire about lessons. I'll be in touch shortly to discuss availability and next steps.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Type */}
                <div className="space-y-2">
                  <label className={labelStyles}>Student Type *</label>
                  <Select value={studentType} onValueChange={setStudentType} disabled={isSubmitting}>
                    <SelectTrigger className={inputStyles}>
                      <SelectValue placeholder="Select student type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Child">Child</SelectItem>
                      <SelectItem value="Adult">Adult</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Student Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={gridLabelStyles}>Student First Name *</label>
                    <Input 
                      value={studentFirstName}
                      onChange={(e) => setStudentFirstName(e.target.value)}
                      disabled={isSubmitting}
                      className={inputStyles}
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className={gridLabelStyles}>Last Name</label>
                    <Input 
                      value={studentLastName}
                      onChange={(e) => setStudentLastName(e.target.value)}
                      disabled={isSubmitting}
                      className={inputStyles}
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Student Email */}
                <div className="space-y-2">
                  <label className={labelStyles}>Student Email *</label>
                  <Input 
                    type="email"
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    disabled={isSubmitting}
                    className={inputStyles}
                    placeholder="student@email.com"
                  />
                </div>

                {/* Student Phone */}
                <div className="space-y-2">
                  <label className={labelStyles}>Student Phone</label>
                  <Input 
                    type="tel"
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                    disabled={isSubmitting}
                    className={inputStyles}
                    placeholder="(555) 555-5555"
                  />
                </div>

                {/* Student Address */}
                <div className="space-y-2">
                  <label className={labelStyles}>Student Address *</label>
                  <Input 
                    value={studentAddress}
                    onChange={(e) => setStudentAddress(e.target.value)}
                    disabled={isSubmitting}
                    className={inputStyles}
                    placeholder="Street address"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className={labelStyles}>City *</label>
                    <Input 
                      value={studentCity}
                      onChange={(e) => setStudentCity(e.target.value)}
                      disabled={isSubmitting}
                      className={inputStyles}
                      placeholder="City"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelStyles}>State *</label>
                    <Input 
                      value={studentState}
                      onChange={(e) => setStudentState(e.target.value)}
                      disabled={isSubmitting}
                      className={inputStyles}
                      placeholder="State"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelStyles}>Zip *</label>
                    <Input 
                      value={studentZip}
                      onChange={(e) => setStudentZip(e.target.value)}
                      disabled={isSubmitting}
                      className={inputStyles}
                      placeholder="Zip"
                    />
                  </div>
                </div>

                {/* Student Birthday */}
                <div className="space-y-2">
                  <label className={labelStyles}>Student Birthday *</label>
                  <Input 
                    type="date"
                    value={studentBirthday}
                    onChange={(e) => setStudentBirthday(e.target.value)}
                    disabled={isSubmitting}
                    className={inputStyles}
                  />
                </div>

                {/* Parent/Guardian Information - Hidden for Adults */}
                {studentType !== "Adult" && (
                  <>
                    {/* Divider */}
                    <div className="border-t border-[#1a1a1a]/10 pt-6">
                      <p className="font-mono text-xs uppercase tracking-widest text-[#c06c58] mb-4">Parent/Guardian Information</p>
                    </div>

                    {/* Parent Name */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={gridLabelStyles}>Parent First Name *</label>
                        <Input 
                          value={parentFirstName}
                          onChange={(e) => setParentFirstName(e.target.value)}
                          disabled={isSubmitting}
                          className={inputStyles}
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className={gridLabelStyles}>Last Name *</label>
                        <Input 
                          value={parentLastName}
                          onChange={(e) => setParentLastName(e.target.value)}
                          disabled={isSubmitting}
                          className={inputStyles}
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    {/* Parent Email */}
                    <div className="space-y-2">
                      <label className={labelStyles}>Parent Email</label>
                      <Input 
                        type="email"
                        value={parentEmail}
                        onChange={(e) => setParentEmail(e.target.value)}
                        disabled={isSubmitting}
                        className={inputStyles}
                        placeholder="parent@email.com"
                      />
                    </div>

                    {/* Parent Phone */}
                    <div className="space-y-2">
                      <label className={labelStyles}>Parent Phone</label>
                      <Input 
                        type="tel"
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        disabled={isSubmitting}
                        className={inputStyles}
                        placeholder="(555) 555-5555"
                      />
                    </div>
                  </>
                )}

                {/* Lesson Duration */}
                <div className="space-y-2">
                  <label className={labelStyles}>Lesson Duration *</label>
                  <Select value={lessonDuration} onValueChange={setLessonDuration} disabled={isSubmitting}>
                    <SelectTrigger className={inputStyles}>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30 minutes">30 minutes</SelectItem>
                      <SelectItem value="45 minutes">45 minutes</SelectItem>
                      <SelectItem value="60 minutes">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full rounded-none bg-[#1a1a1a] text-white hover:bg-[#c06c58] transition-colors font-mono uppercase tracking-widest"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
              </form>
              
              <p className="font-sans text-xs text-[#1a1a1a]/40 mt-4 text-center">
                * Required fields
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-white border-[#1a1a1a]/10 text-[#1a1a1a] max-w-md">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto">
              <CheckCircle className="w-16 h-16 text-[#c06c58]" />
            </div>
            <DialogTitle className="font-serif text-3xl font-light">
              Inquiry Submitted
            </DialogTitle>
            <DialogDescription className="text-[#1a1a1a]/60 text-base">
              Thank you for your interest in music lessons! I'll review your inquiry and get back to you soon to discuss availability and next steps.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="rounded-none bg-[#1a1a1a] text-white hover:bg-[#c06c58] transition-colors font-mono uppercase tracking-widest"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
