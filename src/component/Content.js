import React from 'react'
import Part from './Part.js'

const Content = ({parts}) => {
    //console.log(part)
    return (
        <>
        {parts.map(part=><Part key={part.name} part={part} />)}
        </>
    )
}

export default Content
