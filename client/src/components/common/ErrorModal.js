import React from 'react';

import './ErrorModal.css';

const ErrorModal = (props) => {
  return (
    <div>
        <div className='backdrop'/>
        <div className='modal'>
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div className='content'>
                <p>{props.message}</p>
            </div>
            <footer className='actions'>
                <button 
                className='button'
                type={props.type || 'button'}
                onClick={props.onConfirm}
                >
                    확인
                </button>
            </footer>
        </div>
    </div>
  );
};

export default ErrorModal;