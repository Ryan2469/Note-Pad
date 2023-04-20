import React, { useState } from 'react';
import axios from 'axios';
import List from './List';
import './Write.scss';

const Write = (props) => {

    const objectData = [
        {
            idx: 1,
            title: '메모장 1',
            text: '무엇을 입력하면 좋을까?'
        },
        {
            idx: 2,
            title: '메모장 2',
            text: '무엇을 입력하면 좋을까?'
        },
        {
            idx: 3,
            title: '메모장 3ㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㅇㅁㄴㅇㅁㄴㅇㄴㅁ',
            text: '무엇을 입력하면 좋을까?'
        },
        {
            idx: 4,
            title: '메모장 4',
            text: '무엇을 입력하면 좋을까?'
        },
    ];

    const [enterTitle, setEnterTitel] = useState('');
    const [enterText, setEnterText] = useState('');

    const titleChangeHandler = (event) => {
        setEnterTitel(event.target.value);
    }

    const textChangeHandler = (event) => {
        setEnterText(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if(enterTitle == "" || enterText == "" ) {
            alert("제목과 내용을 전부 작성해 주세요.")
            return
        }

        const writeData = {
            title: enterTitle,
            text: enterText
        }

        console.log(writeData);

         /**
             *  ReastFull API post-board
             *  게시판 글 작성하기
             */

        // const writing = async () => {
        //     const response = axios.post("/api/board", {
        //         note_title: writeData.title,
        //         note_text: writeData.text,
        //     }
        //     .then((response)=>{
        //         console.log(response);
        //         // router.push({ path : '/boardList'})
        //     }).catch((error)=>{
        //         console.log(error);
        //         alert(error);
        //     })

        //     );
        // }

        props.onSubmitChange(writeData);

        setEnterTitel('');
        setEnterText('');
    }


    return (
        <form style={{backgroundColor: '#fffffcee'}} onSubmit={submitHandler}>
            <div className="write-content">
                <div className="write-inner-content">
                    <input 
                        className="write-input" 
                        onChange={titleChangeHandler}
                        value={enterTitle}
                        type="text" 
                        placeholder="제목을 입력해주세요."
                    />
                    
                    <textarea 
                        className="write-textarea"
                        onChange={textChangeHandler}
                        value={enterText}
                        type="text"
                        placeholder="내용을 입력해주세요." 
                    ></textarea>
                </div>
                <div className='write-side-list'>
                    <List items={objectData}/>
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
                <div>
                    <button className="write-but" type='submit'>
                        저장하기
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Write;