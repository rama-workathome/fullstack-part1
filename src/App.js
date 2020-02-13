import React, { useState } from 'react'
import Button from './component/Button.js'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))

  const getQuote = () => {
    setSelected(Math.floor((Math.random()*props.anecdotes.length)))
  }

  const addVote = (value) => {
    let temp = [...votes]
    temp[value]++
    setVotes(temp)
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handler={()=>addVote(selected)} text="vote" />
      <Button handler={()=>getQuote()} text="next anecdote" />
    </div>
  )
  
}


export default App;
