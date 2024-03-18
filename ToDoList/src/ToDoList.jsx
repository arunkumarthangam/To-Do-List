/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ToDoList() {
    const [task, setTask] = useState([]);
    const [newtask, setNewTask] = useState("");

    function handleInputTask(event) {
        setNewTask(event.target.value);
    }

    function addtask() {
        if (newtask.trim() !== "") {
            setTask(t => [...t, newtask]);
            setNewTask("");

        }

    }
    
    function handleDeleteTask(index) {
        const updatedtask = task.filter((_, i) => i !== index);
        setTask(updatedtask);
    }

    function handleMoveTaskUp(index) {
        if (index > 0) {
            const updatedtask = [...task];
            [updatedtask[index], updatedtask[index - 1]] =
                [updatedtask[index - 1], updatedtask[index]];
            setTask(updatedtask);
        }
    }

    function handleMoveTaskDown(index) {
        if (index < task.length - 1) {
            const updatedtask = [...task];
            [updatedtask[index], updatedtask[index + 1]] =
                [updatedtask[index + 1], updatedtask[index]];
            setTask(updatedtask);
        }
    }
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="enter the task"
                    value={newtask}
                    onChange={handleInputTask}
                />
                <button className="add-button" onClick={addtask}>Add</button>
            </div>

            <ul>
                {task.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button"
                            onClick={() => handleDeleteTask(index)}>
                            ❌
                        </button>
                        <button className="move-button"
                            onClick={() => handleMoveTaskUp(index)}>
                            ☝🏻️
                        </button>

                        <button className="move-button"
                            onClick={() => handleMoveTaskDown(index)}>
                            👇🏻
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ToDoList;
