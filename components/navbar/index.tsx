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
            <Link href={'/pokedex'}>
                Pokedex
            </Link>
        </li>

        <li>
            <Link href={'/todos'}>
                Todos
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