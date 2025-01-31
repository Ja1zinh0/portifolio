import { RefObject } from "react";
import About from "../../pages/about/about"
import Experience from "../../pages/experience/experience";
import Projects from "../../pages/projects/projects";
import '../scroll_page/scrollpage.css';

interface SectionRefs {
    about: RefObject<HTMLDivElement>;
    experiences: RefObject<HTMLDivElement>;
    projects: RefObject<HTMLDivElement>;
  }
  
  export interface ScrollPageProps {
    sectionRefs: SectionRefs;
  }


function ScrollPage({ sectionRefs }: ScrollPageProps){
    return(
        <div className="scrollpage">
            <div id="about" ref={sectionRefs.about} className="about">
                <About />
            </div>
            <div className="gap"></div>
            <div id="experiences" ref={sectionRefs.experiences}>
                <Experience />
            </div>
            <div className="gap"></div>
            <div id="projects" ref={sectionRefs.projects}>
                <Projects />
            </div>
        </div>
    )
}

export default ScrollPage