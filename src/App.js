import React, { useReducer, useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import reducer from "./reducer";
import { GET_SAVED_TODOS } from "./actions/actionsType";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";

const initialState = {
    todos: [],
};

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: darkMode ? "dark" : "light",
                    primary: {
                        main: purple[300],
                    },
                    secondary: {
                        main: "#84ffff",
                        light: "#5cb2b2",
                    },
                    background: {
                        default: darkMode ? "#303030" : "#f6f4f4",
                    },
                },
            }),
        [darkMode]
    );

    const [state, dispatch] = useReducer(reducer, initialState);

    //onMount buscar los todos y theme en localStorage
    useEffect(() => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        }
        const localTodos = JSON.parse(localStorage.getItem("todos"));
        dispatch({ type: GET_SAVED_TODOS, payload: localTodos });

        //checkear theme en local storage
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", JSON.stringify(""));
        }
        const savedTheme = JSON.parse(localStorage.getItem("theme"));
        setDarkMode(Boolean(savedTheme));
    }, []);

    //componentDidUpdate guardar todos modificados (nuevo/eliminado)
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state.todos));
    }, [state]);

    //componentDidUpdate guardar cambio de theme
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
                <Form dispatch={dispatch} darkMode={darkMode} />
                <hr />
                <TodoList state={state} dispatch={dispatch} />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
