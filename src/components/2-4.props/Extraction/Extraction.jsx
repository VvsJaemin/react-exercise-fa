import React from 'react'
function formatDate(date) {
    return date.toLocaleDateString();
  }

  function Avatar(props){
   return (<img className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name} />
   )
  }

  function UserInfo(props){
      return (
        <div className="UserInfo">
        <Avatar user={props.user} />
          <div className="UserInfo-name">
            {props.user.name}
          </div>
        </div>
      )
  }
  
  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

  
function Extraction() {
    //props - 컴포넌트에 전달되는 단일 객체
    // 순수함수처럼 동작 - > props를 수정해서 안됨(읽기 전용)
    // 컴포넌트 합성은 여러 컴포넌트를 모은다. 컴포넌트 추출은 여러곳에서 사용되거나 복잡한 경우 추출한다. 
  return (
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} />
  )
}

export default Extraction
