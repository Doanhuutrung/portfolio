import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Huyền Học Việt",
    description:
      "Nền tảng tư vấn huyền học và phong thủy dành cho người Việt, cung cấp các tính năng phân tích lá số, tư vấn vận mệnh và giao diện thân thiện giúp người dùng dễ dàng tiếp cận kiến thức huyền học.",
    image: "/projects/phongthuy.webp",
    tags: ["React", "Typescript", "NodeJS", "Figma"],
    link: "https://huyenhocviet.com/",
  },
  {
    title: "Doctor Consultation App",
    description:
      "Ứng dụng tư vấn y tế giúp người dùng trò chuyện trực tiếp với bác sĩ, đặt lịch khám và quản lý lịch hẹn thông qua giao diện hiện đại, tối ưu cho trải nghiệm người dùng.",
    image: "/projects/projects-2.webp",
    tags: ["React", "Nest.Js", "Typescript", "Figma"],
    link: "https://www.behance.net/gallery/241834869/Doctor-Consultation-App-Chat-Appointment-Experience",
  },
  {
    title: "Bác Sĩ Thẩm Mỹ Nguyễn Tuấn Anh",
    description:
      "Website giới thiệu dịch vụ thẩm mỹ và phẫu thuật thẩm mỹ, tập trung vào việc trình bày dịch vụ, thành tựu của bác sĩ và tối ưu trải nghiệm người dùng khi tìm hiểu và đặt lịch tư vấn.",
    image: "/projects/projects-3.webp",
    tags: ["React", "Typescript", "NodeJS", "Figma"],
    link: "https://drtuananh.com/",
  },
  {
    title: "Attendance App",
    description:
      "Ứng dụng chấm công thông minh với tính năng check-in GPS, theo dõi thời gian làm việc theo thời gian thực và thống kê tổng thời gian làm việc hàng tháng cho nhân viên.",
    image: "/projects/projects-4.png",
    tags: ["React.js", "Socket.io", "MongoDB", "Figma", "Typescript"],
    link: "https://www.behance.net/gallery/240736781/Attendance-App",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-white text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white pl-2">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a href="https://www.behance.net/trungonhu" target="_blank">
              View All Projects
            </a>
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
