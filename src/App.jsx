import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'
import Header from './Components/Header'
import Form from './Components/Form'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className={style.container}>
      <Header/>
      <Form/>

    </div>
  )
}

export default App
