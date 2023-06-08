import projectsData from "../../public/projectLists.json";
import ProjectComponent from "../components/project/project.component";

const ProjectPage = () => {
  return (
    <div>
      <h1 className="text-center my-4">Projects</h1>
      <div className="container">
        <div className="row gap-3 flex-wrap">
          {projectsData &&
            projectsData.map((project) => (
              <ProjectComponent key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
