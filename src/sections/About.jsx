import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "UI Development",
    description:
      "Creating modern and responsive user interfaces with React and TypeScript.",
  },
  {
    icon: Rocket,
    title: "User Experience",
    description:
      "Designing simple and intuitive experiences focused on usability.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Collaborating with teams to turn ideas into digital products.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "Exploring new ideas and improving design and development skills.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-white text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Designing and building digital experiences,
              <span className="font-serif italic font-normal text-white pl-2">
                one interface at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a UX/UI Designer and Frontend Developer who enjoys turning
                ideas into clean and intuitive digital experiences. My journey
                started from a strong interest in how interfaces work and how
                good design can improve the way people interact with technology.
              </p>
              <p>
                I focus on designing user-friendly interfaces and bringing them
                to life using modern frontend technologies like React, Next.js,
                and TypeScript.
              </p>
              <p>
                I enjoy bridging the gap between design and development, making
                sure products are not only visually appealing but also
                functional and efficient. Currently, I'm continuously learning,
                improving my design thinking, and exploring better ways to build
                modern web experiences.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to design simple, intuitive interfaces and build
                digital products that provide meaningful experiences for users."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
