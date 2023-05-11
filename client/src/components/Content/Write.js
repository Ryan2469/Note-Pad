import React, { useState, useRef, useReducer } from 'react';
import axios from 'axios';
import List from './List';
import './Write.scss';

const Write = () => {
   
    /**
     * 새로고침 후에도 
     * 기존의 로컬 데이터를 가져오기 위함
     */
    const firstLocalData = JSON.parse(localStorage.getItem("Data"));

    let prevId;
    let lastId;

    try{
        
        if(firstLocalData[0].key > 0) {
            lastId = firstLocalData[firstLocalData.length - 1]
            prevId = lastId.id + 1;
        }

    } catch (e) {
        prevId = 0;
    } 
    
    const addTitle = useRef();
    const addText = useRef();

    const [nextId, setNextId] = useState(prevId);
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
            key: Math.random().toString(),
            id: nextId,
            title: enteredAddTitle,
            text: enteredAddText,
        }
    
        /**
         * 비회원 사용자 데이터 - 로컬스토리지 저장
        */

        //로컬 스토리지에 사용자가 입력한 데이터 저장
        const storageItems = JSON.parse(localStorage.getItem("Data")) || [];

        const prevStorage = [...storageItems, writeData];
        
        //로컬스토리지에 데이터 저장
        localStorage.setItem("Data", JSON.stringify(prevStorage));

        // 사용자가 데이터를 저장하면 List에 실시간으로 보여주기 위해 useState 사용
        setLocStrData(prevStorage);

        //로컬스토리지에 저장한 데이터 불러오기
        const Data = JSON.parse(localStorage.getItem("Data"));

        let lastStorage = Data[Data.length - 1];

        setNextId(lastStorage.id + 1);

       

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