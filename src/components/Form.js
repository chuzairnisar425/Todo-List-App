import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos, EditTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        )
        setTodos(newTodo);
        // setEditTodo("");
    };
    useEffect(() => {
        if (EditTodo) {
            setInput(EditTodo.title);
        }
        else {
            setInput("");
        }
    }, [setInput, EditTodo]);
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!EditTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");

        }
        else {
            updateTodo(input, EditTodo.id, EditTodo.completed)
        }
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' placeholder="Add your note.... " className="task-input" value={input}
                required onChange={onInputChange}
            />
            <button className='button-add' type='submit'>
                {EditTodo ? "Ok" : "Add"}
            
            </button>
        </form>
    );
};

export default Form