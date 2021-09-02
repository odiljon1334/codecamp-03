import axios from 'axios'


export default function RestGetPage() {

    async function zzz() {
        const result =  await axios.get('https://koreanjson.com/')
          console.log(result)
    }
    
    return (
         <button onClick={zzz}>=REST-API 요청하기!!</button>
     )
    
}