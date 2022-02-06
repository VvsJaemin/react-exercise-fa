import React from 'react'

function List() {
//     const numbers = [1,2,3,4,5];

//   return (
//     <div>
//       {numbers.map((item)=> (
//       <li key={item.toString()}>{item}</li>
//       ))}
//     </div>
//   )
    const todos = [
        {id : 1, text : "Drink Water"},
        {id : 2, text : "Wash Car"},
        {id : 3, text : "Listen Lecture"},
        {id : 4, text : "Go To Bed"},
    ];

    const Item =(props)=>{
        return (
        <li>
            {props.id}
            {props.text}
         </li>
        )
    }

    // map  - 배열의 개별 요소를 순회
    // default key - 안주면 react는 index를 쓴다
    // key props = key는 props로 넘어가지 않음 
    const todoList = todos.map((todo)=><Item key={todo.id} id = {todo.id} text={todo.text} />)

    return(
        <>{todoList}</>
    )
}

export default List
