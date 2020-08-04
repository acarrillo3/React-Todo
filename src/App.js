import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList'
/*
Help and reference from  https://www.youtube.com/watch?v=I6IY2TqnPDA
1. add todo
2. display todos
3. cross off todo
4. show number of active todos
5. filter all/active/complete
6. delete todo
7. delete all complete
  7.1 only show if at least one is complete
8. button toggle all on/off
*/
/*
const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Pay Bills',
    id: 1528817019961,
    completed: false
  },
  {
    task: 'Buy Groceries',
    id: 1528817020185,
    completed: false
  }
];
*/
class App extends Component {
  // you will need a place to store your state in this component.
  state = {
    count: 0
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count -1
    });
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
