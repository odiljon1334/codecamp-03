import { useMutation, gql } from "@apollo/client"


const CRAET_BOARD = gql`
mutation createBoard {
  createBoard(writer:"Odiljon", title:"Assalomu aleykum", contents:"Mavzu" ){
    number
    message
    }
}
`



export default function MutationProfilPage() {
    const [createBoard] = useMutation(CRAET_BOARD)

    async function zaz() {
        const result = await createBoard()
        console.log(result)
        console.log(result. data.createBoard.number)
        
    }


    return (
        <button onClick={zaz}>GRAPHQL_API 요청하기!!</button>
    )
    
}