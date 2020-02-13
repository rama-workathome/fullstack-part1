import React from 'react'
import StatDisplay from './StatDisplay.js'

const Stats = ({stats}) => {
    return (
        <>
          <StatDisplay text="good" value={stats.good} />
          <StatDisplay text="neutral" value={stats.neutral} />
          <StatDisplay text="bad" value={stats.bad} />
        </>
    )    
  }

export default Stats

