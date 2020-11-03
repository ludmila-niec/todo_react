import React, { useState } from "react";

//actions for dispatch
import { ADD_TODO } from "../actions/actionsType";

//components
import { TextField, Typography, Button } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";

//id generator
import { v4 as uuidv4 } from "uuid";

//style
import { useStyles } from "./FormStyle";

const Form = ({ dispatch, darkMode }) => {
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
    };

    return (
        <form className={classes.formContainer}>
            <Typography variant="h1" className={classes.title}>
                No olvidarme!
            </Typography>
            <TextField
                id="todo"
                variant="outlined"
                color={darkMode ? "secondary" : "primary"}
                label="Mi nota:"
                aria-label="ingresar nota"
                placeholder="ingresar nota..."
                onChange={inputTextHandler}
                value={inputText}
                className={classes.input}
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
