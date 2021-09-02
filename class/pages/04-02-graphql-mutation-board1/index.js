import { useMutation,gql } from '@apollo/client'


const CRAET_BOARD = gql`
mutation{
  createBoard(writer:"영희", title:"안녕하세요! 영희입니다.", contents:"내용"){
    number
    message
  }
}
`

export default function GraphqlMutationBoard1Page() {
    const [createBoard] = useMutation(CRAET_BOARD)
       
    async function aaa() {
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.number)
    }
    
    return (
        <button onClick={aaa}>GRAPHQL_API 요청하기!!</button>
    )
}