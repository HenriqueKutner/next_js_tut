import { useEffect } from 'react'
import { useRouter } from ' next/router'
import Link from 'next/link'

const NotFound = () => {

    const router = useRouter()
    console.log(router)

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
            console.log(5)
        }, 3000)
    },[])

    return (
        <div className="not-found">
            <h1>Oooooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link></p>
        </div>
    );
}
 
export default NotFound;