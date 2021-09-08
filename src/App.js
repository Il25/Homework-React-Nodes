import './App.css';
import React, {
  Fragment
} from 'react';
import Section from "./components/section.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

class App extends React.Component {


  render() {
    return ( 
      <div style={{height:"100wh"}}>
        <Header/>
        <Section/>
        <Footer/>
        {/* <h1>Hello React</h1>
        <h2>Name: {this.state.name}</h2>
        <h3>Count: {this.state.count}</h3>
        <button title="Click" onClick={this.setCount}>Click</button> */}

      </div>
    )
  }
}

export default App;
