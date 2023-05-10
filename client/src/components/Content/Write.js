import React, { useState, useRef } from 'react';
import axios from 'axios';
import List from './List';
import './Write.scss';

const Write = () => {

    const addTitle = useRef();
    const addText = useRef();

    const [locStrData, setLocStrData] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAddTitle = addTitle.current.value;
        const enteredAddText = addText.current.value; 

        
        if(enteredAddTitle.trim().length === 0 || enteredAddText.trim().length === 0) {
            alert("제목과 내용을 전부 작성해 주세요.")
            return
        }
        
        const writeData = {
            key: 0,
            id: Date.now(),
            title: enteredAddTitle,
            text: enteredAddText,
        }

    
        /**
         * 비회원 사용자 데이터 - 로컬스토리지 저장
        */

       //로컬 스토리지에 사용자가 입력한 데이터 저장
       const storageItems = JSON.parse(localStorage.getItem("Data")) || [];

       const prevStorage = [...storageItems, writeData];
       //저장한 데이터 불러오자
       localStorage.setItem("Data", JSON.stringify(prevStorage));

       setLocStrData(prevStorage);

        addTitle.current.value = '';
        addText.current.value = '';
    }

    return (
        <form style={{backgroundColor: '#fffffcee'}} onSubmit={submitHandler}>
            <div className="write-content">
                <div className="write-inner-content">
                    <input 
                        className="write-input" 
                        ref={addTitle}
                        type="text" 
                        placeholder="제목을 입력해주세요."
                    />
                    
                    <textarea 
                        className="write-textarea"
                        ref={addText}
                        type="text"
                        placeholder="내용을 입력해주세요." 
                    ></textarea>
                </div>
                <div className='write-side-list'>
                    <List items={locStrData}/>
                </div>
            </div>
            <div className="write-utils">
                <div className="file-upload">
                    <input 
                        type="file" 
                        className="icon-file" 
                        change="multiFiles"
                        multiple
                    />
                </div>
                <React.Fragment>
                    <button className="write-but" type='submit'>
                        저장하기
                    </button>
                </React.Fragment>
            </div>
        </form>
    );
}

export default Write;