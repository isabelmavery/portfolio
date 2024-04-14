import { useState } from "react"
import { isabelsTopNav } from './menuData'
import './Menu.css'

const BUTTON_SIZE = 25

/**
 * Old menu component before refactoring, keeping for now so i can analyze perf differences. 
 * @param {*} param0 
 * @returns 
 */
function MenuItem({ navItem, handleOpen, isFolder, isOpen }) {
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

export default function Menu() {
    const [idsToOpenStatus, setIdsToOpenStatus] = useState({})

    function handleOpen(currItem) {
        setIdsToOpenStatus((prevIdsToOpen) => ({
            ...prevIdsToOpen,
            [currItem.id]: !prevIdsToOpen[currItem.id]
        }))
    }

    function renderRootAndChildren(navItem) {
        const isOpen = !!idsToOpenStatus[navItem.id]

        if (navItem.children?.length) {
            return (
                <div>
                    <MenuItem isFolder isOpen={isOpen} navItem={navItem} handleOpen={() => handleOpen(navItem)} />
                    {isOpen && navItem.children.map((child) => (
                        <div style={{ marginLeft: 35 }}>{renderRootAndChildren(child)}</div>
                    ))}
                </div>
            )
        }

        return (
            <MenuItem isOpen={isOpen} navItem={navItem} handleOpen={() => handleOpen(navItem)} />
        )
    }

    return (
        <div className="folder" style={{ margin: 10 }}>
            {isabelsTopNav.map((navItem) => renderRootAndChildren(navItem))}
        </div>
    )
}