import './Register.scss'

const Register = () => {

    return (
        <div style={{backgroundColor: '#fffffcee'}}>
            <div className='register-entire'>
                <div className='register-entire-element'>
                    <h1 style={{color: '#9bce98'}}>회원가입</h1>
                    <div className='register-element'>
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
                                <button className='login-but' type="submit">회원가입</button>
                            </div>   
                        </div>                
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Register;