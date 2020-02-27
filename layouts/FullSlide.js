import React from 'react';

export default ({children}) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
    }}>
      {children}
    </div>
    )
