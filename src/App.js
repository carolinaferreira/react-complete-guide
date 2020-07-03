import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Carol', age: '24'},
      {name: 'Carolina', age: '28'},
      {name: 'Maria', age: '21'}
    ],
    otherState: 'some value'
  }

  switchNameHandler =(newName) => {
    // console.log('was clicked!');
    // this.state.persons[0]= 'Maria Carolina';
    this.setState({
      persons: [
        {name: newName, age: '24'},
        {name: 'Carolina', age: '28'},
        {name: 'Maria', age: '21'}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Carol', age: '24'},
        {name: event.target.value, age: '28'},
        {name: 'Maria', age: '21'}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      boder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className='App'>
        <h1>Hi, I'm a React App!</h1>
        <p>This is actually working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('CAROLINDA')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maria Carolina!!!')}
          changed={this.nameChangeHandler}>My Hobbies: Cooking</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!'));
  }
}

export default App;
