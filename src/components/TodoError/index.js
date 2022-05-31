import React from 'react';
import '../../styles/TodoError.css';

function TodoError({error}) {
    return (
        <div className='MessageError'><p>Error while loading tasks, consult support...</p></div>
    )
}

export { TodoError };
