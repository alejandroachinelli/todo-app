import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos () {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos
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

    return {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        sincronizeTodos
    };
}

export { useTodos };