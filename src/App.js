import React, { useState } from 'react'
import Header from './component/Header.js'
import Button from './component/Button.js'
import Stats from './component/Stats.js'

const App = () => {
  const [ feedback, setFeedback ] = useState({
    good: 0, bad: 0, neutral: 0
  })
  let newFeedback = {
    good: feedback.good,
    bad: feedback.bad,
    neutral: feedback.neutral
  } 
  const setValue = (value) => {      
    switch (value) {
      case 'good':
        newFeedback = {
          good: feedback.good + 1,
          bad: feedback.bad,
          neutral: feedback.neutral
        }
        break;          
      case 'bad':
        newFeedback = {
          good: feedback.good,
          bad: feedback.bad + 1,
          neutral: feedback.neutral
        }
        break;
      case 'neutral':
        newFeedback = {
          good: feedback.good,
          bad: feedback.bad,
          neutral: feedback.neutral + 1
        }
        break;
      default:
        break;
    }
    //console.log(newFeedback)
    return (
      setFeedback(newFeedback)  
    )
  }

  return (
    <div>
      <Header course="give feedback" />
      <Button handler={()=>setValue('good')} text=" good " />
      <Button handler={()=>setValue('neutral')} text=" neutral " />
      <Button handler={()=>setValue('bad')} text=" bad " />
      <Header course="statistics" />
      <Stats stats={feedback} />
    </div>
  )
}


export default App;
