import React from 'react'

export const Home = (props) => {
  return (
    <div>
      <h1>{props.obj.name}</h1>
      <h1>{props.obj.age}</h1>
    </div>
  )
}
