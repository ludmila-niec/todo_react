import React from "react";
import Todo from "./Todo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    todoListContainer: {
        margin: 0,
        padding: 0,
    },
}));

const TodoList = ({ todos, dispatch }) => {
    const classes = useStyles();
    const myTodos = todos.todos;
    return (
        <div style={{ padding: "1.5rem 0" }}>
            <ul className={classes.todoListContainer}>
                {myTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
