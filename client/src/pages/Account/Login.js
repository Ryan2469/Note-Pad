import './Login.scss'

const Login = () => {

    return (
        <div style={{backgroundColor: '#fffffcee'}}>
            <div className='login-entire'>
                <div className='login-entire-element'>
                    <h1 style={{color: '#9bce98'}}>로그인</h1>
                    <div className='login-element'>
                        <div style={{marginBottom:1 + 'rem'}}>
                            <span className='span-email'><b>이메일</b></span>
                            <input className='email-input' type="email" placeholder="이메일 입력"/>
                        </div>
                        <div>
                            <span className="span-pw"><b>패스워드</b></span>
                            <input className='pw-input' type="password" placeholder="비밀번호 입력" />
                        </div>   
                        <div>
                            <div className='login-element-foot'>
                                <div className="login-state">
                                    <input type="checkbox" value="" />
                                    <span style={{color:'#9bce98'}}>로그인 상태유지</span>
                                </div>
                                <button className='login-but' type="submit">로그인</button>
                            </div>   
                        </div>                
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;