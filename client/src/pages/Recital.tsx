import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";
import { assetUrl } from "@/lib/utils";
import { pathFor } from "@/lib/basePath";

const FORM_ID = "261696215328058";
const API_KEY = import.meta.env.VITE_JOTFORM_API_KEY as string;

interface FormState {
  studentFirstName: string;
  studentLastName: string;
  studentAge: string;
  instrument: string;
  teacher: string;
  participation: string;
  tshirtSize: string;
  parentFirstName: string;
  parentLastName: string;
  email: string;
  phone: string;
  comments: string;
}

const INITIAL: FormState = {
  studentFirstName: "",
  studentLastName: "",
  studentAge: "",
  instrument: "",
  teacher: "",
  participation: "",
  tshirtSize: "",
  parentFirstName: "",
  parentLastName: "",
  email: "",
  phone: "",
  comments: "",
};

const inputClass =
  "w-full px-4 py-3 rounded-md border border-[#003a63]/20 bg-white text-[#1F1F1F] font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#003a63]/30 focus:border-[#003a63] transition-colors placeholder:text-[#1F1F1F]/40";
const labelClass =
  "block font-mono text-xs uppercase tracking-[0.15em] text-[#003a63] mb-2";

function Required() {
  return <span className="text-[#C46A3A] ml-1">*</span>;
}

export default function Recital() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    return () => {
      document.documentElement.classList.add("dark");
    };
  }, []);

  function field(key: keyof FormState) {
    return (e: { target: { value: string } }) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const fd = new FormData();
    fd.append("submission[2][first]", form.studentFirstName);
    fd.append("submission[2][last]", form.studentLastName);
    fd.append("submission[3]", form.studentAge);
    fd.append("submission[4]", form.instrument);
    fd.append("submission[10]", form.teacher);
    fd.append("submission[13]", form.participation);
    fd.append("submission[12]", form.tshirtSize);
    fd.append("submission[5][first]", form.parentFirstName);
    fd.append("submission[5][last]", form.parentLastName);
    fd.append("submission[6]", form.email);
    if (form.phone) fd.append("submission[7][full]", form.phone);
    if (form.comments) fd.append("submission[8]", form.comments);

    try {
      const res = await fetch(
        `https://api.jotform.com/form/${FORM_ID}/submissions?apiKey=${API_KEY}`,
        { method: "POST", body: fd }
      );
      const data = await res.json();
      if (data.responseCode === 200) {
        setSubmitted(true);
      } else {
        setError(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#F6F4F1] text-[#1F1F1F]">
      {/* Header */}
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
              className="font-sans text-sm font-medium text-[#1F1F1F]/70 hover:text-[#003a63] transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            {/* Page Header */}
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C46A3A]">
                Master Key Music School
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#003a63] leading-tight">
                Summer Recital<br />Registration
              </h1>
              <p className="font-sans text-lg text-[#1F1F1F]/70 leading-relaxed">
                Enter your details to register your student for the upcoming recital.
              </p>
            </div>

            <div className="border-t border-[#003a63]/10" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg p-10 border border-[#003a63]/10 shadow-sm text-center space-y-4"
              >
                <CheckCircle className="w-14 h-14 text-[#003a63] mx-auto" />
                <h2 className="font-serif text-2xl text-[#003a63]">
                  Registration Received
                </h2>
                <p className="font-sans text-[#1F1F1F]/70 max-w-sm mx-auto">
                  Thank you! We've received your registration and will be in touch with next steps shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Student Information */}
                <div className="bg-white rounded-lg border border-[#003a63]/10 shadow-sm overflow-hidden">
                  <div className="bg-[#003a63] px-6 py-4">
                    <h2 className="font-serif text-xl text-white">
                      Student Information
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className={labelClass}>
                        Student's Full Name<Required />
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="First name"
                          value={form.studentFirstName}
                          onChange={field("studentFirstName")}
                          required
                          className={inputClass}
                        />
                        <input
                          type="text"
                          placeholder="Last name"
                          value={form.studentLastName}
                          onChange={field("studentLastName")}
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Student's Age<Required />
                      </label>
                      <input
                        type="number"
                        placeholder="e.g., 12"
                        min="3"
                        max="25"
                        value={form.studentAge}
                        onChange={field("studentAge")}
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Instrument or Performance Type<Required />
                      </label>
                      <select
                        value={form.instrument}
                        onChange={field("instrument")}
                        required
                        className={inputClass}
                      >
                        <option value="">Please Select</option>
                        <option>Piano</option>
                        <option>Guitar</option>
                        <option>Voice</option>
                        <option>Drums</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Teacher<Required />
                      </label>
                      <select
                        value={form.teacher}
                        onChange={field("teacher")}
                        required
                        className={inputClass}
                      >
                        <option value="">Please Select</option>
                        <option>Cam Cephas</option>
                        <option>Gene Burke</option>
                        <option>Mare Floyd</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>
                        How will your student participate?<Required />
                      </label>
                      <select
                        value={form.participation}
                        onChange={field("participation")}
                        required
                        className={inputClass}
                      >
                        <option value="">Please Select</option>
                        <option>In-Person (reccomended)</option>
                        <option>Virtual</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>
                        T-Shirt Size<Required />
                      </label>
                      <select
                        value={form.tshirtSize}
                        onChange={field("tshirtSize")}
                        required
                        className={inputClass}
                      >
                        <option value="">Please Select</option>
                        <option>Adult X Small</option>
                        <option>Adult Small</option>
                        <option>Adult Medium</option>
                        <option>Adult Large</option>
                        <option>Adult X Large</option>
                        <option>Adult XXL</option>
                        <option>Youth Small (7-8)</option>
                        <option>Youth Medium (10-12)</option>
                        <option>Youth Large (14-16)</option>
                        <option>Youth X Large (18-20)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-lg border border-[#003a63]/10 shadow-sm overflow-hidden">
                  <div className="bg-[#003a63] px-6 py-4">
                    <h2 className="font-serif text-xl text-white">
                      Contact Information
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className={labelClass}>
                        Parent or Guardian Name<Required />
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="First name"
                          value={form.parentFirstName}
                          onChange={field("parentFirstName")}
                          required
                          className={inputClass}
                        />
                        <input
                          type="text"
                          placeholder="Last name"
                          value={form.parentLastName}
                          onChange={field("parentLastName")}
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Contact Email<Required />
                      </label>
                      <input
                        type="email"
                        placeholder="example@example.com"
                        value={form.email}
                        onChange={field("email")}
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Contact Phone Number</label>
                      <input
                        type="tel"
                        placeholder="(555) 555-5555"
                        value={form.phone}
                        onChange={field("phone")}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-white rounded-lg border border-[#003a63]/10 shadow-sm overflow-hidden">
                  <div className="bg-[#003a63] px-6 py-4">
                    <h2 className="font-serif text-xl text-white">
                      Additional Information
                    </h2>
                    <p className="font-sans text-sm text-white/70 mt-1">
                      Optional
                    </p>
                  </div>
                  <div className="p-6">
                    <label className={labelClass}>
                      Comments or Special Requirements
                    </label>
                    <textarea
                      placeholder="Any allergies or special accommodations?"
                      value={form.comments}
                      onChange={field("comments")}
                      rows={4}
                      className={inputClass + " resize-none"}
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-5 py-4">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-sm text-red-700">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#003a63] hover:bg-[#004d85] disabled:opacity-60 disabled:cursor-not-allowed text-white font-sans font-medium text-base px-8 py-4 rounded-md transition-colors"
                >
                  {submitting ? "Submitting…" : "Register for Recital"}
                </button>

                <p className="text-center font-sans text-xs text-[#1F1F1F]/50">
                  <span className="text-[#C46A3A]">*</span> Required fields
                </p>
              </form>
            )}
          </motion.div>
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
              <Link
                href={pathFor("/education")}
                className="text-white/70 hover:text-white transition-colors"
              >
                Music Education
              </Link>
              <Link
                href={pathFor("/faq")}
                className="text-white/70 hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                href={pathFor("/")}
                className="text-white/70 hover:text-white transition-colors"
              >
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
