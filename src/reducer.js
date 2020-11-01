import {
    GET_SAVED_TODOS,
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
} from "./actions/actionsType";

function reducer(state, action) {
    switch (action.type) {
        case GET_SAVED_TODOS:
            return { ...state, todos: action.payload };
        case ADD_TODO:
            return { ...state, todos: [action.payload, ...state.todos] };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                }),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
}

export default reducer;
