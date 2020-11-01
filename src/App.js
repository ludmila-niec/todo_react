import React, { useReducer, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import reducer from "./reducer";
import { GET_SAVED_TODOS } from "./actions/actionsType";

const initialState = {
    todos: [],
};

function App() {
    const [todos, dispatch] = useReducer(reducer, initialState);

    //onMount buscar los todos en localStorage
    useEffect(() => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        }
        const localTodos = JSON.parse(localStorage.getItem("todos"));
        dispatch({ type: GET_SAVED_TODOS, payload: localTodos });
    }, []);

    //componentDidUpdate guardar todos modificados (nuevo/eliminado)
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos.todos));
    }, [todos]);
    return (
        <>
            <Header />
            <Form dispatch={dispatch} />
            <TodoList todos={todos} dispatch={dispatch} />
        </>
    );
}

export default App;
