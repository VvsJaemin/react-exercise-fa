import React from 'react'

function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}

function Composition() {
  return (
    <div>
      <Welcome name="jaemin"/>
    </div>
  )
}

export default Composition
