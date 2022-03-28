import SidedarMorePages from "./Sidedar-MorePages";
import SidedarNewFeeds from "./Sidedar-NewFeeds";

let Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidedarNewFeeds />
            <SidedarMorePages />

        </div>
    )
};

export default Sidebar;
