import React from 'react';
import LineChart from './components/LineChart'
import InputField from './components/InputField'

const App: React.FC = () => {

  return (
    <>
      <InputField />
      <LineChart 
        stiffness={100}
        damping={20}
        canvas={{x: 500, y: 300}}
        padding={{top: 13, right: 15, buttom: 50, left: 50}}
        maxValue={{x: 300, y: 200}}
      />
    </>
  )
}

export default App;
