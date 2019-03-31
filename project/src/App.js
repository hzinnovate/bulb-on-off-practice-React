import React, { Component } from 'react';
import './App.css';
const on = 'https://cdn.christmaslightsetc.com/images/productdetail/25048/A19-E26-socket-Transparent-Incandescent-yellow-party-sign-lamp-light-bulb-IMG_1480.jpg?w=555&h=555'
const off = 'https://d3o372dlsg9lxo.cloudfront.net/catalog/products/c3992/images/grid/592de784bbddbd0a654636e2/C3992_Bulb_SCO_LED_A19_4p5W_40WE_C3992.jpg'




class App extends Component {

  state = {
    image: false
  }

  render() {
    return (
      <div className="App">
        <img src={this.state.image ? on : off} onClick={() => this.setState({ image: !this.state.image })} />
      </div>
    );
  }
}

export default App;
