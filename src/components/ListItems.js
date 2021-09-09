import React from "react";
import "./ListItems.css";

const ListItems = (props) => {
    return(
        <div className="list" key={props.i.key}>
            <p>
                {props.i}
                <input type="text" id={props.i} value={props.i.text} onChange={(e) => {
             props.setUpdate(e.target.value, props.i.key)}}/>
                <span onClick={() => {props.deleteItem(props.i.key)}}>
                    Delete
                </span>
            </p>  
        </div>
    );
};

export default ListItems;