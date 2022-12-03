import React, { useState } from "react";

const ToDoList = () => {

const [allValues, setAllValues] = useState ([])
const [inputValue, setInputValue] = useState ("");

const addItem = (event) => {
event.preventDefault();
setAllValues(allValues => [...allValues, inputValue]);
}

const removeItem = allValues.filter(item => i !== item);

    setList(newList);

return (
<div>
    <form onSubmit={addItem}><input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue}/></form>
    <div>
        <ul>{allValues.map((task, i) => <li key={i}>{task}<button className="btn-danger" onClick={removeItem}>remove task</button></li>)}</ul>
    </div>
    {/* <button className="btn-danger" onClick={addItem}>remove task</button> */}
    <div>{allValues.length == 0 ? "No tasks, add a task" : allValues.length + " items left"}</div>
</div>

)
};
export default ToDoList;