import React from 'react'
import Header from './component/Header.js'
import Content from './component/Content.js'
import Total from './component/Total.js'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts} />
    </>
  )
}


export default App;
