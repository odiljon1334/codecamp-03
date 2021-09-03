import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
   query fetchProduct($productId:ID) {
       fetchProduct(productId: $productId) {
            name
            _id
            detail
            price
        }
   }

`

export default function RouterPag() {
    const router = useRouter()
    console.log(router.query.aaa);
    console.log(router)

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId : router.query.aaa
        }
    })
    //

    return (
        <>
            <div>상품정포 상세 페이지 </div>
            <div> 사용자 아이디 : { router.query.aaa}</div>
            <div> 상품명 {data && data.fetchProduct.name}</div>
            <div>상품상세 {data && data.fetchProduct.detail}</div>
            <div>상품가격 { data && data.fetchProduct.price}</div>
        </>
    )
    
}