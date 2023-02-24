import './App.css';
import Counters from './components/counters';
import React, { Component } from 'react'
import NavBar from './components/navbar'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({counters});
  };


  handleReset = () => {
   const counters = this.state.counters.map(c => {
      c.value = 0
      return c;
    });
    this.setState({counters});
  };

  handleDelete = counterId => {
    let counters = this.state.counters.filter( m => m.id !== counterId)
    this.setState({counters});
  };

  render(){

  return (
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className='container'>
        <Counters
        counters={this.state.counters}
        onReset ={this.handleReset}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onDecrease={this.handleDecrease}/>
      </main>
    </React.Fragment>
  );
  }
}

export default App;
