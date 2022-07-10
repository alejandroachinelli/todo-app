import React, { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {

    const [sincronizedItem, setSincronizedItem] = useState(true);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
                setSincronizedItem(true);
            }catch(error){
                setError(error);
            }
        }, 3000);
    }, [sincronizedItem]);

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }

    const sincronizeItem = () => {
        setLoading(true);
        setSincronizedItem(false);
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem,
    };

}

export { useLocalStorage };