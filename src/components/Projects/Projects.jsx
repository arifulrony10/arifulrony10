import { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {

  const [projects, setProjects] = useState(null)

  const fetchProjects = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchProjects('projectLists.json'
    )
  console.log(projects)
  }, [])


  return <div>
    <h2>Projects</h2>
    <div className="grid md:grid-cols-3 gap-5">
    {
      projects &&
            projects.map((project) => {
              return <Project key={project.id} project={project}/>
            })
    }
    </div>
  </div>;
};
export default Projects;
