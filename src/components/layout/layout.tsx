import ScrollPage from "./scroll_page";
import Sidebar from "./sidebar";
import '../../assets/styles/layout.css';

function Layout(){
    return(
    <div className="layout">
        <Sidebar />
        <ScrollPage />
    </div>
    )
}

export default Layout