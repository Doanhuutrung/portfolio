import { Button } from "@/components/Button";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#Testimonails", label: "Testimonails" },
];
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Desktop Navbar */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          Doan Huu Trung <span></span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-mute-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>
        {/* Mobile Navbar */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <Menu size={24} />
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden glass-mobile">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2
            "
              >
                {link.label}
              </a>
            ))}
            <Button>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
