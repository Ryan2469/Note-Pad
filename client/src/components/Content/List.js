import React, { useState } from 'react';
import './List.scss'

const List = (props) => {

    const Data = JSON.parse(localStorage.getItem("Data"));

    let content;

    if(Data === 0 || Data === undefined || Data === null) {
        content = (
            <React.Fragment></React.Fragment>
        )
    } else {
        content = (
            Data.map((items)=> <div key={items.id}>{items.title}</div>)
        )
    }


    return(
        <div className='list-element'>
           {content}
        </div>
    )
}

export default List;