import React, { useContext } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../../contexts/TodoContext';
import { Modal } from '../Modal';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodo } from '../EmptyTodo';
import '../../styles/App.css';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue
    } = useContext(TodoContext);

    return (
        <>
            <div className='CreateTaskButton'>

                <CreateTodoButton
                    addTodo={addTodo}
                />

            </div>

            <div className='ContainerTask'>

                <TodoCounter
                    completedTodos={completeTodos}
                    totalTodos={totalTodos}
                />

                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                {
                    (error) ?
                        <TodoError error={error} /> :
                    (loading) ?
                        Array(4).fill().map((item, index) => (
                            <TodoLoading key={index}/>
                        )) :
                    (!searchedTodos.length) ?
                        <EmptyTodo /> :
                        <TodoList>
                            {searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.id}
                                    id={todo.id}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodos(todo.id)}
                                    onDelete={() => deleteTodo(todo.id)}
                                />
                            ))}
                        </TodoList>
                }

                {openModal && (<Modal />)}

                <button className='CreateTodoButtonMedia'
                    onClick={() => setOpenModal(prevState => !prevState)}
                >
                    +
                </button>
            </div>
        </>
    );
}

export { AppUI };