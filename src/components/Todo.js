import React from "react";
import { TOGGLE_TODO, DELETE_TODO } from "../actions/actionsType";

const Todo = ({ todo, dispatch }) => {
    const classComplete = todo.completed ? "completed" : "";
    return (
        <div className="todo">
            <li className={`todo-item ${classComplete}`}>{todo.text}</li>
            <button
                onClick={() =>
                    dispatch({ type: TOGGLE_TODO, payload: todo.id })
                }
                className="complete-btn"
            >
                <i className="fas fa-check"></i>
            </button>
            <button
                onClick={() =>
                    dispatch({ type: DELETE_TODO, payload: todo.id })
                }
                className="trash-btn"
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;
