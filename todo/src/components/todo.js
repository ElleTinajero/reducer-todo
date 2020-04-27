import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/reducer';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state, dispatch);

    const [addItem, setAddItem] = useState('');
    
    return (
        <div>
            {state.item}
        </div>
    )
}

export default Todo;