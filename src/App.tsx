import React from 'react';
import LineChart from './components/LineChart'
import styled from 'styled-components';
import { configw } from './lib/configw'


const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const InputField = styled.div`
  border: 1px solid #ccc;
`

const Tabs = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: #f1f1f1;
`

const TabButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;

  :hover {
    background-color: #ddd;
  }

  :focus {
    background-color: #c2c2c2;
  }
`

const Center = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`


const App: React.FC = () => {

  const [state, setState] = React.useState<number>(0)
  const [damping, setDamping] = React.useState(26)
  const [stiffness, setStiffness] = React.useState(170)
  const [duration, setDuration] = React.useState(50)

  const durationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(parseInt(e.target.value))
    const [stiffness, damping] = configw(duration/100)
    setStiffness(stiffness)
    setDamping(damping)
  }

  const inputSwitch = (currentTab: number) => {
    switch(currentTab){
      case 0:
        return (
          <>
            <label>Stiffness: </label>
            <input 
              type="range" 
              min="0" 
              max="300"
              value={stiffness}
              onChange={e => setStiffness(parseInt(e.target.value))}
            />
            <br />
            <label>Damping: </label>
            <input 
              type="range" 
              min="0" 
              max="40" 
              value={damping} 
              onChange={e => setDamping(parseInt(e.target.value))}
            />
          </>
        )
      case 1:
        return (
          <>
            <input type="radio" value="0" name="precents" onChange={() => {setDamping(26); setStiffness(170)}}/><label>No Wobble</label>
            <input type="radio" value="1" name="precents" onChange={() => {setDamping(14); setStiffness(120)}}/><label>Gentle</label>
            <input type="radio" value="2" name="precents" onChange={() => {setDamping(12); setStiffness(180)}}/><label>Wobbly</label>
            <input type="radio" value="3" name="precents" onChange={() => {setDamping(20); setStiffness(210)}}/><label>Stiff</label>
          </>
        )
      case 2:
        return (
          <>
            <label>Stiffness: </label><input type="number" value={stiffness} onChange={e => setStiffness(parseInt(e.target.value))}/>
            <label>Damping: </label><input type="number" value={damping} onChange={e => setDamping(parseInt(e.target.value))}/>
          </>
        )
      case 3:
        return (
          <>
            <label>Duration: </label><input type="number" value={duration} onChange={durationChange}/>
          </>
        ) 
    }

    return <></>
  }

  return (
    <Container>
      <div>

        <h1>React-Motion Spring Parameter Chooser</h1>
        
        
        <InputField>
          <Tabs>
            <TabButton onClick={() => setState(0)}>Range</TabButton>
            <TabButton onClick={() => setState(1)}>Precents</TabButton>
            <TabButton onClick={() => setState(2)}>Text Field</TabButton> 
            <TabButton onClick={() => setState(3)}>Duration</TabButton> 
          </Tabs>
          <Center><div>{inputSwitch(state)}</div></Center>
        </InputField>
        <br />
        <br />
        <Center>
          <LineChart 
            stiffness={stiffness}
            damping={damping}
            canvas={{x: 500, y: 300}}
            padding={{top: 13, right: 15, buttom: 50, left: 50}}
            maxValue={{x: 300, y: 200}}
          />
        </Center>
      </div>
    </Container>
  )
}

export default App;
