import React, {useContext} from 'react';
import './error-indicator.css';
import errorImg from './browser.svg';
import MyContext from '../bookStore-context';

const ErrorIndicator = () => {
  const context = useContext(MyContext);
  return (
    <div className='error'>
<<<<<<< HEAD
      <img src={errorImg} width='100px' height='100px'/>
      <p>Sorry, something was terribly wrong  : (</p>
=======
      <img src={errorImg} width='100px' height='100px' alt=''/>
      <p>Sorry,something was terribly wrong</p>
      <p>{context}</p>
>>>>>>> 2016e30959509420a601e9722058eff1250be84d
    </div>
  )
}

export default ErrorIndicator;