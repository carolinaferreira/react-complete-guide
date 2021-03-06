import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '001', name: 'Pam', age: '24'},
      { id: '002', name: 'Dwight', age: '28'},
      { id: '003', name: 'Jim', age: '21'}
    ],
    otherState: 'some value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons =  [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
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
        {this.state.persons.map((person, index) => {
          return <Person 
          click= {() => this.deletePersonHandler(index)}  
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangeHandler(event, person.id)}/>
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
