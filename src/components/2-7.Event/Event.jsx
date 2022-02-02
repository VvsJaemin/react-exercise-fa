import React from 'react'

function Event() {
    const handleButtonClick =(e)=>{
        console.dir(e);
        console.log('handleButtonClick');
    }

    const handleMouseLeave =(e)=>{
        console.dir(e);
        
    }


    const handleClickCapture=()=>{
        console.log('handleClickCapture');
    }

    const handleClickCapture2=()=>{
        console.log('handleClickCapture2');
    }

    const handleClickBubble=()=>{
        console.log('handleClickBubble');
    }

    // 캡쳐링은 부모에서 - > 자식, 자식에서 어느 자식이 불렸는지(클릭) 확인 ->
    //  그다음 버튼 이벤트 핸들러(handleButtonClick) -> 이벤트 버블링
    // Bubble / Capure  --- Capture -> target(onClick 등 이벤트) -> Bubble
    // return false일 경우 리엑트에선 e.preventDefault() 막아줘야함.

  return (
    <div onClickCapture={handleClickCapture}>
        <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
      <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
        </div>
    </div>
  )
}

export default Event
