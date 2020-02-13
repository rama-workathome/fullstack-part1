import React from 'react'

const StatDisplay = ({text,value}) => {
    return (
      <tr><td>{text}</td><td align="right">{value}</td></tr>
    )
  }

export default StatDisplay
