import React, { useCallback } from 'react'
import CommentItem from './CommentItem'

function Comments({commentList}) {
    // 한 번만 실행되도록 함. useCallback없이는 렌더링 될 때마다 props가 다르기 때문에 매번 값이 호출

    
    // 특정한 값을 memoization할 땐 useMemo 사용, 특정 함수를 memoization 할 땐 useCallback을 사용(props가 같은지 살펴봐야함. 미 설정 시 다르고 memoization을 하면 재 렌더링이 되어도 props는 변하지 않음)
    const handleClick =useCallback(()=>{
        console.log('눌림')
    },[]);

  return (
    <div>
      {commentList.map((comment)=>(
            <CommentItem
            key={comment.title}
            title={comment.title}
            content={comment.content}
            likes={comment.likes}
            onClick={handleClick}
            />
        ))}
    </div>
  )
}

export default Comments
