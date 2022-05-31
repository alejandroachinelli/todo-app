import React from 'react';
import '../../styles/TodoLoading.css';

function TodoLoading() {
    return (
        <li className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'>
                Loading tasks...
            </p>
            <span className='LoadingTodo-deleteIcon'></span>
        </li>
    )
}

export { TodoLoading };
