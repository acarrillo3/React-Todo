//step 3 
import React from 'react';

export default (props) => (
    <div>
        <div 
            style={{
                textDecoration: props.todo.complete ? "line-through" : ""
            }}
            onClick={props.toggleComplete}
        >
            {props.todo.text}
        </div>{/*when ever someone click on a todo item is going to call funciton called toggle complete, so were are going to add this on line 41 of todolist*/}
        <button onClick={props.onDelete}>x</button>
    </div>
);
/* 
to do step 3 we first have to display the cross off and actually updating our state
we first add an onClick to our div
*/

/*
Step 6 making a button that allows the user to delete a todo wrapper the return in a div and added at the bottom a buttom called X. 
inside the buttom we are saying onClick call this function onDelete which is  invoke in our TodoList line 74 and written in 
*/