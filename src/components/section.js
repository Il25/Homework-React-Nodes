import React from "react";
import Node from "./node";

class Section extends React.Component {

    render() {
        return(
            <div style={{display:"flex", justifyContent:"center"}}>
              <Node/>
              <Node/>
              <Node/>
            </div>
        )
    }
}

export default Section;