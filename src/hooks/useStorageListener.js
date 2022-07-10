import React, { useState } from 'react'

function useStorageListener(sincronize) {
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

        return {
            show: storageChange,
            toggleShow
        };
}

export { useStorageListener }