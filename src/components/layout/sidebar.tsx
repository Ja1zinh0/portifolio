import '../../assets/styles/sidebar.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa6';
import { SiGmail } from "react-icons/si";

function Sidebar(){
    return(
    <div className="sidebar">
        <div className="top-text-div">
            <p className="title">João Henrique</p>
            <p className="sub-title">Full-stack Developer</p>
            <p className="introduction-text">Hi! I’m João. A passionate software engineer.</p>
        </div>
        <div className="navButtons">
            <div className="side-navButtons">
                <a> <FaArrowRight className="arrow-icon" /> About</a>
                <a><FaArrowRight className="arrow-icon" /> Experiences</a>
                <a><FaArrowRight className="arrow-icon" /> Projects</a>
                <a><FaArrowRight className="arrow-icon" /> Contact me</a>
                <a><FaArrowRight className="arrow-icon" /> Resume</a>
            </div>
        </div>
        <div className="icon-buttons">
            <FaGithub />
            <FaLinkedin />
            <SiGmail />
        </div>
    </div>
    )
}

export default Sidebar