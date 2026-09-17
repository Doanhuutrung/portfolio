import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Huyền Học Việt",
    description:
      "Nền tảng tư vấn huyền học và phong thủy dành cho người Việt, tập trung vào việc đơn giản hóa trải nghiệm tra cứu, phân tích và tiếp cận thông tin phức tạp.",
    image: "/portfolio/projects/phongthuy.webp",
    role: "Product Design · UX/UI · Web",
    tools: ["Figma"],
    development: ["React", "TypeScript", "NodeJS"],
    link: "https://huyenhocviet.com/",
    linkType: "Live Product",
  },
  {
    title: "Doctor Consultation App",
    description:
      "Ứng dụng tư vấn y tế giúp người dùng trò chuyện trực tiếp với bác sĩ, đặt lịch khám và quản lý lịch hẹn thông qua trải nghiệm mobile đơn giản, rõ ràng và dễ sử dụng.",
    image: "/portfolio/projects/projects-2.webp",
    role: "Product Design · UX/UI · Mobile App",
    tools: ["Figma"],
    development: ["React", "NestJS", "TypeScript"],
    link: "https://www.behance.net/gallery/241834869/Doctor-Consultation-App-Chat-Appointment-Experience",
    linkType: "Case Study",
  },
  {
    title: "Bác Sĩ Thẩm Mỹ Nguyễn Tuấn Anh",
    description:
      "Website giới thiệu dịch vụ thẩm mỹ và phẫu thuật thẩm mỹ, tập trung vào information architecture, visual hierarchy và trải nghiệm tìm hiểu dịch vụ cũng như đặt lịch tư vấn.",
    image: "/portfolio/projects/projects-3.webp",
    role: "UX/UI Design · Web Design",
    tools: ["Figma"],
    development: ["React", "TypeScript", "NodeJS"],
    link: "https://drtuananh.com/",
    linkType: "Live Product",
  },
  {
    title: "Attendance App",
    description:
      "Ứng dụng chấm công với GPS check-in, theo dõi thời gian làm việc và thống kê dữ liệu nhân viên, tập trung vào việc đơn giản hóa các tác vụ thường xuyên.",
    image: "/portfolio/projects/projects-4.png",
    role: "Product Design · UX/UI · Mobile App",
    tools: ["Figma"],
    development: ["React", "Socket.io", "MongoDB", "TypeScript"],
    link: "https://www.behance.net/gallery/240736781/Attendance-App",
    linkType: "Case Study",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-white text-sm font-medium tracking-wider uppercase animate-fade-in">
            Selected Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Designing digital experiences that
            <span className="font-serif italic font-normal text-white pl-2">
              feel simple.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of product design, UX/UI, and web experiences focused on
            solving real problems through thoughtful design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Gradient */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-card
                    via-card/50
                    to-transparent
                    opacity-60
                  "
                />

                {/* Overlay Link */}
                <div
                  className="
                    absolute inset-0
                    flex items-center justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                    className="
                      px-5 py-3
                      rounded-full
                      glass
                      flex items-center gap-2
                      text-sm font-medium
                      hover:bg-primary
                      hover:text-primary-foreground
                      transition-all
                    "
                  >
                    {project.linkType}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                {/* Title */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="
                      w-5 h-5 shrink-0
                      text-muted-foreground
                      group-hover:text-primary
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                    "
                  />
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Information */}
                <div className="space-y-3 pt-1">
                  {/* Role */}
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        w-[92px] shrink-0
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-muted-foreground/60
                      "
                    >
                      Role
                    </span>

                    <span
                      className="
                        px-4 py-1.5
                        rounded-full
                        bg-surface
                        text-xs font-medium
                        border border-border/50
                        text-foreground
                        hover:border-primary/50
                        hover:text-primary
                        transition-all duration-300
                      "
                    >
                      {project.role}
                    </span>
                  </div>

                  {/* Tools */}
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        w-[92px] shrink-0
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-muted-foreground/60
                      "
                    >
                      Tools
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="
                            px-4 py-1.5
                            rounded-full
                            bg-surface
                            text-xs font-medium
                            border border-border/50
                            text-muted-foreground
                            hover:border-primary/50
                            hover:text-primary
                            transition-all duration-300
                          "
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Development */}
                  <div className="flex items-start gap-3">
                    <span
                      className="
                        w-[92px] shrink-0 pt-1.5
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-muted-foreground/60
                      "
                    >
                      Development
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {project.development.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-3 py-1.5
                            rounded-full
                            bg-surface
                            text-xs font-medium
                            border border-border/50
                            text-muted-foreground
                            hover:border-primary/50
                            hover:text-primary
                            transition-all duration-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a
              href="https://www.behance.net/trungonhu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
