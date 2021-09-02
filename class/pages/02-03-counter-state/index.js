export default function CounterStatePage() {
    
    //const [state이름, state저장도구 ] = useState("초기값")
    const [ count, setCount] = useState()

    return (
        <>
            <div>0</div>
            <button onClick={aaa}>카운트증가</button>
        </>

    )
}