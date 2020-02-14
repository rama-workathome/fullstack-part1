import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
    const course = props.course

    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total total={course.parts} />
        </>
    )
}

export default Course
