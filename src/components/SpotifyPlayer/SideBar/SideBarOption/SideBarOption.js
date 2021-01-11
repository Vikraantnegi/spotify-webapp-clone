import React from 'react'

function SideBarOption({title, icon}) {
    return (
        <div className="sidebar-option flexRow">
            {icon && <icon className="sidebar-option-icon"></icon>}
            {icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SideBarOption
