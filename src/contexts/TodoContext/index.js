import React, { useState, useEffect, createContext } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TodoContext = createContext();

function TodoProvider (props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('todos', []);

    const [searchValue, setSearchValue] = useState('');

    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchValue.length >= 1) {
        searchedTodos = todos;
    }else{
        searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    }

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };

        saveTodos([...todos, newTodo]);
    };

    const completeTodos = (id) => {

        const newTodos = todos.map(
            todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
            return todo;
        });
        saveTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };