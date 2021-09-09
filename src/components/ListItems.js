import React from "react";
import "./ListItems.css";

const ListItems = ({item, deleteItem, setUpdate}) => {
    return(
        <div className="list" key={item.key}>
            <p>
                <input className='input' value={item.text} id={item.text} type="text" onChange={(e) => {setUpdate(e.target.value, item.id)}}/>
                <span onClick={() => {deleteItem(item.id)}}>
                    Delete
                </span>
            </p>  
        </div>
    );
};

export default ListItems;