import React from 'react';
import { parseDateForDissplay } from '../helpers';

const Article = (props) => <div className='article'>
<div className='image' style={{backgroundImage: `url(${props.article.image})`}}></div>
<div className='content'>
    <div className='header'>
        <div className='title'>{props.article.title}</div>
        <div className='date'>{parseDateForDissplay(props.article.date)}</div>
    </div>
    <div className='preamble'>{props.article.preamble}</div>
</div>
</div>

export default Article;