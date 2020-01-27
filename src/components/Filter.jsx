import React from 'react';

const Filter = (props) => <label className='filter'>
    <input id={props.item.category} type='checkbox' onChange={() => props.onChange(props.item.category)} />
    <div className='content'>
        {props.item.caption}
    </div>
</label>

export default Filter;