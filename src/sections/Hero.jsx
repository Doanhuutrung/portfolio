import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { Behance } from "@/components/icons/Behance";

const skills = [
  "React",
  "Next.js",
  "Three.js",
  "TypeScript",
  "Node.js",
  "Firebase",
  "MongoDB",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Figma",
  "Git",
];

export const Hero = () => {
  return (
    <section id="keyvisual" className="relative min-h-screen flex items-center overflow-hiidden">
      <div className="absolute inset-0">
        <img
          src="/bg-hero.jpg"
          alt="background-section"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 "
            style={{
              backgroundColor: "#007bff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                UX/UI Designer • Frontend Developer
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting
                <span className="text-primary glow-text"> digital </span>
                <br />
                experiences that
                <br />
                delight users
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I'm Doan Huu Trung, a passionate UX/UI designer and frontend
                developer. I specialize in creating intuitive and visually
                stunning digital experiences that captivate users and drive
                engagement. With a keen eye for design and a strong foundation
                in frontend technologies, I bring ideas to life through seamless
                interfaces and engaging interactions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <a href="/resume.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download My Resume
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow:</span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/Doanhuutrung",
                  target: "_blank",
                },
                { icon: Behance, href: "https://www.behance.net/trungonhu" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/huu-t-111258254/",
                },
              ].map((social, target, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={target}
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/user-6.jpg"
                  alt="HuuTrung"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for working in Danang
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technology I work with:
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skills, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skills}
                  </span>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
