import React from 'react'

const Total = (props) => {
    const part = [...props.total]
    const total = part.reduce((a,b) =>{ 
        return a + b.exercises
      },0)    
    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total
