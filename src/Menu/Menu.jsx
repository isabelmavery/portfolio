import { useState } from "react"
import { isabelsTopNav } from './menuData'
import './Menu.css'

const BUTTON_SIZE = 25

function MenuItemHeader({ navItem, isFolder, isOpen, handleOpen }) {
    const isLink = !!navItem.link
    return (
        <div style={{ display: "flex", minHeight: BUTTON_SIZE, gap: 8, alignItems: isFolder ? "center" : "flex-start" }}>
            {isFolder ? 
                (<button 
                    onClick={handleOpen}
                    style={{
                        ...(isOpen ? { transform: "rotate(90deg)" } : {}),
                        width: BUTTON_SIZE,
                        height: BUTTON_SIZE,
    
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
                    <div style={{ marginLeft: 35 }}>
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
        <div className="folder" style={{ margin: 10 }}>
            {isabelsTopNav.map((navItem) => <MenuItem navItem={navItem} />)}
        </div>
    )
}