import React from 'react';
import '../../styles/TodoCounter.css';

function TodoCounter({completedTodos, totalTodos}) {

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