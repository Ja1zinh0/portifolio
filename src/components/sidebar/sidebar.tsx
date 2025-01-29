import '../sidebar/sidebar.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa6';
import { SiGmail } from "react-icons/si";
import React, { useState, useEffect, useRef } from "react";


function Sidebar({ sectionRefs }) {
    const [activeSection, setActiveSection] = useState("about");
  
    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // Ajuste conforme necessário
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);
  
      // Observa todas as seções
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.observe(ref.current);
      });
  
      return () => observer.disconnect();
    }, [sectionRefs]);

    return(
    <div className="sidebar">
        <div className="top-text-div">
            <p className="title">João Henrique</p>
            <p className="sub-title">Full-stack Developer</p>
            <p className="introduction-text">Hi! I’m João. A passionate software engineer.</p>
        </div>
        <div className="navButtons">
            <div className="side-navButtons">
            <a
                className={activeSection === "about" ? "active" : ""}
                href="#about"
                onClick={() => setActiveSection("about")}>
                    <FaArrowRight className="arrow-icon" /> About
            </a>

            <a
                className={activeSection === "experiences" ? "active" : ""}
                href="#experiences"
                onClick={() => setActiveSection("experiences")}>
                    <FaArrowRight className="arrow-icon" /> Experiences
            </a>

            <a 
                className={activeSection === "projects" ? "active" : ""} 
                href='#projects' 
                onClick={() => setActiveSection("projects")}>
                    <FaArrowRight className="arrow-icon" /> Projects
            </a>

            <a 
                className={activeSection === "contact" ? "active" : ""} 
                href='#contact' 
                onClick={() => setActiveSection("contact")}>
                    <FaArrowRight className="arrow-icon" /> Contact me
            </a>

            <a 
                className={activeSection === "resume" ? "active" : ""} 
                href='#resume' 
                onClick={() => setActiveSection("resume")}>
                    <FaArrowRight className="arrow-icon" /> Resume
            </a>
            </div>
        </div>
        <div className="icon-buttons">
            <a href='https://github.com/Ja1zinh0' target='_blank'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/joao-henrique-jorge-carlos/' target='_blank'><FaLinkedin /></a>
            <a href='https://mail.google.com/mail/?view=cm&to=joaohenriquejorgecarlos@gmail.com' target='_blank'><SiGmail /></a>
        </div>
    </div>
    )
}

export default Sidebar