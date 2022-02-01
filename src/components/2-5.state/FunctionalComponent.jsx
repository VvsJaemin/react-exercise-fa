import React, { useEffect, useState } from 'react'

function FunctionalComponent() {

    const [date, setDate] = useState(new Date());

    const tick =() =>{
        setDate(new Date());
    };

    // componentDidMount 대체 - Mount이전
    useEffect(()=>{
        const interval = setInterval(()=>tick(), 1000)

        //componentWillUnmount 
        return ()=>{
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
          <h1>Hello, world! It's Functional</h1>
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
      );
}

export default FunctionalComponent
