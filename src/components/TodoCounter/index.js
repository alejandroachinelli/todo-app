import React, { useContext } from 'react';
import '../../styles/TodoCounter.css';
import { TodoContext } from '../../contexts/TodoContext';

function TodoCounter() {

    const { completedTodos, totalTodos } = useContext(TodoContext);

    return (
        <>
            <h2 className='TodoCounter'>
                You have completed {completedTodos} of {totalTodos} tasks
            </h2>
            <hr/>
        </>
    );
}

export { TodoCounter };