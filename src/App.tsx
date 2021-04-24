import React from 'react';
import Line from './components/Line'

const App: React.FC = () => {

  return (
    <svg>
      <Line 
        stiffness={100}
        damping={20}
        canvas={{x: 300, y: 400}}
        padding={20}
      />
    </svg>
  )
}

export default App;
