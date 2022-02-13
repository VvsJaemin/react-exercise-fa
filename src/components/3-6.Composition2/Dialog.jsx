import React, { useState } from 'react'

function Dialog(props) {
  // typeof가 button일 경우 이벤트 버블링으로 close 가능(캡쳐링 -> 타켓 -> 버블링), onClick 이벤트
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={()=>setIsOpen(true)}>isOpen</button>
      {isOpen && (
      <div 
        style={{position: "absolute", 
        zIndex:99, 
        top:"50%", 
        left:"50%", 
        transform:"translate(-50%, -50%)",
        border:"1px solid black", 
        padding :"24", 
        backgroundColor : "white"
        }}
       >
         <h1>{typeof props.title ==="string" ? (<h1>{props.title}</h1>) : (props.title)}</h1>
         <h5>{typeof props.description ==="string" ? (<h1>{props.description}</h1>) : (props.description)}</h5>
        {typeof props.button ==="string" ? (<button style={{backgroundColor:"red", color: "white"}}onClick={()=>setIsOpen(false)}>{props.button}</button>) :
        (<div onClick={()=>setIsOpen(false)}>{props.button}</div>) } 
      </div>
       )}
      {isOpen && <div style={{
        position : "fixed",
        top : 0,
        left : 0,
        bottom : 0,
        right : 0,
        backgroundColor : "lightgray"
      }}/>}
    </>
  )
}

export default Dialog
