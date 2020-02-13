import React from 'react'

const Part = (props) => {
    const part = props.part
    //console.log(part)
    return (
        <>
        <p>{part.name} {part.exercises}</p>
        </>
    )
}

export default Part
