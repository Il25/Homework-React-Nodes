import './App.css';
import React, {
  Fragment
} from 'react';
import ListItems from './components/ListItems.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: [],
      currentItem: {
        text: "",
        key: "",
      }
    } 
  };

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      }
    })
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      })
    }
  };

  render() {
    return ( 
      <div className="App">
        <header>
          <h1>Notes list:</h1>
          <form id="notes-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Add a note" value={this.state.currentItem.text} onChange={this.handleInput}/>
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.items}/>
      </div>
    )
  };
};

export default App;
