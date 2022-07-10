import React from 'react';
import '../../styles/EmptySearchResults.css'

function EmptySearchResults({searchText}) {
    return (
        <div className='MessageEmptySearchResults'>
            <p>No hay resultados para {searchText}</p>
        </div>
    )
}

export { EmptySearchResults }