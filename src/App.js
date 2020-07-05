import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Pam', age: '24'},
      {name: 'Dwight', age: '28'},
      {name: 'Jim', age: '21'}
    ],
    otherState: 'some value',
    showPersons: false
  }

  switchNameHandler =(newName) => {
    this.setState({
      persons: [
        {name: newName, age: '24'},
        {name: 'Dwight', age: '28'},
        {name: 'Jim', age: '21'}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Pam', age: '24'},
        {name: event.target.value, age: '28'},
        {name: 'Jim', age: '21'}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      boder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map(person => {
          return <Person 
            name={person.name} 
            age={person.age}/>
        })}
        </div>
      );
    }


    return (
      <div className='App'>
        <h1>Hi, I'm a React App!</h1>
        <p>This is actually working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!'));
  }
}

export default App;
