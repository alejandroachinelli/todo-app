import React, { useState } from 'react'

// Cambiamos al HOC por React Hooks que se encuentra dentro de la ruta ./src/hooks
function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener({sincronize}){

        const [storageChange, setStorageChange] = useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'todos'){
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            sincronize();
            setStorageChange(false);
        }

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export { withStorageListener }