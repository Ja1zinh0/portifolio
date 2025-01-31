import '../project_card/project_card.css'

function ProjectCard(){
    const project_description = `aqui vai toda a descrição do projeto que eu não sei ainda oq colocar
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna eros. Integer
        `
    return (
        <div className="project-rectangle">
           <div className="card-inside-div">
                <div className='image-side'>
                    <div className='fake-image'>Aqui vai uma preview de imagem</div>
                </div>
                <div className='text-side'>
                    <div className='right-text'>
                            <p className='project-title'>Projetinho 1 fellas</p>
                            <p className='project-description'>{project_description}</p>
                        </div>
                        <div className='project-bottom-skills'>
                            <div className='skill-rectangle'><p>Skill1</p></div>
                            <div className='skill-rectangle'><p>Skill2</p></div>
                            <div className='skill-rectangle'><p>Skill3</p></div>
                            <div className='skill-rectangle'><p>Skill4</p></div>
                        </div>
                </div>
           </div>
        </div>
    )
}

export default ProjectCard;
