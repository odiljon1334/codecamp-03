import { useMutation,gql } from '@apollo/client'


const CRAET_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents: String )   {
  createBoard(writer: $writer, title: $title, contents: $contents){
    number
    message
  }
}
`

export default function GraphqlMutationBoard1Page() {
    const [createBoard] = useMutation(CRAET_BOARD)
       
    async function aaa() {
        const result = await createBoard({
            variables:{writer:"철수", title:"제목이에요", contents:"내용!!" }
        })
        console.log(result)
        console.log(result.data.createBoard.number)
    }
    
  return (
      
        <button onClick={aaa}>GRAPHQL_API 요청하기!!</button>
    )
}