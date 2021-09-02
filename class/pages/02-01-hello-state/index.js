import { useState } from 'react';

export default function HelloStatePage() {
    
    //const [state이름, state저장도구 ] =useState("초기값")
    const [aaa, setCount] = useState(1)
    
    function aaa() {
        setCount(count + 1)
    }

    return (
         <>
            <div>{count}</div>
            <button onClick={aaa}>카운트증가</button>
         </>
    )
         
       
            
}