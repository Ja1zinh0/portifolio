import '../experience_card/exp_card.css'

function ExpCard(){
    const job_description = `aqui vai toda a descrição do emprego que eu não sei ainda oq colocar
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna eros. Integer
        `;

    return (
        <div className='card-template'>
            <div className='card-inside-div'>
                <div className='card-inside-left'>
                    <p>
                        09/2024 - Atual
                    </p>
                </div>
                <div className='card-inside-right'>
                    <div className='right-text'>
                        <p className='job-title'>Desenvolvedor otario</p>
                        <p className='job-description'>{job_description}</p>
                        <p className='job-description'>{job_description}</p>
                    </div>
                    <div className='bottom-skills'>
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

export default ExpCard