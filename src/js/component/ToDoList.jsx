import React, { useState } from "react";

const ToDoList = () => {

const [allValues, setAllValues] = useState ([])
const [inputValue, setInputValue] = useState ("");

const addItem = (event) => {
event.preventDefault();
setAllValues(allValues => [...allValues, inputValue]);
}

const removeItem = (index) => {
const newList = allValues.filter((task, id) => index !== id);
setAllValues(newList);
} 
// qué coño pasa aquí

return (
<div>
    <form onSubmit={addItem}><input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue}/></form>
    <div>
        <ul>{allValues.map((task, index) => <div className="listItem"><li key={index}>{task}<button className="btn-danger" onClick={(event) => removeItem(index)}>Remove task</button></li></div>)}</ul>
    </div>
    <div>{allValues.length == 0 ? "No tasks, add a task" : allValues.length + " items left"}</div>
</div>

)
};
export default ToDoList;