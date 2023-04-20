import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.scss';

const Header = () => {

    const navigate = useNavigate();
 
    const leftClickHandler = () => {
        navigate("/");
    }

    const rightClickHandler = () => {
        navigate("/Account");
    };

    return(
        <div className='header-entire'>
            <div className='header-content'>
                <div className='content-left'>
                    <button className="left-elements" onClick={leftClickHandler}>
                        <span>무료</span>
                        <span style={{ fontSize: 2.4 + 'rem' }}>메모장</span>
                    </button>
                </div>
                <button className="content-right" onClick={rightClickHandler}>회원가입 / 로그인</button>
            </div>
        </div>
    )
    
}

export default Header;