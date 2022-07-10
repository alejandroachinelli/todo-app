import React from 'react';
import '../../styles/TodoList.css';

function TodoList(props) {

    const render = props.children || props.render

    return (
        <section>
            <ul>
                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.totalTodos) && props.onEmptyTodo()}
                {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
                {(!props.loading && !props.error) && props.searchedTodos.map(render)}

                {/*
                En caso de pasar como una render props hay que usar props.render
                {props.searchedTodos.map(props.render)}
                En caso de pasar como una render function hay que usar props.children
                {props.searchedTodos.map(props.children)}
                */}
            </ul>
        </section>
    )
}

export { TodoList };