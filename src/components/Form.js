import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ADD_TODO } from "../actions/actionsType";

import { TextField, Typography, Button } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        margin: "3rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: "2rem",
        marginBottom: "1.5rem",
        [theme.breakpoints.up("sm")]: {
            fontSize: "3rem",
        },
    },
    icon: {
        fontSize: "2.5rem",
    },
    input: {
        width: "85%",
    },
}));

const Form = ({ dispatch }) => {
    const classes = useStyles();
    //texto ingresado en el input
    const [inputText, setInputText] = useState("");

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        const todo = { text: inputText, completed: false, id: uuidv4() };

        dispatch({ type: ADD_TODO, payload: todo });
        setInputText("");
        //limpiamos el estado del input text para que quede vacio
    };

    return (
        <form className={classes.formContainer}>
            <Typography variant="h1" className={classes.title}>
                Agregar Tarea
            </Typography>
            <TextField
                id="todo"
                variant="outlined"
                label="Nueva tarea:"
                aria-label="ingresar tarea"
                placeholder="ingresar tarea..."
                onChange={inputTextHandler}
                value={inputText}
                className={classes.input}
                focused
            />
            <Button
                style={{ marginTop: "2rem" }}
                variant="contained"
                startIcon={<AddBox />}
                color="primary"
                aria-label="button add new todo"
                onClick={submitTodoHandler}
                type="submit"
                disabled={!inputText ? true : false}
            >
                Agregar
            </Button>
        </form>
    );
};

export default Form;
