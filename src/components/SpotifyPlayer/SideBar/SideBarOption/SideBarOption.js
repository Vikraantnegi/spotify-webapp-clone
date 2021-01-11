import React from 'react'

function SideBarOption({title, Icon}) {
    return (
        <div className="sidebar-option flexRow flexAlignCenter">
            {Icon && <Icon className="sidebar-option-icon"></Icon>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SideBarOption
