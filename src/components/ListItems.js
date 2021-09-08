import React from "react";
import "./ListItems.css";

const ListItems = (props) => {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key="item.key">
            <p>
                {item.text}
            </p>
        </div>
    })
    return(
        <div>
            {ListItems}
        </div>
    )
};

export default ListItems;