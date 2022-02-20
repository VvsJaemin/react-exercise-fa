import React, { useEffect, useState } from 'react'
import Input from '../3-7.HOC/Input';
import Comments from './Comments';

const commentList = [
    {title:"comment1", content:"message1", likes:1},
    {title:"comment2", content:"message2", likes:2},
    {title:"comment3", content:"message3", likes:3},
];

function Memo() {
    const [comments, setComments] = useState(commentList)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setComments((prevComment)=>[
                ...prevComment,
                {
                    title:`comment${prevComment.length +1}`, content:`message${prevComment.length + 1}`, likes:1
                }
            ])
        }, 1000);

        return ()=>{
            clearInterval(interval);
        }
    },[])

  return  <Comments commentList={comments}/>
  
}

export default Memo
