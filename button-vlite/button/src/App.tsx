import { useState } from 'react'
import './App.css'
import Alert from './assets/components/Alert'
import ButtonClass from './assets/components/Button'

function App() {
  const [count, setCount] = useState(0)

  const alertMessage = () => {
    return
  }

  return (
    <>
      <div>
      <Alert color="primary">Clicked Event</Alert>
       <ButtonClass color="primary" onClick={() => alertMessage()}>My Button</ButtonClass>
      </div>
    </>
  )
}

export default App
