import ExpCard from '../../components/experience_card/exp_card'
import '../experience/experience.css'

function Experience(){
    return (
    <div className='experience'>
        <div className='experience-title'><p>Experiences</p></div>
        <ExpCard />
        <ExpCard />
        <ExpCard />
    </div>
    )
}

export default Experience