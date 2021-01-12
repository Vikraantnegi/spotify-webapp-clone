import React from 'react';
import './Header.css';
import '../../../../styles/HelperStyles.css';
import { Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../../../../utility/StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="contentbody-header flexRow flexBetween">
            <div className="searchbody flexRow flexAlignCenter">
                <Search />
                <input placeholder="Search for Artists, Songs, Albums" type="text" />
            </div>
            <div className="user-info flexRow flexAlignCenter">
                <Avatar src={user?.images[0]?.url} alt="user-img" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
