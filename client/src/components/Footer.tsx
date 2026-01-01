import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [location] = useLocation();
  const isEducationPage = location === "/education";
  const isHomePage = location === "/";

  return (
    <footer className={cn(
      "py-6 text-center text-sm font-sans",
      isEducationPage 
        ? "bg-[#faf9f7] text-[#1a1a1a]/60 border-t border-[#1a1a1a]/10" 
        : isHomePage
          ? "absolute bottom-0 left-0 right-0 text-white/50"
          : "bg-background text-foreground/50 border-t border-border/10"
    )}>
      <div className="container">
        <p>© Copyright 2026 Master Key Music Group LLC. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
