import ScrollPage from "../scroll_page/scroll_page";
import Sidebar from "../sidebar/sidebar";
import '../layout/layout.css';

function Layout(){
    return(
    <div className="layout">
        <Sidebar />
        <ScrollPage />
    </div>
    )
}

export default Layout