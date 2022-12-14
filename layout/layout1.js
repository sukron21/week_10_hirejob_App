import React from 'react'
import Navbar from '../component/navbar.js'
import Footer from '../component/Footer'

const layouts1 = (props) => {
  const {children} = props
  return (
    <>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default layouts1