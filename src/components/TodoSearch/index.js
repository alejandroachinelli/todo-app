import React from 'react';
import '../../styles/TodoSearch.css';
import search from '../../assets/icons/search.png';

function TodoSearch({searchValue, setSearchValue, loading}) {

    const searchTask = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <>
            <input
                className='TodoSearch'
                id='TodoSearch'
                placeholder='Search your task'
                value={searchValue}
                onChange={searchTask}
                disabled={loading}
            />

            <img src={search} className='Logo' alt='Search' onClick={() => { document.getElementById('TodoSearch').focus()}}/>
        </>
    )
}

export { TodoSearch };