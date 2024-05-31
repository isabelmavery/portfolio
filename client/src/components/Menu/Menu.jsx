import { useState } from "react";
import isabelsResume from "./menuData";
import "./Menu.css";
import Anchor from "../../base-components/Anchor/Anchor";
import CuteBullet from "../../assets/CuteBullet";

function MenuItemHeader({ navItem, isFolder, isOpen, handleOpen }) {
  const isLink = !!navItem.link;
  return (
    <div
      className="menu-item-header"
      style={{
        display: "flex",
        gap: 8,
        alignItems: isFolder ? "center" : "flex-start",
      }}
    >
      {isFolder ? (
        <button onClick={handleOpen} className={isOpen ? "open" : ""}>
          <div className={isOpen ? "menu-arrow open" : "menu-arrow"} />
        </button>
      ) : (
        <CuteBullet />
      )}
      {isLink ? (
        <Anchor
          key={`${navItem.id}`}
          href={navItem.link}
          ariaLabel={navItem.value}
        >
          {navItem.value}
        </Anchor>
      ) : (
        <div
          className="menu-item-wrapper"
          onClick={handleOpen}
          style={{ cursor: isFolder ? "pointer" : "" }}
        >
          <div key={`${navItem.id}`}>{navItem.value}</div>
          {navItem.secondaryValue && (
            <div
              className={isOpen ? "open secondary-value" : "secondary-value"}
            >
              {navItem.secondaryValue}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function MenuItem(props) {
  const { navItem, defaultIsOpen } = props;
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  function handleOpen() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  if (navItem.children?.length) {
    return (
      <div>
        <MenuItemHeader
          isFolder
          navItem={navItem}
          isOpen={isOpen}
          handleOpen={handleOpen}
        />
        {isOpen && (
          <div className={navItem.isEnd ? "last-children" : ""}>
            {navItem.children.map((child, i) => (
              <div className="tree-item-child" key={i}>
                <MenuItem navItem={child} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <MenuItemHeader navItem={navItem} isOpen={isOpen} handleOpen={handleOpen} />
  );
}

export default function Menu() {
  return (
    <div className="expandable-menu">
      {isabelsResume.map((navItem, i) => (
        <MenuItem navItem={navItem} key={`menu-${i}`} defaultIsOpen />
      ))}
    </div>
  );
}
