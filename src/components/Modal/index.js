import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Modal.css'
import { TodoForm } from '../TodoForm';

function Modal({children}){

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className='ContainerAddTaskMedia'>
                <h3 className='TitleModal'>Create New Task</h3>
                <p className='MessageModal'>Type your task and then click on the button to add it.</p>
                <div className='ContainerInput'>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };