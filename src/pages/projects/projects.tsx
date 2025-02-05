import ProjectCard from "../../components/project_card/project_card"
import '../projects/projects.css'

function Projects (){
    const handleClick = (project_page: String) =>{
        location.href = `${project_page}`;
    }

    return(
        <div className="projects">
            <div className="projects-title"><p>Projects</p></div>
            <button onClick={() => handleClick('projeto1')} className='clickable-button'><ProjectCard /></button>
            <button onClick={() => handleClick('projeto2')} className='clickable-button'><ProjectCard /></button>
            <button onClick={() => handleClick('projeto3')} className='clickable-button'><ProjectCard /></button>
        </div>
    )
}

export default Projects