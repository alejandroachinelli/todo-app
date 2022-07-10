import React, { cloneElement, Children } from 'react';

function TodoContainer({children, loading}) {

    return (
        <header>
            {
                Children
                    .toArray(children)
                    .map(child => cloneElement(child, { loading }))
            }
        </header>
    )
}

export {TodoContainer}