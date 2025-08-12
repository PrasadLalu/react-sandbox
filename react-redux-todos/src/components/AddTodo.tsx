import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { addTodoItem } from "../features/todos/todoSlice";

const AddTodo = () => {
    const [text, setText] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim() === "") return;

        dispatch(addTodoItem(text))
        setText("")
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add New Task:</label>
                    <input type="" onChange={(e) => setText(e.target.value)} />
                    <button>Add Task</button>
                </div>
            </form>
        </>
    );
};

export default AddTodo;
