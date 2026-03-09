import { Button } from "@/components/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#Testimonails", label: "Testimonails" },
];
export const Navbar = () => {
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
      </nav>
    </header>
  );
};
