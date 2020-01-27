import { ADD_ERROR, REMOVE_ERROR } from '../actions/types';
const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return [
                ...state,
                action.err
            ]
        case REMOVE_ERROR:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}