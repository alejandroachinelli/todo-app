import React, { useContext } from 'react'
import '../../styles/TodoSearch.css'
import { TodoContext } from '../../contexts/TodoContext'
import search from '../../assets/icons/search.png';

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext);

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
            />

            <img src={search} className='Logo' alt='Search' onClick={() => { document.getElementById('TodoSearch').focus()}}/>
        </>
    )
}

export { TodoSearch };