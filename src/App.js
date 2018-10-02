import React, { Component } from 'react';
import TodoContainer from './redux/TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>Redux Test Example</h1>
         <TodoContainer/>
      </div>
    );
  }
}

export default App;
