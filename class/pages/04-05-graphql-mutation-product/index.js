import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct ($seller: String, $createProductInput: CreateProductInput!){
        createProduct(
        seller:$seller, 
        createProductInput: $createProductInput
    ){
        number
        message
        }
    }
`

export default function GraohqlMutationProductPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState ("")

    async function onClickSubmit() {
        const result = await createProduct({
            variables: {
                seller: "영희",
                createProductInput: {
                    name: "키보드",
                    detail: "아주 좋은 키보드",
                    price: 5000
                }
            }
        })
    
    }
     
    function onChangeSeller(event) {
        setSeller(event.target.value)
    }
    function onChangeName(event) {
        setName(event.target.value)
        
    }
    function onChangeDetail(event) {
        setDetail(event.target.value)
        
    }
    function onChangePrice(event) {
        setPrice(event.target.value)
        
    }

    async function onClickSubmit() {
        const result = await createProduct({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price : Number(price)
                }
            }
        })
        console.log(result)
        
    }


    return (
        <>
            판매자: <input type="text" onChange={ onChangeSeller}/>
            상품명:<input type="text" onChange={ onChangeName }/>
            상품상세:<input type="text" onChange={ onChangeDetail }/>
            상품가격:<input type="text" onChange={  onChangePrice}/>
            <button onClick={onClickSubmit}>상품 등록히기!!</button>
        </>
    )
    
}