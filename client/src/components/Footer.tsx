import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [location] = useLocation();
  const isEducationPage = location === "/education" || location === "/faq";
  const isHomePage = location === "/";

  // Hide footer on Music Education page and FAQ page
  if (isEducationPage) {
    return null;
  }

  return (
    <footer className={cn(
      "py-6 text-center text-sm font-sans",
      isHomePage
        ? "absolute bottom-0 left-0 right-0 text-white/50"
        : "bg-background text-foreground/50 border-t border-border/10"
    )}>
      <div className="container">
        <p>© Copyright 2026 Master Key Music Group LLC. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
