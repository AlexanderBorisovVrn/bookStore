import React, {useContext} from 'react';
import './error-indicator.css';
import errorImg from './browser.svg';
import MyContext from '../bookStore-context';

const ErrorIndicator = () => {
  const context = useContext(MyContext);
  return (
    <div className='error'>
      <img src={errorImg} width='100px' height='100px' alt=''/>
      <p>Sorry,something was terribly wrong</p>
      <p>{context}</p>
    </div>
  )
}

export default ErrorIndicator;