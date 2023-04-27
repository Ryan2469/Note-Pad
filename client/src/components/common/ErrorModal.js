import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './ErrorModal.css';

const Modal = (props) => {
    return(
        <Fragment>
            <div className='backdrop' onClick={props.onConfirm}/>
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
        </Fragment>
    )
}

const ErrorModal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(
            <Modal
                title={props.title}
                message={props.message}
                onConfirm={props.onConfirm} 
            />,
            document.getElementById('modal-root')
        )}
    </Fragment>
  );
};

export default ErrorModal;