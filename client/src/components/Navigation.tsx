import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isEducationPage = location === "/education" || location === "/faq";
  const isHomePage = location === "/";
  // Look Up Radio page now shows the home link with dark background
  
  // Pages where the home link is hidden (no background needed)
  const hideHomeLinkPages = isHomePage;

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Bio", path: "/bio" },
    { name: "Releases", path: "/releases" },
    { name: "Projects", path: "/projects" },
    { name: "Music Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
      isEducationPage 
        ? "text-foreground bg-white/90 backdrop-blur-sm" 
        : hideHomeLinkPages 
          ? "text-white mix-blend-difference" 
          : "text-white bg-background/90 backdrop-blur-sm"
    )}>
      <div className="container flex items-center justify-between">
        {/* Identity Line - Only visible on non-home pages */}
        <Link 
          href="/"
          className={cn(
            "text-lg font-serif tracking-tight hover:opacity-70 transition-opacity",
            isHomePage ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          <span className={isEducationPage ? "text-[#1a1a1a]" : ""}>Gene</span> <span className="italic text-accent">Burke</span>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-transparent focus:ring-0"
            >
              <Menu className={cn("h-8 w-8 stroke-[1.5]", isEducationPage && "text-[#1a1a1a]")} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] bg-background border-l border-border/10 p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full justify-center p-12">
              <ul className="space-y-8">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      href={item.path}
                      className={cn(
                        "block text-4xl md:text-5xl font-serif font-light tracking-tight transition-colors hover:text-accent",
                        location === item.path ? "text-accent italic" : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-20 space-y-4">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Connect</p>
                <div className="flex gap-6">
                  <a href="https://www.instagram.com/genejburke" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Instagram</a>
                  <a href="https://www.linkedin.com/in/genekeysburke/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">LinkedIn</a>
                  <a href="https://www.youtube.com/@genejburke" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">YouTube</a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
