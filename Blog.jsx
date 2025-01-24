import React from 'react'

const Blog = ({fname, salary,skills}) => {
  return (
      <div>
        {fname && <h1>I am {fname}</h1>}
        {salary && <h3>Salary : {salary}</h3>}
        {skills && (
            <>
            <p>Skills</p>
            <ul>
          {skills.map((item, index) => (
            <li>{item}</li> 
          ))}
        </ul>
        </>
      )}
    </div>
  )
}

export default Blog