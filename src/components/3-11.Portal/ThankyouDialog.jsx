import React from 'react'
import Dialog from './Dialog'

function ThankyouDialog() {
  return (
    <Dialog title={<h1 style={{color: 'purple'}}>Thanks</h1>} 
            description="It is honor to meet you!" 
            button= {<button style={{backgroundColor: "blue", color :"white"}}>close</button>}>
      
    </Dialog>
  )
}

export default ThankyouDialog
