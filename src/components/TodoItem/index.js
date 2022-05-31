import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import '../../styles/TodoItem.css'

function TodoItem({ completed, text, onComplete, onDelete}) {
    return (
        <li className={`TodoItem ${completed && 'TodoItem-li--complete'}`}>
            <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={onComplete}>
                <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                {text}
            </p>
            <span className='Icon Icon-delete' onClick={onDelete}>
                <FontAwesomeIcon icon={faTrashCan} />
            </span>
        </li>
    )
}

export { TodoItem };