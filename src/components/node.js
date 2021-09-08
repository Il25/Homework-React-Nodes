import React from "react";

class Node extends React.Component {

    render() {
        return(
            <div style={{margin:"20px", maxWidth:"200px", maxHeight:"200px", padding:"10px", alignItems:"center", border:"1px solid grey", borderRadius:"5px", cursor:"pointer"}}>
              <p>Node</p>
              <p>Text</p>
            </div>
        )
    }
}

export default Node;