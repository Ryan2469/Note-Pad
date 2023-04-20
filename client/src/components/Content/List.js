import React, { useState } from 'react';
import './List.scss'

const List = (props) => {

    return(
        <div className='list-element'>
            <div>{props.items[0].title}</div>
            <div>{props.items[1].title}</div>
            <div>{props.items[2].title}</div>
            <div>{props.items[3].title}</div>
        </div>
    )
}

export default List;