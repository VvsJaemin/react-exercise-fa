import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react'

export default function withLoading(Component) {
// 고차 컴포넌트(HOC)는 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수.
    const WithLoadingComponent =(props)=>{
        const [loading, setLoading] = useState(true);

        useEffect(()=>{
            const timer = setTimeout(()=> setLoading(false), 3000)

            return ()=> clearTimeout(timer);
        },[])

        return loading ? <p>...Loading</p> : <Component {...props}/>
    };

  return WithLoadingComponent;
}
