import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import FormContainer from './containers/FormContainer'
// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    index: 0, 
    emptyPlates: [],
    myWalet: 100,
    platesEaten: new Array(4).fill(false),
    visibleBalanceButton: true
  }
  onWaletChange = (value) => {
    this.setState({myWalet: this.state.myWalet + parseInt(value)})
  }
  sushiOnTable = () => {
    const startIndex = this.state.index*4
    const endIndex = (this.state.index + 1) * 4
    return this.state.sushis.slice(startIndex, endIndex)
  }
  updateMyWalet = (price, sushiIndex) => {
    
     const platesEaten = [...this.state.platesEaten]
     platesEaten[sushiIndex] = true 
    if (this.state.myWalet >= price){
      this.setState({
        myWalet: this.state.myWalet - price,
        plateEaten: true,
        emptyPlates: this.state.emptyPlates.concat(true),
        platesEaten: platesEaten
      })
    } 
  }
  updateIndex = () => {
    // check for index here to 
    let index = 0
    if (this.state.index + 1 < Math.floor(this.state.sushis.length / 4 )){
        index = this.state.index + 1
    }
    this.setState({
      index: index,
      emptyPlates: [],
      platesEaten: new Array(4).fill(false)
    })
  }
  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushisObj => this.setState({sushis: sushisObj}))
  }
  render() {
    return (
      <div className="app">
        <SushiContainer  platesEaten={this.state.platesEaten} updateIndex={this.updateIndex} updateMyWalet={this.updateMyWalet} sushis={this.sushiOnTable()}/>
        
        <Table myWalet={this.state.myWalet} emptyPlates={this.state.emptyPlates}/>

        <FormContainer onWaletChange={this.onWaletChange}/>
        
        
      </div>
    );
  }
}

export default App;