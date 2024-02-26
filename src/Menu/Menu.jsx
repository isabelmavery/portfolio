import { useState } from "react"
import { isabelsTopNav } from './menuData'
import './Menu.css'


function MenuItemHeader({ navItem, isFolder, isOpen, handleOpen }) {
    const isLink = !!navItem.link
    return (
        <div style={{ display: "flex", gap: 8, alignItems: isFolder ? "center" : "flex-start" }}>
            {isFolder ? 
                (<button 
                    onClick={handleOpen}
                    style={{
                        ...(isOpen ? { transform: "rotate(90deg)" } : {}),
                    }}
                >
                    {`>`}
                    </button>) : "-" }
            {isLink ? 
                <a key={`${navItem.id}`} href={navItem.link}>{navItem.value}</a> 
                : <div key={`${navItem.id}`}>{navItem.value}</div>}
        </div>
    )
}

function MenuItem(props) {
    const { navItem } = props
    const [isOpen, setIsOpen] = useState(false)

    function handleOpen() {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    if (navItem.children?.length) {
        return (
            <div>
                <MenuItemHeader isFolder navItem={navItem} isOpen={isOpen} handleOpen={handleOpen}/>
                {isOpen && navItem.children.map((child) => (
                    <div className="tree-item-child">
                        <MenuItem navItem={child} />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <MenuItemHeader navItem={navItem} isOpen={isOpen} handleOpen={handleOpen}/>
    )
}

export default function Menu() {
    return (
        <div className="folder">
            {isabelsTopNav.map((navItem) => <MenuItem navItem={navItem} />)}
        </div>
    )
}