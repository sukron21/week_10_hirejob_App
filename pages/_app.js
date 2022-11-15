import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import "../styles/login.module.css"
import "../styles/landing.module.css"
import "../styles/home1.module.css"
import "../styles/profile.module.css"
import React, {useEffect} from 'react'


function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  })
  return <Component {...pageProps} />
}

export default MyApp
