import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
    
    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        //here were submitting the form works 
        this.props.onSubmit({
            text: this.state.text, //this we get it from the state up above, which is whatever the user types
            complete: false,
            id: shortid.generate() //what this is going to do is generate a unique id for every new added todo
        }); //this onSubmit function is the addTodo from TodoList component where is being incvoke inside the return so that we are able to use props
        this.setState({
            text:"" //after submiting this allows the input to be empty so that we can add a new todo 
        });
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="text"
                    value={this.state.text} 
                    onChange={this.handleChange} 
                    placeholder="todo..."
                />
                <button onClick={this.handleSubmit}>add to-do</button>
            </form>
        );
    }
}

/*
first I valled a state and where i want to save the name and then i created an input with a value of text and onchange and a placeholder
second I created the handleChange function
third I wrapped the input on a form tag and added the event onSubmit, then created a handleSubmit function
afterwards created a addtodo inside the todoList component
then called props and created the onSubmit function inside the handleSubmit function
installed shortid to generate ids, imported, and used id: shortid.generate()
then we will json fied to turn the state into a string, so that the new todo can appear on the screen
created and empty string of text so that the form reset and a button to submit.
completed step 1  now ill be changing the json stringify to using the .maps method  so that the text we submited can be kept on the screen and that completes step 2


*/ 