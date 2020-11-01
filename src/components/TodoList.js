import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, dispatch }) => {
    const myTodos = todos.todos;
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {myTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
