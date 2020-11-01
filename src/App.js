import React, { useReducer, useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import reducer from "./reducer";
import { GET_SAVED_TODOS } from "./actions/actionsType";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "100vh",
    },
}));

const initialState = {
    todos: [],
};

function App() {
    const classes = useStyles();
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

    const [todos, dispatch] = useReducer(reducer, initialState);

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
        localStorage.setItem("todos", JSON.stringify(todos.todos));
    }, [todos]);

    //componentDidUpdate guardar cambio de theme
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(darkMode));
    }, [darkMode]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.container}>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={1} md={2} lg={3} />
                    <Grid item xs={10} md={8} lg={6}>
                        <Form dispatch={dispatch} />
                        <hr />
                        <TodoList todos={todos} dispatch={dispatch} />
                    </Grid>
                    <Grid item xs={1} md={2} lg={3} />
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default App;
