import axios from "axios"


export default function RestGetPage() {

   async function zzz() {
        const result = await axios.get('https://koreanjson.com/')
        console.log(result)
        
    }
    
    return (
        <buttton onClick={zzz}>REST_API 요청하기</buttton>
    )
    
}