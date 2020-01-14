//step 3 
import React from 'react';

export default (props) => (
    <div 
        style={{
            textDecoration: props.todo.complete ? "line-through" : ""
        }}
        onClick={props.toggleComplete}
    >
        {props.todo.text}</div>//when ever someone click on a todo item is going to call funciton called toggle complete, so were are going to add this on line 41 of todolist
);
/* 
to do step 3 we first have to display the cross off and actually updating our state
we first add an onClick to our div
*/