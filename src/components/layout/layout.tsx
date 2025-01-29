// Layout.jsx
import { useRef } from 'react';
import ScrollPage from "../scroll_page/scroll_page";
import Sidebar from "../sidebar/sidebar";
import '../layout/layout.css';

function Layout() {
  // Cria as referências para cada seção
  const sectionRefs = {
    about: useRef(null),
    experiences: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
    resume: useRef(null)
  };

  return (
    <div className="layout">
      <Sidebar sectionRefs={sectionRefs} />
      <ScrollPage sectionRefs={sectionRefs} />
    </div>
  )
}

export default Layout