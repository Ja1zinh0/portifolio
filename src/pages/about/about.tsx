import '../about/about.css'

function About(){

    const loremText = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna eros. Integer
        lacinia nibh id nulla fermentum, ac aliquet eros tincidunt. Curabitur ac ligula at neque 
        volutpat feugiat. Praesent nec nunc id nisi feugiat pellentesque.
    `;

    return(
        <div className="about">
            <div className='about-text'>
                <div className='about-title'><p>About me</p></div>
            <p>{loremText}</p>
            <p>{loremText}</p>
            <p>{loremText}</p>
            <p>{loremText}</p>
            </div>
        </div>
    )
}

export default About