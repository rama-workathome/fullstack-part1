import React from 'react'
import StatDisplay from './StatDisplay.js'

const Stats = ({stats}) => {
    //console.log(stats)
    let averageF=0
    let positiveF='0%'
    let allF=0
    if (stats.good + stats.neutral + stats.bad > 0) {
      allF = stats.good + stats.bad + stats.neutral
      averageF = ((stats.good - stats.bad)/allF).toFixed(1)
      positiveF = ((stats.good*100)/allF).toFixed(1) + '%'
      return (
        <>
          <StatDisplay text="good" value={stats.good} />
          <StatDisplay text="neutral" value={stats.neutral} />
          <StatDisplay text="bad" value={stats.bad} />
          <StatDisplay text="all" value={allF} />
          <StatDisplay text="average" value={averageF} />
          <StatDisplay text="positive" value={positiveF} />
        </>
      )
    } else {
      return (
        <p>No feedback given</p>
      )
    }
  }

export default Stats

