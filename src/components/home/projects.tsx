import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { projects } from "@/data/projects";

function Projects() {
  return (
    <section className="bg-black pt-8  sm:pt-28 pb-20">
      <div className="container-wrapper ">
        <div className="space-y-13.5 ">
          <div className="flex sm:items-center justify-between w-full flex-col  items-start gap-3 sm:flex-row">
            <article className="flex flex-col sm:gap-2">
              <h3 className="text-white text-5xl font-normal leading-[57.2px]">
                Work.
              </h3>
              <p className="text-3xl sm:text-5xl font-normal leading-[57.2px] text-[#aaaaaa]">
                A selection of recent projects
              </p>
            </article>
            <Button variant="link">
              <span>View My Works</span>
              <ChevronRight size={14} className="text-xs" />
            </Button>
          </div>
          <div className="space-y-12">
            {projects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                thumbnail={project.images.thumbnail}
                description={project.description}
                stack={project.stack}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
