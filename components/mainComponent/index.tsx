import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

type Props = {
    children: JSX.Element | JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default index