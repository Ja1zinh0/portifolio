import About from "../../pages/about/about"
import Experience from "../../pages/experience/experience";
import '../scroll_page/scrollpage.css';

function ScrollPage(){
    return(
        <div className="scrollpage">
            <About />
            <div className="gap"></div>
            <Experience />
        </div>
    )
}

export default ScrollPage