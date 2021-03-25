import React from 'react';
import './error-indicator.css';
import errorImg from './browser.svg';

const ErrorIndicator = () => {
  return (
    <div className='error'>
      <img src={errorImg} width='100px' height='100px'/>
      <p>Sorry, something was terribly wrong  : (</p>
    </div>
  )
}

export default ErrorIndicator;