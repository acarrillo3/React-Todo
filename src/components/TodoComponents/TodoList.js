// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
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

export default class TodoList extends React.Component {
    state = {
        todos: [],
        todoToShow: "all",
        toggleAllComplete: true 
    };

    addTodo = (todo) => {
        /*const newTodos = [todo, ...this.state.todos]; -->what we are doing here is creating a copy of the todos array and passing it to the newTodos and if i place the todo infront of the ... that means its going to the very begginning
        this.setState({
            todos: newTodos
        }) the bottom is a better way to say the above*/
        this.setState(state => ({
            todos: [todo, ...state.todos]
        }));//after this we pass it as a prop
    };

    toggleComplete = (id) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    //suppose to update
                    return{
                        // id: todo.id,
                        // text: todo.text, instead of this we will use the ....todo since the first two will stay the same
                        ...todo,
                        complete: !todo.complete //we are inversing here that means that this will turn true
                    };
                } else {
                    return todo;
                }
            })
        }));
    };

    updateTodoToShow = s => {
        this.setState({
            todoToShow: s
        });
    };

    handleDeleteTodo = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id) //function to delete the todos
        }));
    }

    removeAllTodosThatAreComplete = () => {
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete) //this  is a similar function to the handleDeleteTodo
        }));
    }

    render() {
        let todos = [];//step 5 bellow

        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
            <div>
                <TodoForm onSubmit={this.addTodo} /> {/* here it says when we submit our form a todo will be added */}
               {/* {JSON.stringify(this.state.todos)} what this is doing is turning the array into a string, that way we can see the value of our state, however this does not delete what we type on the input so i created a this.setState where the text is set to and empty string  */}
               {todos.map(todo => (
                  // <div key={todo.id}> {todo.text}</div> here we are using the maps function and what is saying is that for each todo a div is created which renders the text and we are giving it a key which is the todo id
                  <Todo
                    key={todo.id}
                    toggleComplete={() => this.toggleComplete(todo.id)} // we now have a prop that we are passing which is function, so whenever the div is click is going to call that prop and that is a Lambda function so that can acces a parameter which is in the map. after this we can create this function
                   // text={todo.text} /> instead of the above line we are now rendering the todo component passing text as a prop
                    onDelete={() => this.handleDeleteTodo(todo.id)}
                    todo={todo}
                   />
               ))}
                <div>
                    Todos left: {this.state.todos.filter(todo => !todo.complete).length}
                </div> {/*#4. this filter goes one by one and if it matches this condition it keeps them */}
                <div>
                    <button onClick={() => this.updateTodoToShow("all")}>all</button>
                    <button onClick={() => this.updateTodoToShow("active")}>active</button>
                    <button onClick={() => this.updateTodoToShow("complete")}>complete</button> {/*part of step so that we can filter thru the todos array */}
                </div>
                {this.state.todos.some(todo => todo.complete) ? (
                    <div>
                        <button onClick={this.removeAllTodosThatAreComplete}>
                            remove all completed todos
                        </button>
                    </div>
                ) : null}
                <div>
                    <button 
                        onClick={() => 
                            this.setState((state) => ({
                                todos: state.todos.map( todo => ({
                                    ...todo,
                                    complete: state.toggleAllComplete
                                })),
                                toggleAllComplete: !state.toggleAllComplete
                            }))
                        }
                    >
                        toggle all complete: {`${this.state.toggleAllComplete}`} 
                    </button>
                </div>
            </div>
        );
    }
}
/*on the last button we made it into a conditional so that it only appears when theres completed items */