import { useState } from 'react'
import './App.css'
import {Linkform} from './components/linkForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Linkform/>
  )
}

export default App;