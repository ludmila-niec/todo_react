import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ADD_TODO } from "../actions/actionsType";

const Form = ({ dispatch }) => {
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
        <form>
            <input
                onChange={inputTextHandler}
                type="text"
                placeholder="Agregar tarea..."
                className="todo-input"
                value={inputText}
            />
            <button
                onClick={submitTodoHandler}
                className="todo-button"
                type="submit"
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
};

export default Form;
