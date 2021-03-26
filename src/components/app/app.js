import React from 'react';
import ErrorIndicator from '../error-indicator/';
import MyContext from '../bookStore-context'
import ErrorBoundry from '../error-boundry/error-boundry';

const App = () => {
  return (
    <MyContext.Provider value='78'>
      <ErrorBoundry>
        <div className='app'>
          <ErrorIndicator/>
        </div>
      </ErrorBoundry>
    </MyContext.Provider>
  )

}

export default App