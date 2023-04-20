import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: 15 + 'rem'}}>
            <div style={{color: '#438fd0b5'}}>
                <h1>잘못된 경로로 접근하셨습니다.</h1>
                <h1>하단의 링크를 클릭해서 돌아가 주세요</h1>
                <Link to='/'style={{textDecoration: "none", textAlign: 'center'}}>
                    <h1 style={{color: 'rgb(174 70 205 / 71%)'}}>돌아가기</h1>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;