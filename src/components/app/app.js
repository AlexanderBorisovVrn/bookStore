import React from 'react';
import ErrorIndicator from '../error-indicator/';
import MyContext from '../bookStore-context'

const App = () => {
   return (
    <MyContext.Provider value='78'>
      <div className='app'>
        <ErrorIndicator/>
      </div>
    </MyContext.Provider>
  )
  
}

export default App