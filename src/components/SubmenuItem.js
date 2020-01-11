import React, { useState } from "react";
import Card from "./NewCard";

const SubmenuItem = ({ item, childItems }) => {
  const [isOpened, setIsOpened] = useState(false);

  const renderItems = items => {
    return items.map((item, index) => <Card key={index} item={item} />);
  };

  return (
    <div className="submenu">
      <div onClick={() => setIsOpened(!isOpened)} className="submenu-item">
        {item.name}
      </div>
      <div className={"item-list " + (isOpened ? "active" : "")}>
        {renderItems(childItems)}
      </div>
    </div>
  );
};
export default SubmenuItem;
