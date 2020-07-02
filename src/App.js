import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Carol', age: '24'},
      {name: 'Carolina', age: '28'},
      {name: 'Maria', age: '21'}
    ]
  }

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App!</h1>
        <p1>This is actually working!</p1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Cooking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!'));
  }
}

export default App;
