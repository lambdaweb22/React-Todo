import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoData = [
  {
    name: 'Homework',
    id: 1,
    completed: false
  },
  {
    name: 'Laundry',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    // you will need a place to store your state in this component.
    this.state = {
      todos : todoData
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleTask = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          todos={this.state.todos}
          toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}

export default App;
