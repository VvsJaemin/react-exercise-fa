import React, { useRef } from 'react'

// 비제어 컴포넌트는 form element 자체의 내부 상태 활용(React state랑 연관 없음)
function UncontrolledComponent() {

    const fileInputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault()
        // React엔 값이 없지만 레퍼런스에 의해 값을 가져올 수 있음(useRef)
        alert(`Selected file - ${fileInputRef.current.files[0].name}`);
    }
  return (
    <form onSubmit={handleSubmit}>
    <label>
      Upload file:
      <input type="file" ref={fileInputRef} />
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
  )
}

export default UncontrolledComponent
