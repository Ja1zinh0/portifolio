import ProjectCard from "../../components/project_card/project_card"
import '../projects/projects.css'

function Projects (){
    return(
        <div className="projects">
            <div className="projects-title"><p>Projects</p></div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}

export default Projects