import React, { useState, Fragment, useRef } from 'react';
import axios from 'axios';
import ErrorModal from '../../components/common/ErrorModal';

import './Login.scss'


const Login = () => {
    
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(error); 

        if (email.trim().length === 0 || pwd.trim().length === 0) {
            setError({
                title: '에러 메시지',
                message: '이메일과 비밀번호를 정확히 입력해주세요',
            });
            return;
          }
      
        try { 

        } catch (error) {
            console.log(error)
        }
    };

    const errorHandler = () => {
        setError(null);
      };

    return (
        <div style={{backgroundColor: '#fffffcee'}}>
            {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={errorHandler}
            />
            )}
            <div className='login-entire'>
                <form className='login-entire-element' onSubmit={submitHandler}>
                    <h1 style={{color: '#9bce98'}}>로그인</h1>
                    <div className='login-element'>
                        <div style={{marginBottom:1 + 'rem'}}>
                            <span className='span-email'><b>이메일</b></span>
                            <input className='email-input' type="email" placeholder="이메일 입력"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <Fragment>
                            <span className="span-pw"><b>패스워드</b></span>
                            <input className='pw-input' type="password" placeholder="비밀번호 입력" 
                                onChange={(event) => setPwd(event.target.value)} 
                            />
                        </Fragment>   
                        <Fragment>
                            <div className='login-element-foot'>
                                <div className="login-state">
                                    <input type="checkbox" value="" />
                                    <span style={{color:'#9bce98'}}>로그인 상태유지</span>
                                </div>
                                <button className='login-but' type="submit">로그인</button>
                            </div>   
                        </Fragment>                
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Login;