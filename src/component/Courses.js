import React from 'react'
import Course from './Course.js'

const Courses = ({courses}) => courses.map(course=><Course course={course} /> )

export default Courses
