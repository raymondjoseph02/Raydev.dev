import { projects } from "@/data/projects";
import Card from "../ui/Card";

function Projects({ activeTab }: { activeTab: string }) {
  const filteredProjects = projects.filter((project) => {
    if (activeTab === "clients work") {
      return !project.isSideProject;
    }
    if (activeTab === "exploration") {
      return project.isSideProject;
    }
    return true; // fallback (shows all if no tab selected)
  });

  return (
    <section>
      <div className="container-wrapper space-y-9">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Card
              key={project.title + index}
              title={project.title}
              thumbnail={project.images.thumbnail}
              description={project.description}
              stack={project.stack}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
