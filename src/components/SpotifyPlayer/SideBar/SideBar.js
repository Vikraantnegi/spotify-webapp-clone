import React from 'react';
import './SideBar.css';
import '../../../styles/HelperStyles.css';
import SidebarOption from './SideBarOption/SideBarOption';
import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import LibraryMusic from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../../../utility/StateProvider';

function SideBar() {
    const [{playlist}, dispatch] = useStateValue();
    return (
        <div className="player-sidebar flexColumn">
            <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo" />
            <SidebarOption title="Home" Icon={Home} />
            <SidebarOption title="Search" Icon={Search} />
            <SidebarOption title="Your Library" Icon={LibraryMusic} />
            <br />
            <strong className="playlist-title">PLAYLISTS</strong>
            <hr />
            {   playlist?.items?.map(playlist => (
                    <SidebarOption title={playlist.name} />
                ))
            }
        </div>
    )
}

export default SideBar;
