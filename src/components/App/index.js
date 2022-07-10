import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodo } from '../EmptyTodo';
import { EmptySearchResults } from '../EmptySearchResults';
import { useTodos } from '../../hooks/useTodos';
import { TodoForm } from '../TodoForm';
import { TodoContainer } from '../TodoContainer';
import { ChangeAlert } from '../ChangeAlert';
import '../../styles/App.css';

function App() {

const {
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
} = useTodos();

return (
        <>
            <div className='CreateTaskButton'>

                <CreateTodoButton
                    addTodo={addTodo}
                />

            </div>

            <div className='ContainerTask'>

                <TodoContainer loading={loading}>
                    <TodoCounter
                        completedTodos={completedTodos}
                        totalTodos={totalTodos}
                    />

                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </TodoContainer>

                <TodoList
                    error={error}
                    loading={loading}
                    searchedTodos={searchedTodos}
                    searchText={searchValue}
                    totalTodos={totalTodos}
                    onError={() => <TodoError />}
                    onLoading={() => <TodoLoading />} //Array(4).fill().map((item, index) => (<TodoLoading key={index}/>)) Si quiero mostrar varios elementos de cargando
                    onEmptyTodo={() => <EmptyTodo />}
                    onEmptySearchResults={(searchText) => <EmptySearchResults searchText={searchText}/>}
                    render={todo => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodos(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                        />
                    )}
                >
                    {/*
                    Render Function
                    {todo => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodos(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                        />
                    )}
                    */}
                </TodoList>

                {openModal &&
                    (
                        <Modal>
                            <TodoForm setOpenModal={setOpenModal} addTodo={addTodo}/>
                        </Modal>
                    )
                }

                <button className='CreateTodoButtonMedia'
                    onClick={() => setOpenModal(prevState => !prevState)}
                >
                    +
                </button>

                <ChangeAlert
                    sincronize={sincronizeTodos}
                />
            </div>
        </>
    );
}

export default App;
