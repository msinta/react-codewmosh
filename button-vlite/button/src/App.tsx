import { useState } from 'react'
import './App.css'
import ButtonClass from './assets/components/button'
import Alert from './assets/components/Alert'

function App() {
  const [count, setCount] = useState(0)

  const alertMessage = () => {
    return <div> <Alert>Clicked Event</Alert></div>
  }

  return (
    <>
      <div>
      <Alert color="primary">Clicked Event</Alert>
       <ButtonClass color="primary" onClick={() => alertMessage}>My Button</ButtonClass>
      </div>
    </>
  )
}

export default App
