import { useRouter } from "next/router"

export default function DynamicRoutedPage() {
    const router = useRouter();
    console.log();
    
    return (
        
        <div>{router.query.aaa}</div>
    )
}