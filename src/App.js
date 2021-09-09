import './App.css';
import React, {
  Fragment
} from 'react';
import ListItems from './components/ListItems.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
      }
    } 
  };

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      currentItem: {
        text: e.target.value,
      }
    })
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    this.setState({
      items: [...this.state.items, newItem]
    })  
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(item => {      
      if(item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items,
    })
  }  

  render() {
    return ( 
      <div className="App">
        <header>
          <h1>Notes list:</h1>
          <form id="notes-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Add a note" value={this.state.currentItem.text} onChange={this.handleInput}/>
            <button>Add</button>
          </form>
        </header>
         {this.state.items.map((i) => {
           return <ListItems i={i.text} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
         })}
      </div>
    )
  };
};

export default App;
