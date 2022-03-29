import SidebarAccount from "./Main-Sidebar-Account";
import SidedarMorePages from "./Main-Sidebar-MorePages";
import SidedarNewFeeds from "./Main-Sidebar-NewFeeds";
import "./Main-Sidebar.scss"

let Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidedarNewFeeds />
            <SidedarMorePages />
            <SidebarAccount />
        </div>
    )
};

export default Sidebar;
