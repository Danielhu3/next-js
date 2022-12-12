import Link from 'next/link'

const index = () => {
  return (
    <>
    <ul>
        <li>
            <Link href={'/'}>
                Home
            </Link>
        </li>

        <li>
            <Link href={'/about'}>
               About
            </Link>
        </li>

        <li>
            <Link href={'/products'}>
               Products
            </Link>
        </li>
    </ul>
    
    </>
   
  )
}

export default index