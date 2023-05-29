import React from 'react'
import Head from 'next/head';{/* work as html head */}
import Footer from './Footer';
import Navbar from './Navbar';
const Layout = ({children}) => { {/* passed from _app.js component as childern */}
  return (
    <div className='layout'> 
    
      <Head> 
        <title> ANSHUNILAY store </title>
      </Head>
      <header>
      <Navbar />
      </header>
        <main className='main-container'>
          {children}
        </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout