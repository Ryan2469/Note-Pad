import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './List.scss'

import Preview from './Preview';


const List = () => {

    const navigate = useNavigate();
    const Data = JSON.parse(localStorage.getItem("Data"));

    //로컬스토리지 데이터 삭제
    // window.localStorage.removeItem("Data");

    let content;

    if(Data === 0 || Data === undefined || Data === null) {
        content = (
            <React.Fragment></React.Fragment>
        )
    } else {
        content = (
            Data.map((items)=> <div 
                style={{cursor: "pointer"}}
                key={items.key} onClick={previewReadHandler} >{items.title}
            </div>)
        )
    }

    /**
     * 호이스팅 function
     * 클릭된 요소가 몇번째인지 찾는 함수
     */
    function previewReadHandler (event) {
        const clickedElement = event.target;
        const index = Array.from(clickedElement.parentNode.children).indexOf(clickedElement);
        const context = {
            id: '',
            title: '',
            text: '',
        }

        for(let i=0; i<Data.length; i++) {
            if(index === Data[i].id) {
                context.id = index;
                context.title = Data[i].title;
                context.text = Data[i].text;
            }
        }
        console.log(context);

        navigate(`/Preview/${index}`);
        <Preview onContext={context} />

        return 
    } 

    return(
        <div className='list-element'>
           {content}
        </div>
    )
}

export default List;