import React from 'react';
import './SideBar.css';
import '../../../styles/HelperStyles.css';
import SidebarOption from './SideBarOption/SideBarOption';
import {Home, Search, LibraryMusic} from '@material-ui/icons';

function SideBar() {
    return (
        <div className="player-sidebar">
            <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo" />
            <SidebarOption title="Home" icon={Home} />
            <SidebarOption title="Search" icon={Search} />
            <SidebarOption title="Your Library" icon={LibraryMusic} />
        </div>
    )
}

export default SideBar;
