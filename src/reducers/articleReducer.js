import { SET_ARTICLES, TOGGLE_SORT, TOGGLE_FILTER } from '../actions/types';
const initialState = {
    allArticles: [],
    sortDescending: true,
    filters: []
}

export default (state = initialState, action) => {
    const byDate = (a, b) => state.sortDescending ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    switch (action.type) {
        case SET_ARTICLES:
            return {
                ...state,
                allArticles: [...state.allArticles, ...action.articles].sort(byDate)
            }
        case TOGGLE_SORT:
            return {
                ...state,
                sortDescending: !state.sortDescending,
                allArticles: state.allArticles.reverse()
            }
        case TOGGLE_FILTER:
            return {
                ...state
                ,
                filters: state.filters.includes(action.filterName) ? state.filters.filter(key => key !== action.filterName) : [...state.filters, action.filterName]
            }
        default:
            return state;
    }
}