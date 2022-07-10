import React from 'react'
// import { withStorageListener } from '../../hoc/withStorageListener';
import { useStorageListener } from '../../hooks/useStorageListener';
import '../../styles/ChangeAlert.css'

function ChangeAlert({sincronize}) {

    const {show, toggleShow} = useStorageListener(sincronize);

    if(show){
        const onClickHandle = () => {
            toggleShow();
        };

        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>It looks like there were changes in another tab or window of your browser.</p>
                    <p>Click on synchronize to reload the screen.</p>
                    <button
                        className='TodoForm-button TodoForm-button--add'
                        onClick={onClickHandle}
                    >
                        Synchronize
                    </button>
                </div>
            </div>
        );
    }
    else
    {
        return null
    }
}

export { ChangeAlert }

//Codigo para implementar en el caso que usemos HOC
// function ChangeAlert({show, toggleShow}) {
//     if(show){
//         const onClickHandle = () => {
//             toggleShow();
//         };

//         return (
//             <div className='ChangeAlert-bg'>
//                 <div className='ChangeAlert-container'>
//                     <p>It looks like there were changes in another tab or window of your browser.</p>
//                     <p>Click on synchronize to reload the screen.</p>
//                     <button
//                         className='TodoForm-button TodoForm-button--add'
//                         onClick={onClickHandle}
//                     >
//                         Synchronize
//                     </button>
//                 </div>
//             </div>
//         );
//     }
//     else
//     {
//         return null
//     }
// }

// const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

// export { ChangeAlertWithStorageListener }