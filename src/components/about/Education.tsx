import ExperienceCard from "./ExperienceCard";

const education = [
  {
    duration: "2024 — 2025",
    title: "Diploma in Software Engineering",
    company: "SQI College of ICT, Ibadan",
    description:
      "Completed an intensive, hands-on software engineering program with a strong focus on frontend development and modern web technologies.",
    bullets: [
      "Trained in building scalable, production-ready applications using JavaScript, TypeScript, and modern frameworks",
      "Gained practical experience in component-based architecture, REST API integration, and state management",
      "Worked on real-world projects simulating industry workflows, version control, and collaborative development environments",
    ],
  },
  {
    duration: "3-Month Intensive",
    title: "Frontend Development Program",
    company: "Dev & Design (Online Program)",
    description:
      "Completed a fast-paced online program focused on modern frontend development practices.",
    bullets: [
      "Built responsive user interfaces using React and modern CSS frameworks",
      "Strengthened understanding of UI/UX fundamentals, accessibility, and responsive design principles",
    ],
  },
];

function Education() {
  return (
    <section className="pt-18">
      <div className="container-wrapper flex gap-18  lg:gap-12 items-start flex-col md:flex-row justify-between">
        <div className="md:sticky top-2/12 max-w-lg pr-12 space-y-5">
          <h4 className="text-white text-6xl font-bold leading-[57px]">
            Education
          </h4>
          <p className="text-gray-350 text-base font-normal leading-[24px]">
            Building a foundation of communication and technical skills to
            deliver exceptional digital solutions
          </p>
        </div>
        <div className="grow space-y-8  flex flex-col items-center sm:items-end">
          {education.map((edu) => (
            <ExperienceCard key={edu.company} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
