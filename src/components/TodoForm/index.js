import React, { useContext, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import '../../styles/Modal.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const { setOpenModal, addTodo } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTodoValue.length > 0){
            addTodo(newTodoValue);
            setNewTodoValue('');
            setOpenModal(prevState => !prevState);
        } else {
            setErrorMessage(true);
            setTimeout(() => {
                setErrorMessage(false);
            }, 3000);
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setNewTodoValue('');
        setOpenModal(prevState => !prevState);
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type={'text'} placeholder='Write your task' className='InputModal' value={newTodoValue} onChange={onChange}/>
            <br/>
            <div className='ContainerMessage'>
                <p className={`${errorMessage ? 'MessageError-run' : 'MessageError-end'}`}>You must write a task to be able to add it.</p>
            </div>
            <button className='ButtonModal' type='submit'>Add Task</button>
            <button  className='ButtonModalCancel' onClick={handleCancel}>Cancel</button>
        </form>
        </>
    );
}

export { TodoForm };