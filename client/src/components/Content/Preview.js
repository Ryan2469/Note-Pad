import React, { useState, useRef } from 'react';
import axios from 'axios';
import List from './List';
import './Preview.scss';

const Preview = (props) => {
    
    console.log(props.id);

    let title, text = null;

    return (
        <form style={{backgroundColor: '#fffffcee'}} onSubmit={(event) => {
            event.preventDefault();

        }}>
            <div className="preview-content">
                <div className="preview-inner-content">
                    <input 
                        className="preview-input" 
                        type="text" 
                        placeholder="제목을 입력해주세요."
                    />
                    
                    <textarea 
                        className="preview-textarea"
                        type="text"
                        placeholder="내용을 입력해주세요." 
                    ></textarea>
                </div>
                <div className='preview-side-list'>
                    <List/>
                </div>
            </div>
            <div className="preview-utils">
                <div className="file-upload">
                    <input 
                        type="file" 
                        className="icon-file" 
                        change="multiFiles"
                        multiple
                    />
                </div>
                <React.Fragment>
                    <button className="preview-but" type='submit'>
                        업데이트
                    </button>
                </React.Fragment>
            </div>
        </form>
    );
}

export default Preview;