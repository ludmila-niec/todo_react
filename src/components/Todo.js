import React from "react";

//actions for dispatch
import { TOGGLE_TODO, DELETE_TODO } from "../actions/actionsType";

//components
import { Typography, IconButton, Paper } from "@material-ui/core";
import { CheckBox, HighlightOff } from "@material-ui/icons";

//styles
import { useStyles } from "./TodoStyle";

const Todo = ({ todo, dispatch }) => {
    const classes = useStyles();
    const classComplete = todo.completed ? classes.todoCompleted : "";
    return (
        <Paper
            component="li"
            elevation={4}
            className={classes.todoItemContainer}
        >
            <Typography
                variant="body1"
                className={`${classes.todoText} ${classComplete}`}
            >
                {todo.text}
            </Typography>
            <Paper elevation={3}>
                <IconButton
                    color="primary"
                    aria-label="button completed todo"
                    className={classes.button}
                    onClick={() =>
                        dispatch({
                            type: TOGGLE_TODO,
                            payload: todo.id,
                        })
                    }
                >
                    <CheckBox className={classes.icon} />
                </IconButton>
                <IconButton
                    color="secondary"
                    className={classes.button}
                    aria-label="button delete todo"
                    onClick={() =>
                        dispatch({
                            type: DELETE_TODO,
                            payload: todo.id,
                        })
                    }
                >
                    <HighlightOff color="error" className={classes.icon} />
                </IconButton>
            </Paper>
        </Paper>
    );
};

export default Todo;
