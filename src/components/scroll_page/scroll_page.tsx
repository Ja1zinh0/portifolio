import { RefObject } from "react";
import About from "../../pages/about/about"
import Experience from "../../pages/experience/experience";
import '../scroll_page/scrollpage.css';

interface SectionRefs {
    about: RefObject<HTMLDivElement>;
    experiences: RefObject<HTMLDivElement>;
  }
  
  interface ScrollPageProps {
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
        </div>
    )
}

export default ScrollPage