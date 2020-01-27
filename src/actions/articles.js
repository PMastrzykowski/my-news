import axios from 'axios';
import { getArticles } from '../helpers';
import { SET_ARTICLES, ADD_ERROR, TOGGLE_SORT, TOGGLE_FILTER, REMOVE_ERROR } from './types';
import { parseDate } from '../helpers';
export const setArticles = (category) => dispatch => {
    axios.get(getArticles(category))
        .then(res => {
            res.data.articles.map(article => {
                article.date = parseDate(article.date);
                return article
            })
            dispatch({
                type: SET_ARTICLES,
                articles: res.data.articles
            });
        })
        .catch(err => {
            dispatch({
                type: ADD_ERROR,
                err: `We couldn't fetch articles about ${category}. Click to close.`
            });
        });
}
export const toggleSort = () => {
    return {
        type: TOGGLE_SORT
    }
}
export const toggleFilter = (filterName) => {
    return {
        type: TOGGLE_FILTER,
        filterName
    }
}
export const removeError = (index) => {
    return {
        type: REMOVE_ERROR,
        index
    }
}
