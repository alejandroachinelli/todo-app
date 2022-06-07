import React, { useState } from 'react';
import '../../styles/CreateTodoButton.css';

function CreateTodoButton({addTodo}) {

    const [newTodoValue, setNewTodoValue] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTodoValue.length > 0){
            addTodo(newTodoValue);
            setNewTodoValue('');
        } else {
            setErrorMessage(true);
            setTimeout(() => {
                setErrorMessage(false);
            }, 5000);
        }
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    return (
        <>
            <div className='Title'>
                <h2>Create New Task</h2>
                <span>Type your task and then click on the button to add it.</span>
            </div>
            <div className='AddTaskContainer'>
                <form onSubmit={handleSubmit}>
                    <input className='AddTaskInput' type='text' id='newTask' name='newTask' placeholder='Write a new task' value={newTodoValue} onChange={onChange}/>
                    <br />
                    <button className='ButtonCreateTask' type='submit'>
                        Create task
                    </button>
                </form>
                <div hidden={!errorMessage}>
                    <p className={`${errorMessage ? 'MessageError-run' : 'MessageError-end'}`}>You must write a task to be able to add it.</p>
                </div>
            </div>
        </>
    )
}

export { CreateTodoButton };
