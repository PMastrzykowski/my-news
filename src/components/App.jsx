import React from 'react';
import { connect } from 'react-redux';
import { setArticles, toggleSort, toggleFilter, removeError } from '../actions/articles';
import Article from './Article.jsx';
import Filter from './Filter.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [{ category: 'sport', caption: 'Sports' }, { category: 'fashion', caption: 'Fashion' }]
        }
    }
    componentDidMount = () => {
        this.props.setArticles('sports');
        this.props.setArticles('fashion');
    }
    render = () => {
        return <div id='app'>
            <div className='filters-wrapper'>
                Data sources
            <div className='filters'>
                    {this.state.categories.map(item => <Filter item={item} key={item.category} onChange={(category) => this.props.toggleFilter(category)} />)}
                </div>
            </div>
            <div className='sort-wrapper'>
                <label className='sort'>
                    <input type='checkbox' onChange={this.props.toggleSort} />
                    <div className='content'>Sort by date
                    <div className='toggle' />
                    </div>
                </label>
            </div>
            <section className='articles'>
                {this.props.errors.map((error, index) => <div key={index} onClick={() => this.props.removeError(index)} className='error'>{error}</div>)}
                {this.props.articles.allArticles
                    .filter(article => this.props.articles.filters.includes(article.category) || this.props.articles.filters.length === 0)
                    .map((article, index) => <Article key={index} article={article} />)}
            </section>
        </div>
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    errors: state.errors
})
const mapDispatchToProps = {
    setArticles,
    toggleSort,
    toggleFilter,
    removeError
};
export default connect(mapStateToProps, mapDispatchToProps)(App);