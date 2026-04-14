import ExperienceCard from "./ExperienceCard";
import oneappLogo from "../../../public/png/moblie-logo.avif";
import defifundr from "../../../public/png/defifundr.png";

const experiences = [
  {
    duration: "Oct 2025 — Present",
    logo: oneappLogo,
    title: "Frontend Web Developer",
    company: "1app",
    description:
      "Developing and maintaining the core web application, delivering responsive and scalable user interfaces using Vue and TypeScript.",
    bullets: [
      "Built an internal workforce management tool (Workplace) for onboarding, employee management, events, and leave applications",
      "Implemented role-based access control (RBAC) for secure onboarding flows and structured permissions across admin, manager, and user roles",
      "Designed and optimised onboarding and approval workflows, reducing manual processes and improving new user activation",
      "Collaborated with cross-functional teams to ensure seamless UX and maintainable architecture across the platform",
    ],
  },
  {
    duration: "Apr 2025 — Jan 2026",
    logo: defifundr,
    title: "Web Developer",
    company: "PLNTR",
    description:
      "Developed and maintained two production web applications using Next.js, React, Tailwind CSS, and TypeScript.",
    bullets: [
      "Built public-facing websites for KDB Land & Air and Prodigious Consulting Limited",
      "Implemented service pages, metrics displays, and client engagement flows to improve trust and conversions",
      "Optimised performance and mobile responsiveness to ensure accessibility across devices and network conditions",
      "Collaborated with stakeholders to translate business requirements into scalable, maintainable frontend solutions",
    ],
  },
  {
    duration: "Oct 2024 — Mar 2025",
    logo: defifundr,
    title: "Frontend Developer",
    company: "Vynix Lab",
    description:
      "Contributed to open-source and client projects, building React components and frontend architecture across multiple platforms.",
    bullets: [
      "Developed features for OpenTask, an open-source task management platform for project organisation and goal tracking",
      "Built frontend architecture for the SAMHBA project with responsive design across multiple devices",
      "Participated in code reviews and maintained high coding standards for scalability and maintainability",
      "Contributed to the open-source community through the OnlyDust platform",
    ],
  },
];

function Experience() {
  return (
    <section>
      <div className="container-wrapper flex gap-18  lg:gap-12 items-start flex-col md:flex-row">
        <div className="md:sticky top-2/12 max-w-lg pr-12 space-y-5">
          <h4 className="text-white text-6xl font-bold leading-[57px]">
            Experience
          </h4>
          <p className="text-gray-350 text-base font-normal leading-[24px]">
            Crafting intuitive digital experiences through design and
            development expertise
          </p>
        </div>
        <div className="grow space-y-8  flex flex-col items-center sm:items-end">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;
