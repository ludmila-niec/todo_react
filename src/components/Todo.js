import React from "react";
import { TOGGLE_TODO, DELETE_TODO } from "../actions/actionsType";
import { Typography, IconButton, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckBox, Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    todoItemContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        listStyle: "none",
        padding: "1rem",
        marginBottom: "1.5rem",
    },
    todoText: {
        maxWidth: "60%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        [theme.breakpoints.up("sm")]: {
            fontSize: "1.5rem",
        },
    },
    todoCompleted: {
        textDecoration: "line-through",
        opacity: 0.5,
    },
    icon: {
        fontSize: "1.5rem",
        [theme.breakpoints.up("sm")]: {
            fontSize: "2rem",
        },
    },
}));

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
                    aria-label="button delete todo"
                    onClick={() =>
                        dispatch({
                            type: DELETE_TODO,
                            payload: todo.id,
                        })
                    }
                >
                    <Delete className={classes.icon} />
                </IconButton>
            </Paper>
        </Paper>
    );
};

export default Todo;
