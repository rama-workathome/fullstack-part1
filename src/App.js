import React, { useState } from 'react'
import Button from './component/Button.js'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const getQuote = () => {
    setSelected(Math.floor((Math.random()*props.anecdotes.length)))
  }
  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <Button handler={()=>getQuote()} text="next anecdote" />
    </div>
  )
  
}


export default App;
