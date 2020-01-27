import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import articleReducer from './articleReducer';

export default combineReducers({
    errors: errorReducer,
    articles: articleReducer
});